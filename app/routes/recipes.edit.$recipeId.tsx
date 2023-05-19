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

    if (_action === "delete") {
        await prisma.recipe.delete({
            where: {
                id: values.id as string,
            },
        });
        return redirect(`/`);
    }

    if (_action === "save") {
        await prisma.recipe.update({
            where: {
                id: values.id as string,
            },
            data: {
                title: values.title as string,
                description: values.description as string,
            },
        });
        return redirect(`/recipes/${values.id}`);
    }

    if (_action === "add_step") {
        await prisma.recipe.update({
            where: {
                id: values.id as string,
            },
            data: {
                steps: {
                    push: values.step as string,
                },
            },
        });
        return redirect(`/recipes/${values.id}`);
    }

    if (_action === "delete_step") {

    }

    if (_action === "add_ingredient") {

    }

    if (_action === "delete_ingredient") {

    }
}

export default function RecipeEdit() {
    const data = useLoaderData<typeof loader>();

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <Form className="w-1/2" method="POST">
                <input type="hidden" name="id" value={data?.id} />
                <div className="flex flex-col space-y-4">
                    <h1 className="text-center text-4xl">Edit your Recipe</h1>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                            Title
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="title"
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={data?.title}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                            Description
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="description"
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={data?.description}
                            />
                        </div>
                    </div>
                    <h2 className="text-2xl">Steps</h2>
                    {data?.steps.map((step, idx) => (
                        <div key={idx} className="flex space-x-2">
                            <p className="text-md">{idx + 1}{'. '}{step}</p>
                        </div>
                    ))}
                    <Form method="POST">
                        <input type="hidden" name="id" value={data?.id} />
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                name="step"
                                className="block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Next Step in Recipe"
                            />
                            <button className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" name="_action" value="add_step">Add Step</button>
                        </div>
                    </Form>
                    <h2 className="text-2xl">Ingredients</h2>
                    {data?.ingredients.map((ingredient, idx) => (
                        <div key={idx} className="flex space-x-2">
                            <p className="text-md">{idx + 1}{'. '}{ingredient}</p>
                        </div>
                    ))}
                    <Form method="POST">
                        <input type="hidden" name="id" value={data?.id} />
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                name="step"
                                className="block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="New Ingredient"
                            />
                            <button className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" name="_action" value="add_step">Add Ingredient</button>
                        </div>
                    </Form>
                    <button className="rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" type="submit" name="_action" value="delete">Delete</button>
                    <button className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" name="_action" value="save">Save</button>
                </div>
            </Form>
        </div>
    )
}