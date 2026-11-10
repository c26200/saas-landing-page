export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">NEXUS</a>

        <nav className="nav-links">
          <a href="#features">FEATURES</a>
          <a href="#pricing">PRICING</a>
          <a href="#about">ABOUT</a>
        </nav>

        <a className="nav-cta" href="#pricing">START AUTOMATING</a>
      </div>
    </header>
  );
}
