import { redirect, type LoaderArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { prisma } from "~/utils/prisma.server";

export async function action({ request }: LoaderArgs) {
    const formData = await request.formData();
    const { _action, ...values } = Object.fromEntries(formData);

    if (_action === "create") {
        const recipe = await prisma.recipe.create({
            data: {
                title: values.title as string,
                description: values.description as string,
                author: {
                    connect: {
                        id: '64616f2af022f60f52d568d8',
                    }
                }
            },
        });
        return redirect(`/recipes/${recipe.id}`);
    }
}

export default function Create() {

    return (
        <div className="h-screen flex justify-center items-center">
            <Form className="w-1/2" method="POST">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-center">Create a new Recipe</h1>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                            Title
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="title"
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Peanut Butter and Jelly Sandwich"
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
                                placeholder="Two pieces of bread with peanut butter and jelly in the middle."
                            />
                        </div>
                    </div>
                    <button className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" name="_action" value="create">Submit</button>
                </div>
            </Form>
        </div>
    )
}