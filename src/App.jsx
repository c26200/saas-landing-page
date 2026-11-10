import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="site">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />

      <footer className="footer" id="about">
        <div className="footer-inner">
          <a className="brand" href="#top">NEXUS</a>

          <div className="footer-links">
            <a href="#features">FEATURES</a>
            <a href="#pricing">PRICING</a>
            <a href="#about">ABOUT</a>
          </div>

          <span>© 2026 NEXUS AI — BUILT FOR THE FUTURE</span>
        </div>
      </footer>
    </div>
  );
}
