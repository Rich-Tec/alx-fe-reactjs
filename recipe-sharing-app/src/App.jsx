// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddRecipeForm from './components/AddRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavoritesList';
import HomePage from './components/Home'; // ✅ use the page component
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
        <Route path="/edit/:id" element={<DeleteRecipeButton />} />
        <Route path="/edit/:id" element={<FavoritesList />} />
        <Route path="/edit/:id" element={<RecipeList />} />
        <Route path="/edit/:id" element={<RecommendationsList />} />
        <Route path="/edit/:id" element={<SearchBar />} />


      </Routes>
    </Router>
  );
};

export default App;
