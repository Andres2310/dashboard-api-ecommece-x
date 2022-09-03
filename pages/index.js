import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <h1 className="text-cyan-400">Hola Mundo</h1>
      <motion.h1 initial={{
        opacity:0
      }} animate={{
        y: [-20,0],
        opacity:1
      }}>Andres</motion.h1>
      <form></form>
    </div>
  );
}
