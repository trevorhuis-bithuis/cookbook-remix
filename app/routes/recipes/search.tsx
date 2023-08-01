import { ActionArgs, ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import Paginator from "~/components/paginator";
import RecipeGrid from "~/components/recipeGrid";
import SearchBar from "~/components/searchBar";
import { getRecipeCount, searchRecipes } from "~/utils/db.server";

export const loader: LoaderFunction = async ({ params }) => {
    const recipes = await searchRecipes(0);
    const recipeCount = await getRecipeCount();
    return { recipes, recipeCount };
}

export const action: ActionFunction = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const values = Object.fromEntries(formData)

    const recipes = await searchRecipes((parseInt(values.page as string) - 1) * 8);
    const recipeCount = await getRecipeCount();

    return { recipes, recipeCount }
}

const Recipes = () => {
    let { recipes, recipeCount } = useLoaderData();
    const actionData = useActionData();

    if (actionData) {
        recipes = actionData.recipes;
        recipeCount = actionData.recipeCount;
    }

    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Form method="post">
                <input name="page" value={page} hidden readOnly />
                <p className="text-xl mt-6">Recipes</p>
                <SearchBar
                    setSearchText={setSearchText}
                    setSelectedCategory={setSelectedCategory}
                    page={page}
                />

                {recipeCount === 0 && (
                    <p className="text-xl mt-6">No recipes found</p>
                )}
                {recipeCount > 0 && (
                    <>
                        <div className="py-4 mt-6">
                            <RecipeGrid recipes={recipes} />
                        </div>


                        <Paginator
                            page={page}
                            setPage={setPage}
                            length={recipeCount}
                        />
                    </>
                )}
            </Form>
        </div>
    );
}

export default Recipes;