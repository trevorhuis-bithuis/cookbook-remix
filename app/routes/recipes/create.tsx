import { useState } from "react";
import {
    CancelAndSaveButton,
    CategoriesInput,
    DescriptionInput,
    ImagesInput,
    IngredientsInput,
    StepsInput,
    TitleInput,
} from "~/components/forms";
import { CheckIcon } from "@heroicons/react/24/outline";
import { getAuth } from "@clerk/remix/ssr.server";
import { ActionArgs, LoaderFunction, redirect } from "@remix-run/node";
import { Form, useNavigate, useLoaderData, useSubmit } from "@remix-run/react";
import { createRecipe } from "~/utils/db.server";

export const loader: LoaderFunction = async (args) => {
    const { userId } = await getAuth(args);
    if (!userId) {
        return redirect("/sign-in");
    }
    return { userId };
}

interface FormRequestValues {
    title: string;
    description: string;
    categories: string;
    steps: string;
    photoUrl: string;
    ingredients: string;
}

export async function action({ request }: ActionArgs) {
    const formData = await request.formData();
    let values = Object.fromEntries(formData) as unknown as FormRequestValues;

    await createRecipe(
        values.title,
        values.description,
        (values.ingredients).split(","),
        (values.steps).split(","),
        (values.categories).split(","),
        values.photoUrl,
        '1'
    )
    return {}
}

const CreateRecipe = () => {
    const { userId } = useLoaderData<typeof loader>();
    const navigate = useNavigate();
    const submit = useSubmit();

    const [title, setTitle] = useState<string>("");
    const [categories, setCategories] = useState<string[]>([]);
    const [description, setDescription] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const [ingredients, setIngredients] = useState<string[]>([""]);
    const [steps, setSteps] = useState<string[]>([""]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function handleCancel() {
        console.log("cancel");
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let $form = event.currentTarget;

        let formData = new FormData($form);

        formData.set("ingredients", `${ingredients.join(",")}`);
        formData.set("categories", `${categories.join(",")}`);
        formData.set("steps", `${steps.join(",")}`);
        formData.set("photoUrl", imageUrl)

        formData.delete("ingredient")
        formData.delete("step")
        formData.delete("\'file-upload\'")
        formData.delete("category")

        submit(formData, {
            // @ts-ignore
            method: $form.getAttribute("method") ?? $form.method,
            action: $form.getAttribute("action") ?? $form.action,
        });
    }

    // async function handleSave() {
    //     const data = await fetch("/api/recipes", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             title,
    //             description,
    //             categories,
    //             photo: imageUrl,
    //             ingredients,
    //             steps,
    //             authorId: userId,
    //         }),
    //     });
    //     const recipe = await data.json();

    //     navigate(`/recipes/${recipe.id}`);
    // }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mt-4">
                <Form onSubmit={handleSubmit} method="post" className="space-y-8 divide-gray-200">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Create a New Recipe
                    </h3>

                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <TitleInput title={title} setTitle={setTitle} />

                        <CategoriesInput
                            categories={categories}
                            setCategories={setCategories}
                        />

                        <DescriptionInput
                            description={description}
                            setDescription={setDescription}
                        />

                        <StepsInput steps={steps} setSteps={setSteps} />

                        <IngredientsInput
                            ingredients={ingredients}
                            setIngredients={setIngredients}
                        />

                        <ImagesInput setImageUrl={setImageUrl} />
                    </div>

                    {imageUrl && (
                        <div className="items-center mx-auto">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                <CheckIcon
                                    className="h-6 w-6 text-green-600"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="mt-3 text-center sm:mt-5">Upload successful</div>
                        </div>
                    )}
                    <CancelAndSaveButton
                        handleCancel={handleCancel}
                        isSaveDisabled={false}
                    />
                </Form>
            </div>
        </div>
    );
};
// isSaveDisabled={
//     title !== "" &&
//         description !== "" &&
//         categories.length !== 0 &&
//         steps[0] !== "" &&
//         ingredients[0] !== ""
//         ? false
//         : true
export default CreateRecipe;