// src/App.tsx

import AppRouter from "./routes/AppRouter";
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 p-6">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
