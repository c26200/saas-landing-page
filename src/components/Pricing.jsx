import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for hobbyists and side projects.",
    features: ["Up to 3 projects", "Basic analytics", "Community support", "1GB storage"],
  },
  {
    name: "Pro",
    price: "29",
    description: "For professional developers and teams.",
    features: ["Unlimited projects", "Advanced analytics", "Priority support", "10GB storage", "Custom domain"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "99",
    description: "Custom solutions for large organizations.",
    features: ["Unlimited everything", "Dedicated success manager", "SSO Authentication", "99.9% SLA", "On-premise deployment"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400 text-lg">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }} // Scroll Reveal Dramático
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.popular 
                  ? "bg-white/10 border border-brand-500 shadow-2xl shadow-brand-500/20" 
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-300 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-gray-400 mt-4 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className={`p-1 rounded-full ${plan.popular ? "bg-brand-500/20 text-brand-400" : "bg-white/10 text-gray-400"}`}>
                      <Check size={14} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                plan.popular
                  ? "bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                  : "bg-white text-black hover:bg-gray-200"
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;