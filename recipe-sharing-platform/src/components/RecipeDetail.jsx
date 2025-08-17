import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("../data.json").then((mod) => {
      const found = (mod.default || []).find((r) => r.id === parseInt(id));
      setRecipe(found);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading recipe...</p>;
  if (!recipe) return <p className="text-center mt-10">Recipe not found</p>;

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-lg shadow p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📝 Ingredients</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {recipe.ingredients?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">👨‍🍳 Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {recipe.instructions?.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
