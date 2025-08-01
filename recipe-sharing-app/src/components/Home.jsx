// src/pages/Home.jsx
import AddRecipeForm from '../components/AddRecipeForm';
import DeleteRecipeButton from '../components/DeleteRecipeButton';
import EditRecipeForm from '../components/EditRecipeForm';
import FavoritesList from '../components/FavoritesList';
import HomeComponent from '../components/Home';
import RecipeDetails from '../components/RecipeDetails';
import RecipeList from '../components/RecipeList';
import RecommendationsList from '../components/RecommendationsList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div className="p-4 space-y-6">
      <AddRecipeForm />
      <DeleteRecipeButton />
      <EditRecipeForm />
      <FavoritesList />
      <HomeComponent />
      <RecipeDetails />
      <RecipeList />
      <RecommendationsList />
      <SearchBar />
    </div>
  );
};

export default HomePage;
