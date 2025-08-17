export default function RecipeCard({ recipe, onView }) {
  return (
    <article className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition overflow-hidden">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{recipe.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{recipe.summary}</p>

        <button
          onClick={onView}
          className="mt-4 inline-block bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          View Recipe
        </button>
      </div>
    </article>
  );
}
