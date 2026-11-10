export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-eyebrow">NEXUS AI 2.0 — NOW LIVE</div>

      <h1>
        AUTOMATE
        <br />
        YOUR WORK
        <br />
        <span>FLOW.</span>
      </h1>

      <div className="slash" aria-hidden="true" />

      <p className="hero-sub">
        Stop wasting time on manual tasks. Let Nexus handle your data processing,
        integrations and analytics with the power of advanced AI.
      </p>

      <div className="hero-ctas">
        <a className="btn primary" href="#pricing">START AUTOMATING →</a>
        <a className="btn ghost" href="#features">VIEW DEMO</a>
      </div>

      <div className="hero-metrics">
        <div className="row">
          <div className="v">35+</div>
          <div className="k">EDGE REGIONS</div>
        </div>
        <div className="row">
          <div className="v">99.9%</div>
          <div className="k">UPTIME SLA</div>
        </div>
        <div className="row">
          <div className="v">SOC2</div>
          <div className="k">TYPE II CERTIFIED</div>
        </div>
      </div>
    </section>
  );
}
