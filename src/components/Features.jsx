import { motion } from "framer-motion";
import { BarChart3, BrainCircuit, ShieldCheck, Zap, Globe2, Users } from "lucide-react";

// Componente interno para cada tarjeta del Bento
const BentoCard = ({ title, description, icon: Icon, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }} // CAMBIO: Empieza más abajo (50px) para que se note la subida
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }} // Se dispara un poco antes
    transition={{ duration: 0.8, delay }} // CAMBIO: Duración 0.8s (más lento y elegante)
    className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors group ${className}`}
  >
    {/* Efecto de luz al hacer hover */}
    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-brand-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="relative z-10 flex flex-col h-full">
      <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 text-brand-100 w-fit">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título de la sección */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Everything you need to scale.
          </h2>
          <p className="text-gray-400 text-lg">
            Powerful features wrapped in a beautiful interface. Built for speed, designed for clarity.
          </p>
        </div>

        {/* EL BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          
          <BentoCard
            title="Real-time Analytics"
            description="Track your automated workflows with precision. Our dashboard provides live insights into every process execution."
            icon={BarChart3}
            className="md:col-span-2"
            delay={0.1}
          />

          <BentoCard
            title="Smart AI Logic"
            description="Our neural engine adapts to your data patterns, optimizing workflows automatically over time."
            icon={BrainCircuit}
            delay={0.2}
          />

          <BentoCard
            title="Enterprise Security"
            description="Bank-grade encryption for all your data. SOC2 Type II certified and GDPR compliant."
            icon={ShieldCheck}
            delay={0.3}
          />

          <BentoCard
            title="Global Edge Network"
            description="Deploy your automations to 35+ regions worldwide. Lowest latency guaranteed for your users."
            icon={Globe2}
            className="md:col-span-2"
            delay={0.4}
          />

           <BentoCard
            title="Team Collaboration"
            description="Invite your team, manage permissions, and edit workflows together in real-time."
            icon={Users}
            delay={0.5}
          />

           {/* Tarjeta de Relleno Visual (Start Building) */}
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-brand-600 to-blue-600 lg:col-span-2"
           >
             <div className="text-center p-6">
               <Zap size={48} className="text-white mx-auto mb-4" />
               <h3 className="text-2xl font-bold text-white">Start Building</h3>
             </div>
           </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;