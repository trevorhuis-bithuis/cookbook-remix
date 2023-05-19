import { redirect, type LoaderArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { prisma } from "~/utils/prisma.server";

export const loader = async ({ params, request }: LoaderArgs) => {
    const recipeId = params.recipeId;

    const recipe = prisma.recipe.findUnique({
        where: {
            id: recipeId,
        },
    });
    return recipe;
};

export const action = async ({ request }: LoaderArgs) => {
    const formData = await request.formData();
    const { _action, ...values } = Object.fromEntries(formData);

    if (_action === "edit") {
        return redirect(`/recipes/edit/${values.id}`);
    }
}

export default function Recipe() {
    const data = useLoaderData<typeof loader>();

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <Form className="w-1/2" method="POST">
                <input type="hidden" name="id" value={data?.id} />
                <div className="flex flex-col space-y-4">
                    <h1 className="text-center text-2xl">{data?.title}</h1>
                    <h1 className="text-center text-lg">{data?.description}</h1>
                    <h2 className="text-2xl">Steps</h2>
                    {data?.steps.map((step, idx) => (
                        <div key={idx} className="flex space-x-2">
                            <p className="text-md">{idx + 1}{'. '}{step}</p>
                        </div>
                    ))}
                    <h2 className="text-2xl">Ingredients</h2>
                    {data?.ingredients.map((ingredient, idx) => (
                        <div key={idx} className="flex space-x-2">
                            <p className="text-md">{idx + 1}{'. '}{ingredient}</p>
                        </div>
                    ))}
                    <button className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" name="_action" value="edit">Edit</button>
                </div>
            </Form>
        </div>
    )
}