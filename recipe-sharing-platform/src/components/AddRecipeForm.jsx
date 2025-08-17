// src/components/AddRecipeForm.jsx
import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientsList = ingredients.split(",").map((i) => i.trim());
      if (ingredientsList.length < 2) {
        newErrors.ingredients =
          "Please include at least two ingredients (separated by commas).";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps,
    };

    console.log("New Recipe Submitted:", newRecipe);

    setSuccess("Recipe added successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>

      {success && <p className="text-green-600 text-center mb-3">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="md:flex md:items-center md:space-x-4">
          <label className="block text-gray-700 font-medium mb-1 md:w-1/4">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
            className="w-full md:w-3/4 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        {/* Ingredients */}
        <div className="md:flex md:items-start md:space-x-4">
          <label className="block text-gray-700 font-medium mb-1 md:w-1/4">
            Ingredients
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g. Flour, Sugar, Butter"
            rows="3"
            className="w-full md:w-3/4 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
          ></textarea>
        </div>
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}

        {/* Steps */}
        <div className="md:flex md:items-start md:space-x-4">
          <label className="block text-gray-700 font-medium mb-1 md:w-1/4">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Describe how to prepare the recipe..."
            rows="5"
            className="w-full md:w-3/4 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
          ></textarea>
        </div>
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
