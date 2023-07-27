import axios from "axios";
import dayjs from "dayjs";

function buildConfig({
    action,
    document = null,
    filter = null,
    projection = null,
    sort = null,
    limit = null,
    skip = null

}: any
) {
    let config: any = {
        method: "post",
        url: `${process.env.DATA_API_BASE_URL}/action/${action}`,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "api-key": process.env.DATA_API_KEY
        },
        data: {
            dataSource: "cookbook",
            database: "cookbook",
            collection: "Recipe",
        }
    };

    if (document) config.data.document = document
    if (filter) config.data.filter = filter
    if (projection) config.data.projection = projection
    if (sort) config.data.sort = sort
    if (limit) config.data.limit = limit
    if (skip) config.data.skip = skip

    return config;
}

async function createRecipe(title: string, description: string, ingredients: string[], steps: string[], categories: string[], photoUrl: string) {
    const action = 'insertOne'
    const document = {
        title,
        description,
        ingredients,
        steps,
        categories,
        photoUrl,
        createdAt: dayjs().format(),
        updatedAt: dayjs().format()
    }

    const config = buildConfig({ action, document })
    const result = await axios(config)

    return result.data.insertedId;
}

async function getRecipe(id: string) {
    const action = 'findOne'
    const filter = {
        _id: { "$oid": id }
    }

    const config = buildConfig({ action, filter })
    const result = await axios(config)

    return {
        ...result.data.document,
        createdAt: dayjs(result.data.document.createdAt).format(('MMMM DD, YYYY'))
    };
}

async function searchRecipes() {
    const action = 'findMany'

    const config = buildConfig({ action, limit: 10 })
    const result = await axios(config)

    return result.data.documents;
}

export { getRecipe, searchRecipes, createRecipe };