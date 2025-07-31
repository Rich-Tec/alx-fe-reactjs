// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const { recipes, favorites, addFavorite, removeFavorite } = useRecipeStore(state => ({
    recipes: state.recipes,
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite
  }));

  const toggleFavorite = (id) => {
    favorites.includes(id) ? removeFavorite(id) : addFavorite(id);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">All Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe.id} className="mb-4 border p-2 rounded">
          <h3 className="font-semibold">{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button
            onClick={() => toggleFavorite(recipe.id)}
            className="text-sm text-blue-600 underline"
          >
            {favorites.includes(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
