import { FaReact, FaGitAlt, FaRaspberryPi } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiTensorflow, SiKeras, SiArduino, SiAnaconda, SiVisualstudiocode, SiScikitlearn } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { GiCircuitry } from "react-icons/gi"; // For VLSI
import { BsGearFill } from "react-icons/bs"; // For CAD
import { motion } from "framer-motion";

const TECHNOLOGIES = [
  { icon: SiScikitlearn, name: "Scikit Learn", color: "text-orange-500" },
  { icon: SiTensorflow, name: "TensorFlow", color: "text-orange-500" },
  { icon: SiKeras, name: "Keras", color: "text-red-500" },
  { icon: FaNode, name: "NodeJS", color: "text-green-500" },
  { icon: FaReact, name: "ReactJS", color: "text-cyan-400" },
  { icon: SiArduino, name: "Arduino", color: "text-teal-500" },
  { icon: FaGitAlt, name: "Git", color: "text-orange-600" },
  { icon: SiAnaconda, name: "Anaconda", color: "text-green-400" },
  { icon: TbBrandVscode, name: "VS Code", color: "text-blue-500" },
  { icon: FaRaspberryPi, name: "Raspberry Pi", color: "text-red-600" },
  { icon: BsGearFill, name: "CAD", color: "text-gray-400" },
  { icon: GiCircuitry, name: "VLSI", color: "text-purple-500" },
];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech Stack
      </motion.h2>
      
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 max-w-5xl mx-auto"
      >
        {TECHNOLOGIES.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2 + index * 0.5)}
            initial="initial"
            animate="animate"
            className="group flex flex-col items-center justify-center gap-3"
          >
            <div className="relative rounded-2xl border-4 border-neutral-800 p-6 transition-all duration-300 hover:border-neutral-700 hover:shadow-lg hover:shadow-purple-500/10">
              <tech.icon className={`text-6xl ${tech.color} transition-all duration-300 group-hover:scale-110`} />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
            <span className="text-sm text-neutral-400 font-medium transition-colors duration-300 group-hover:text-neutral-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;