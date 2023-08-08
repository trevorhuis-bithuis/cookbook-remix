import axios from "axios";
import dayjs from "dayjs";

function buildConfig({
  action,
  document = null,
  update = null,
  filter = null,
  projection = null,
  sort = null,
  limit = null,
  skip = null,
  pipeline = null,
}: any) {
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
      collection: "Recipe",
    },
  };

  if (document) config.data.document = document;
  if (update) config.data.update = update;
  if (filter) config.data.filter = filter;
  if (projection) config.data.projection = projection;
  if (sort) config.data.sort = sort;
  if (limit) config.data.limit = limit;
  if (skip) config.data.skip = skip;
  if (pipeline) config.data.pipeline = pipeline;

  return config;
}

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

export { getRecipe, createRecipe, deleteRecipe, updateRecipe, buildConfig };
