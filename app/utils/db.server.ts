import axios from "axios";
import dayjs from "dayjs";

function buildConfig({ action, document = null, filter = null, projection = null }: any) {
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

    return config;
}

async function createRecipe(title: string, description: string, ingredients: string[], steps: string[], categories: string[], photoUrl: string, authorId: string) {
    const action = 'insertOne'
    const document = {
        title,
        description,
        ingredients,
        steps,
        categories,
        photoUrl,
        authorId,
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

export { getRecipe, createRecipe };