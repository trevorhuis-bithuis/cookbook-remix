import axios from "axios";
import dayjs from "dayjs";
import { buildConfig } from "~/utils/db.server";

async function createRecipe(
  title: string,
  description: string,
  ingredients: string[],
  steps: string[],
  categories: string[],
  photoUrl: string
) {
  const action = "insertOne";
  const document = {
    title,
    description,
    ingredients,
    steps,
    categories,
    photoUrl,
    createdAt: dayjs().format(),
    updatedAt: dayjs().format(),
  };

  const config = buildConfig({ action, document });
  const result = await axios(config);

  return result.data.insertedId;
}

// update recipe
async function updateRecipe(
  id: string,
  title: string,
  description: string,
  ingredients: string[],
  steps: string[],
  categories: string[],
  photoUrl: string
) {
  const action = "updateOne";
  const filter = {
    _id: { $oid: id },
  };
  const update = {
    $set: {
      title,
      description,
      ingredients,
      steps,
      categories,
      photoUrl,
      updatedAt: dayjs().format(),
    },
  };

  const config = buildConfig({ action, filter, update });
  const result = await axios(config);

  return result.data.modifiedCount;
}

async function getRecipe(id: string) {
  const action = "findOne";
  const filter = {
    _id: { $oid: id },
  };

  const config = buildConfig({ action, filter });
  const result = await axios(config);

  return {
    ...result.data.document,
    createdAt: dayjs(result.data.document.createdAt).format("MMMM DD, YYYY"),
  };
}

async function deleteRecipe(id: string) {
  const action = "deleteOne";
  const filter = {
    _id: { $oid: id },
  };

  const config = buildConfig({ action, filter });
  const result = await axios(config);

  return result.data.deletedCount;
}

export { createRecipe, updateRecipe, getRecipe, deleteRecipe };
