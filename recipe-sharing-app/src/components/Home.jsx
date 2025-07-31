// src/pages/Home.jsx
import React from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import FavoritesList from '../components/FavoritesList';
import RecommendationsList from '../components/RecommendationsList';

const Home = () => {
  return (
    <div className="p-4 space-y-6">
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default Home;
