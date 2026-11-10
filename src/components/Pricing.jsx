const PLANS = [
  {
    name: 'Starter',
    price: '0',
    desc: 'Perfect for hobbyists and side projects.',
    features: ['Up to 3 projects', 'Basic analytics', 'Community support', '1 GB storage'],
  },
  {
    name: 'Pro',
    price: '29',
    desc: 'For professional developers and teams.',
    features: ['Unlimited projects', 'Advanced analytics', 'Priority support', '10 GB storage', 'Custom domain'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '99',
    desc: 'Custom solutions for large organizations.',
    features: ['Unlimited everything', 'Dedicated success manager', 'SSO authentication', '99.9% SLA', 'On-premise deployment'],
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="section-head">
        <h2>
          SIMPLE,
          <br />
          <span>TRANSPARENT</span>
          <br />
          PRICING.
        </h2>
        <p>No hidden fees. Cancel anytime. Every plan includes the full automation engine.</p>
      </div>

      <div className="plans">
        {PLANS.map((plan) => (
          <div className={'plan' + (plan.popular ? ' popular' : '')} key={plan.name}>
            {plan.popular && <span className="tag">MOST POPULAR</span>}

            <h3>{plan.name}</h3>
            <div className="price">
              ${plan.price}
              <small>/mo</small>
            </div>
            <p className="plan-desc">{plan.desc}</p>

            <ul>
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <a className={'choose' + (plan.popular ? ' acid' : '')} href="#top">
              CHOOSE {plan.name.toUpperCase()}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
