// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <Routes>
        <Route>
      <AddRecipeForm />
      <DeleteRecipeButton />
      <EditRecipeForm />
      <FavoritesList />
      <omePage />
      <RecipeDetails />
      <RecipeList />
      <RecommendationsList />
      <SearchBar />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
