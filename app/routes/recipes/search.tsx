import { ActionArgs, ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import Paginator from "~/components/paginator";
import RecipeGrid from "~/components/recipeGrid";
import SearchBar from "~/components/searchBar";
import { getRecipeCount, getRecipes, searchRecipes } from "~/utils/search.server";

export const loader: LoaderFunction = async ({ params }) => {
    const recipes = await getRecipes(0);
    const recipeCount = await getRecipeCount();
    return { recipes, recipeCount };
}

export const action: ActionFunction = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const values = Object.fromEntries(formData)

    const skip = (parseInt(values.page as string) - 1) * 8;

    if (values.searchText === "") {
        const recipes = await getRecipes(skip);
        const recipeCount = await getRecipeCount();

        return { recipes, recipeCount, shouldShowPaginator: true }
    }

    const recipes = await searchRecipes(values.searchText as string, values.selectedCategory as string, skip);
    const recipeCount = await getRecipeCount();

    return { recipes, recipeCount, shouldShowPaginator: false }
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

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Form method="post">
                <input name="page" value={page} hidden readOnly />
                <input name="searchText" value={searchText} hidden readOnly />
                <p className="text-xl mt-6">Recipes</p>
                <SearchBar
                    setSearchText={setSearchText}
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

                        {searchText === "" && (<Paginator
                            page={page}
                            setPage={setPage}
                            length={recipeCount}
                        />)}

                    </>
                )}
            </Form>
        </div>
    );
}

export default Recipes;