// src/components/templates/TemplateDetFilmesPage.tsx

import { useParams, useNavigate } from "react-router-dom";
import { filmes } from "../../data/filmesMock";

const TemplateDetFilmesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const filme = filmes.find((f) => f.id === id);

  if (!filme) {
    return <div>Filme não encontrado.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{filme.nome}</h1>
      <img src={filme.cartaz} alt={filme.nome} className="w-80 mb-4 rounded" />
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Idade:</strong> {filme.idade}</p>
      <p className="mt-4"><strong>Sinopse:</strong> {filme.sinopse}</p>
      <button
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        onClick={() => navigate(-1)}
      >
        Voltar
      </button>
    </div>
  );
};

export default TemplateDetFilmesPage;
