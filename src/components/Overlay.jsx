import { motion } from "framer-motion";

const Section = ({ children, align = "left" }) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 md:p-20 ${
        align === "right" ? "items-end text-right" : "items-start text-left"
      }`}
    >
      <div className="max-w-2xl w-full">
        <motion.div
            initial={{ opacity: 0, x: align === "right" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  return (
    <div className="w-screen">
      <Section>
        <h1 className="text-7xl font-black text-white mb-6 tracking-tighter">
            NEBULA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">OS</span>
        </h1>
        <p className="text-gray-300 text-2xl font-light leading-relaxed">
          The future of digital interface design. Immersive, fluid, and completely 3D.
        </p>
        <div className="mt-10 flex gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">Get Started</button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">Learn More</button>
        </div>
      </Section>

      <Section align="right">
        <h1 className="text-7xl font-black text-white mb-6 tracking-tighter">
            FLUID <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">CORE</span>
        </h1>
        <p className="text-gray-300 text-2xl font-light leading-relaxed">
          Powered by a proprietary gravitational engine that responds to your every movement.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <h3 className="text-white font-bold">Latency</h3>
                <p className="text-cyan-400 text-2xl">0.2ms</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <h3 className="text-white font-bold">Refresh</h3>
                <p className="text-cyan-400 text-2xl">120Hz</p>
            </div>
        </div>
      </Section>

      <Section>
        <h1 className="text-7xl font-black text-white mb-6 tracking-tighter">
            INFINITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">GRID</span>
        </h1>
        <p className="text-gray-300 text-2xl font-light leading-relaxed">
          A boundless workspace where creativity knows no limits. Scales with your ambition.
        </p>
        <ul className="mt-8 space-y-4 text-gray-400 text-lg">
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-full"></span> Real-time collaboration</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-full"></span> End-to-end encryption</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-full"></span> Neural sync technology</li>
        </ul>
      </Section>

      <Section align="right">
        <h1 className="text-7xl font-black text-white mb-6 tracking-tighter">
            JOIN THE <span className="text-white underline decoration-white/20">VOYAGE</span>
        </h1>
        <p className="text-gray-300 text-2xl font-light leading-relaxed mb-10">
          Be among the first to experience the dawn of the spatial web.
        </p>
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
                type="email"
                required
                maxLength={320}
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white flex-1 focus:outline-none focus:border-white/50"
            />
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity">
                Secure Access
            </button>
        </form>
      </Section>
    </div>
  );
};
