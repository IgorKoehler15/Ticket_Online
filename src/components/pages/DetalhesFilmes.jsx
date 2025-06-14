// src/components/pages/DetalhesFilmes.jsx
import { useParams, useNavigate } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Vingadores: Ultimato",
    poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    genre: "Ação, Aventura",
    ageRating: "12 anos",
    synopsis:
      "Após os eventos devastadores de 'Guerra Infinita', os Vingadores restantes precisam encontrar uma maneira de restaurar a ordem no universo.",
  },
  {
    id: 2,
    title: "Homem-Aranha: Sem Volta Para Casa",
    poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
    genre: "Ação, Aventura",
    ageRating: "14 anos",
    synopsis:
      "Peter Parker pede ajuda ao Doutor Estranho para fazer com que todos esqueçam que ele é o Homem-Aranha, mas o feitiço dá errado e libera vilões de outros universos.",
  },
  // Mesmos dados da página Filmes
];

const DetalhesFilmes = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <div>Filme não encontrado.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
      >
        Voltar
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-96 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-1">
          <strong>Gênero:</strong> {movie.genre}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-1">
          <strong>Classificação:</strong> {movie.ageRating}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          <strong>Sinopse:</strong> {movie.synopsis}
        </p>
      </div>
    </div>
  );
};

export default DetalhesFilmes;
