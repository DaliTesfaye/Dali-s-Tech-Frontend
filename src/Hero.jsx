import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-[#1b0079] to-[#0A001F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              Dali's Tech <span className="text-[#E80BFF]">Shop</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg sm:text-xl text-white/90 max-w-xl"
            >
              Practical ebooks, cheat-sheets and quick references crafted for
              developers and tech learners — consume knowledge faster, build sooner.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-[#E80BFF] hover:brightness-95 text-black font-semibold rounded-full px-5 py-3 shadow-lg"
              >
                Shop Products
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/90 hover:bg-white/5 transition"
              >
                Learn More
              </Link>
            </motion.div>

            {/* small features / trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-3 mt-6"
            >
              <span className="text-sm bg-white/6 px-3 py-1 rounded-full">Ebooks</span>
              <span className="text-sm bg-white/6 px-3 py-1 rounded-full">Cheat sheets</span>
              <span className="text-sm bg-white/6 px-3 py-1 rounded-full">Starter Kits</span>
            </motion.div>
          </div>

          {/* Right: visual / minimal product mock */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full max-w-sm bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-[0_10px_30px_rgba(232,11,255,0.08)]"
            >
              {/* small mock card representing a product */}
              <div className="bg-gradient-to-br from-[#1b0079] to-[#E80BFF] rounded-xl p-4">
                <div className="h-40 rounded-lg bg-white/10 mb-4 flex items-center justify-center text-white/80">
                  <div className="text-center">
                    <div className="text-sm uppercase tracking-widest text-white/80">Featured</div>
                    <div className="text-xl font-bold text-white mt-2">Express.js Cheatsheet</div>
                    <div className="mt-3 text-white/90 font-semibold">$9</div>
                  </div>
                </div>

                <div className="bg-white/6 rounded-lg p-3 text-white/80">
                  <p className="text-sm leading-relaxed line-clamp-3">
                    Handy one-page cheatsheet with the most used Express.js patterns,
                    middleware recipes and deployment tips.
                  </p>
                </div>
              </div>

              {/* subtle footer */}
              <div className="mt-4 flex items-center justify-between text-xs text-white/70">
                <div>Quick preview</div>
                <div className="bg-white/10 px-2 py-1 rounded-full">PDF</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
