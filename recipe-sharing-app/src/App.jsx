// src/App.jsx
import AddRecipeForm from './components/AddRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavoritesList';
import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div>
      <AddRecipeForm />
      <DeleteRecipeButton />
      <EditRecipeForm />
      <FavoritesList />
      <Home />
      <RecipeDetails />
      <RecipeList />
      <RecommendationsList />
      <SearchBar />
    </div>
  );
};

export default App;
