import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import Paginator from "~/components/paginator";
import RecipeGrid from "~/components/recipeGrid";
import { searchRecipes } from "~/utils/db.server";

export const loader: LoaderFunction = async ({ params }) => {
    console.log('found')
    const recipes = await searchRecipes();
    return recipes;
}

const Recipes = () => {
    let recipes = useLoaderData();

    const [page, setPage] = useState(1);

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xl mt-6">Recipes</p>
            {/* <SearchBar
            setSearchText={setSearchText}
            setSelectedCategory={setSelectedCategory}
            search={searchRecipes}
            page={page}
          />
    
          {recipeCount === 0 && noneFound && (
            <p className="text-xl mt-6">No recipes found</p>
          )}
          {recipeCount > 0 && ( */}
            <>
                <div className="py-4 mt-6">
                    <RecipeGrid recipes={recipes} />
                </div>

                <Paginator
                    page={page}
                    setPage={setPage}
                    search={() => console.log('searching')}
                    length={recipes.length}
                />
            </>
            )
        </div>
    );
}

export default Recipes;