import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Fondo con efectos de luz (Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Badge animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-brand-100 mb-8"
        >
          <Sparkles size={14} />
          <span>Nexus AI 2.0 is now live</span>
        </motion.div>

        {/* Título Gigante */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
        >
          Automate your workflow <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-500">
            at light speed.
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Stop wasting time on manual tasks. Let Nexus handle your data processing, 
          integrations, and analytics with the power of advanced AI.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all flex items-center gap-2 shadow-lg shadow-brand-500/25 hover:scale-105">
            Start Automating <ArrowRight size={18} />
          </button>
          <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold transition-all">
            View Demo
          </button>
        </motion.div>

        {/* Imagen de "UI Preview" inclinada (Efecto 3D con Mockup CSS) */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
          className="mt-20 border border-white/10 rounded-2xl p-2 bg-white/5 backdrop-blur-sm relative z-10"
        >
          {/* MOCKUP INTERFACE (Dibujo con CSS) */}
          <div className="rounded-xl overflow-hidden bg-dark-card aspect-video relative flex">
             
             {/* Sidebar falsa */}
             <div className="w-16 md:w-20 border-r border-white/5 bg-white/5 flex flex-col items-center py-4 gap-4">
               <div className="w-8 h-8 rounded-full bg-brand-500/20" />
               <div className="w-6 h-6 rounded-md bg-white/10 mt-4" />
               <div className="w-6 h-6 rounded-md bg-white/5" />
               <div className="w-6 h-6 rounded-md bg-white/5" />
             </div>

             {/* Contenido principal falso */}
             <div className="flex-1 p-4 md:p-6 flex flex-col gap-4">
                
                {/* Header falso */}
                <div className="flex items-center justify-between">
                  <div className="h-4 w-32 bg-white/10 rounded-full" />
                  <div className="flex gap-2">
                    <div className="h-8 w-8 bg-white/5 rounded-full" />
                    <div className="h-8 w-8 bg-brand-500 rounded-full" />
                  </div>
                </div>

                {/* Grid de Stats falso */}
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="h-24 bg-white/5 rounded-xl border border-white/5 p-3">
                    <div className="h-8 w-8 bg-brand-500/20 rounded-lg mb-2" />
                    <div className="h-3 w-16 bg-white/10 rounded-full" />
                  </div>
                  <div className="h-24 bg-white/5 rounded-xl border border-white/5 p-3">
                    <div className="h-8 w-8 bg-blue-500/20 rounded-lg mb-2" />
                    <div className="h-3 w-16 bg-white/10 rounded-full" />
                  </div>
                  <div className="h-24 bg-white/5 rounded-xl border border-white/5 p-3 opacity-50">
                     {/* Este lo hacemos parecer "apagado" */}
                  </div>
                </div>

                {/* Gráfica grande falsa */}
                <div className="flex-1 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden">
                   {/* Línea de gradiente simulando una gráfica */}
                   <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-brand-500/10 to-transparent" />
                   <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
                </div>
             </div>

             {/* Brillo decorativo */}
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 via-transparent to-blue-500/5 pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;