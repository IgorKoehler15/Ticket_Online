// src/routes/AppRouter.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioPage from "../components/pages/InicioPage";
import FilmesPage from "../components/pages/FilmesPage";
import DetFilmesPage from "../components/pages/DetFilmesPage";
import ContatoPage from "../components/pages/ContatoPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/filmes" element={<FilmesPage />} />
        <Route path="/filmes/:id" element={<DetFilmesPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
