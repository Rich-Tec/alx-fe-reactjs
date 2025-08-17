import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "./RecipeCard";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    import("../data.json")
      .then((mod) => setRecipes(mod.default || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">🍳 Recipe Sharing Platform</h1>
        <p className="text-gray-600">Discover and share your favorite recipes.</p>
      </header>

      {loading ? (
        <p className="text-center text-gray-500">Loading recipes...</p>
      ) : (
        <section
          className="
            grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            hover:shadow-md rounded-lg p-4 bg-white
          "
        >
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="hover:shadow-lg rounded-md transition cursor-pointer"
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
