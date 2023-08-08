import type { User } from "../types";
import bcrypt from "bcryptjs";
import axios from "axios";
import dayjs from "dayjs";

function buildUserConfig({ action, document = null, filter = null }: any) {
  let config: any = {
    method: "post",
    url: `${process.env.DATA_API_BASE_URL}/action/${action}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.DATA_API_KEY,
    },
    data: {
      dataSource: "cookbook",
      database: "cookbook",
      collection: "User",
    },
  };

  if (document) config.data.document = document;
  if (filter) config.data.filter = filter;

  return config;
}

export async function getUserById(id: User["id"]) {
  const action = "findOne";
  const filter = {
    _id: { $oid: id },
  };

  const config = buildUserConfig({ action, filter });
  const result = await axios(config);

  return {
    ...result.data.document,
    createdAt: dayjs(result.data.document.createdAt).format("MMMM DD, YYYY"),
  };
}

export async function getUserByEmail(email: User["email"]) {
  const action = "findOne";
  const filter = {
    email: { email: email },
  };

  const config = buildUserConfig({ action, filter });
  const result = await axios(config);

  return {
    ...result.data.document,
    createdAt: dayjs(result.data.document.createdAt).format("MMMM DD, YYYY"),
  };
}

export async function createUser(email: User["email"], password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const action = "insertOne";
  const document = {
    email,
    hashedPassword,
    createdAt: dayjs().format(),
    updatedAt: dayjs().format(),
  };

  const config = buildUserConfig({ action, document });
  const result = await axios(config);

  return result.data.insertedId;
}

export async function deleteUserByEmail(email: User["email"]) {
  const action = "deleteOne";
  const filter = {
    email: { email: email },
  };

  const config = buildUserConfig({ action, filter });
  const result = await axios(config);

  return result.data.deletedCount;
}

export async function verifyLogin(
  email: User["email"],
  password: User["password"]
) {
  const userWithPassword = await getUserByEmail(email);

  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    userWithPassword.password.hash
  );

  if (!isValid) {
    return null;
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return userWithoutPassword;
}
