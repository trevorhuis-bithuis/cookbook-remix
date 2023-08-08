import { buildConfig } from "./db.server";
import axios from "axios";

async function getRecipes(skip: number) {
  const action = "find";
  const sort = { title: 1, _id: 1 };

  const config = buildConfig({ action, sort, skip, limit: 8 });
  const result = await axios(config);

  return result.data.documents;
}

async function getRecipeCount() {
  const action = "aggregate";
  const pipeline = [
    {
      $count: "recipeCount",
    },
  ];
  const config = buildConfig({ action, pipeline });
  const result = await axios(config);

  return result.data.documents[0].recipeCount;
}

async function getCategories() {
  const action = "aggregate";
  const pipeline = [
    {
      $group: {
        _id: null,
        categories: { $addToSet: "$categories" },
      },
    },
  ];
  const config = buildConfig({ action, pipeline });
  const result = await axios(config);

  return result.data.documents[0].categories[0];
}

async function searchRecipes(search: string, category: string, skip: number) {
  const action = "aggregate";
  const sort = { title: 1, _id: 1 };
  const pipeline = [
    {
      $search: {
        index: "default",
        text: {
          query: search,
          path: {
            wildcard: "*",
          },
        },
        sort,
        count: {
          type: "total",
        },
      },
    },
  ];

  const config = buildConfig({ action, pipeline, skip, category });
  const result = await axios(config);

  return result.data.documents;
}

export { getRecipes, getRecipeCount, getCategories, searchRecipes };
