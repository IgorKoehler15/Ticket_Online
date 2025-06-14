// src/components/templates/TemplateFilmesPage.tsx

import FilmesGrid from "../organisms/FilmesGrid";
import { filmes } from "../../data/filmesMock";

const TemplateFilmesPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Filmes em Cartaz</h1>
      <FilmesGrid filmes={filmes} />
    </div>
  );
};

export default TemplateFilmesPage;
