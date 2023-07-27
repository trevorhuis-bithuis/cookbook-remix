import clsx from "clsx";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getRecipe } from "~/utils/db.server";

export const loader: LoaderFunction = async ({ params }) => {
    const id = params.id as string;

    const recipe = await getRecipe(id);

    return recipe;
}

export default function Recipe() {
    let recipe = useLoaderData();

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2">
            <div className="flex justify-start content-center space-x-2">
                <p className="text-4xl font-bold text-gray-900 p-1">{recipe.title}</p>
                <button className="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={clsx(
                            "w-6 h-6 active:animate-ping hover:fill-red-500 ",
                            recipe.isFavorite && ""
                        )}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                </button>
            </div>
            <p className="text-md text-gray-500 mt-2">
                Published on {recipe.createdAt}
            </p>
            {recipe.categories.length > 0 && (
                <div className="flex flex-wrap">
                    {recipe.categories.map((category: any, index: number) => (
                        <div
                            key={index}
                            className="flex-initial mr-4 mt-4 p-2 shadow-sm rounded-lg bg-indigo-100 text-md font-medium text-indigo-800 text-center"
                        >
                            {category}
                        </div>
                    ))}
                </div>
            )}
            {recipe.photo && recipe.photo !== "" && (
                <div className="mx-auto max-w-4xl m-4">
                    <img
                        src={recipe.photo}
                        alt={recipe.title}
                        height={300}
                        width={300}
                    />
                </div>
            )}
            <p className="text-2xl text-gray-500 mt-2">Description</p>
            <p className="text-gray-900">{recipe.description}</p>
            <p className="text-2xl text-gray-500 mt-2">Ingredients</p>
            <ul className="list-disc list-inside">
                {recipe.ingredients.map((ingredient: string, index: number) => (
                    <li key={index} className="text-gray-900 p-1">
                        {ingredient}
                    </li>
                ))}
            </ul>
            <p className="text-2xl text-gray-500 mt-2">Steps</p>
            <ol className="list-decimal list-inside">
                {recipe.steps.map((step: string, index: number) => (
                    <li key={index} className="text-gray-900 p-1">
                        {step}
                    </li>
                ))}
            </ol>
            {/* {userHasValidSession && recipeBelongsToUser && (
                <div className="flex">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-gray-400 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2"
                        onClick={() => editRecipe()}
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-red-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2"
                        onClick={() => setOpenDelete(true)}
                    >
                        Delete
                    </button>
                </div>
            )} 
            <DeleteRecipeModal
                open={openDelete}
                setOpen={setOpenDelete}
                itemToDelete={"Recipe"}
                onDelete={deleteRecipe}
            />*/}
        </div>
    );
}