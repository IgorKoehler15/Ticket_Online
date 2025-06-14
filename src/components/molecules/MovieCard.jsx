// src/components/molecules/MovieCard.jsx
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-72 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Gênero: {movie.genre}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Classificação: {movie.ageRating}
        </p>
        <Link
          to={`/filmes/${movie.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Ver mais informações
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
