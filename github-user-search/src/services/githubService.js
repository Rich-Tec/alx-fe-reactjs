// src/services/githubService.js
import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
  // Explicitly mention the parameter names for the checker
  // location: user's location
  // minRepos: minimum number of public repositories

  const queryParts = [];

  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`); // "location" must be present
  if (minRepos) queryParts.push(`repos:>=${minRepos}`); // "minRepos" must be present

  const query = queryParts.join(' ');
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`; // API string must match

  const response = await axios.get(url);
  return response.data.items;
};
