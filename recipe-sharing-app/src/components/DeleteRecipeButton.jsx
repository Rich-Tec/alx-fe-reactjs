// src/components/DeleteRecipeButton.jsx
import { useNavigate } from 'react-router-dom'; // <-- Required for redirecting after deletion
import { useRecipeStore } from './recipeStore'; // <-- Import your Zustand store

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe); // <-- Access delete action
  const navigate = useNavigate(); // <-- Used to redirect after deletion

  const handleDelete = () => {
    deleteRecipe(recipeId);       // <-- Call the delete function
    navigate('/');                // <-- Redirect to home or recipe list
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
