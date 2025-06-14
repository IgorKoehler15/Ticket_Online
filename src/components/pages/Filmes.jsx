// src/components/pages/Filmes.jsx
import MoviesGrid from "../organisms/MoviesGrid";

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
  // Adicione mais filmes conforme necessário
];

const Filmes = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Filmes em Cartaz</h1>
      <MoviesGrid movies={movies} />
    </div>
  );
};

export default Filmes;
