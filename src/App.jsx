import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing"; // Importar

function App() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-500/30 selection:text-brand-100">
      <Navbar />
      <Hero />
      <Features />
      <Pricing /> {/* Sección de Precios */}
      
      {/* Footer mejorado */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <p>© 2025 Nexus AI. Built for the future.</p>
      </footer>
    </div>
  );
}

export default App;