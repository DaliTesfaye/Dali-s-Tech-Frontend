import { motion } from "framer-motion";
import img from "./assets/cover.png";

export default function About() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0A001F] via-black to-[#1B0079] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image with glow effect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#E80BFF] blur-3xl opacity-40 rounded-full -z-10"></div>
            <img
              src={img}
              alt="Digital products"
              className="w-80 md:w-[420px] drop-shadow-[0_0_25px_rgba(232,11,255,0.4)] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Your{" "}
            <span className="text-[#E80BFF] drop-shadow-[0_0_10px_rgba(232,11,255,0.8)]">
              One-Stop Store
            </span>{" "}
            for Tech Knowledge ⚡
          </h2>

          <p className="text-lg leading-relaxed text-gray-200">
            At{" "}
            <span className="font-semibold text-[#E80BFF]">
              Dali’s Tech Shop
            </span>
            , we believe learning tech should be{" "}
            <span className="font-semibold text-white">fast, practical,</span>{" "}
            and <span className="font-semibold text-white">exciting.</span>
            That’s why we create{" "}
            <span className="font-bold text-[#E80BFF]">digital products</span> —
            from ebooks to cheat sheets — designed to help you level up your
            coding and tech skills without the fluff.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            Whether you’re a beginner hungry to get started, or a hustler
            looking for quick resources, our products are built to give you{" "}
            <span className="text-[#E80BFF] font-semibold">
              clarity, speed,
            </span>{" "}
            and <span className="text-white font-semibold">confidence.</span>
            Think of us as your{" "}
            <span className="text-[#E80BFF] font-bold">
              shortcut to mastery.
            </span>
          </p>

          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 20px #E80BFF" }}
            className="mt-6 px-8 py-3 bg-[#E80BFF] text-white font-semibold rounded-full shadow-lg hover:bg-[#c700e6] transition-all"
          >
            Explore Products 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
