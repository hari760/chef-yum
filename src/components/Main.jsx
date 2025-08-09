import React from "react"
import IngredientsList from "/src/components/IngredientsList"
import ClaudeRecipe from "/src/components/ClaudeRecipe"
import { getRecipeFromChefClaude  } from "/src/ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(["chicken","soy sauce",
        "bread","pepper"
    ])
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)
    
    React.useEffect(() => {
        console.log("wow")
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ref = {recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}