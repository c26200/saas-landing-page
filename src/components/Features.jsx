const FEATURES = [
  {
    title: 'Real-time Analytics',
    desc: 'Track your automated workflows with precision. Our dashboard provides live insights into every process execution.',
  },
  {
    title: 'Smart AI Logic',
    desc: 'Our neural engine adapts to your data patterns, optimizing workflows automatically over time.',
  },
  {
    title: 'Enterprise Security',
    desc: 'Bank-grade encryption for all your data. SOC2 Type II certified and GDPR compliant.',
  },
  {
    title: 'Global Edge Network',
    desc: 'Deploy your automations to 35+ regions worldwide. Lowest latency guaranteed for your users.',
  },
  {
    title: 'Team Collaboration',
    desc: 'Invite your team, manage permissions, and edit workflows together in real-time.',
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="section-head">
        <h2>
          EVERYTHING
          <br />
          YOU NEED TO <span>SCALE.</span>
        </h2>
        <p>
          Powerful features wrapped in a precise interface. Built for speed,
          designed for clarity.
        </p>
      </div>

      <div className="feature-list">
        {FEATURES.map((f, i) => (
          <div className="feature" key={f.title}>
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>

      <a className="build-block" href="#pricing">
        <span>START BUILDING</span>
        <span>→</span>
      </a>
    </section>
  );
}
