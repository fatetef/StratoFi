import { motion } from 'framer-motion';
import { SiBitcoin, SiEthereum, SiSolana, SiBinance } from 'react-icons/si';
import { FaDollarSign } from 'react-icons/fa';

export function FloatingElements() {
  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: { 
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.6 },
    animate: { 
      scale: [1, 1.1, 1],
      opacity: [0.6, 0.8, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Circle Background */}
      <motion.div 
        className="absolute top-20 right-10 w-96 h-96 border-2 border-[hsl(160,100%,42%)]/20 rounded-full"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '0s' }}
      />
      
      <motion.div 
        className="absolute top-40 right-20 w-64 h-64 border border-[hsl(160,100%,42%)]/10 rounded-full"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '-2s' }}
      />

      {/* Cryptocurrency Icons */}
      <motion.div 
        className="absolute top-32 right-32 w-16 h-16 bg-[hsl(160,100%,42%)]/20 rounded-full flex items-center justify-center"
        variants={pulseVariants}
        initial="initial"
        animate="animate"
      >
        <SiEthereum className="text-[hsl(224,64%,65%)] text-2xl" />
      </motion.div>

      <motion.div 
        className="absolute top-80 right-16 w-12 h-12 bg-[hsl(51,100%,50%)]/20 rounded-full flex items-center justify-center"
        variants={pulseVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '-1s' }}
      >
        <SiBitcoin className="text-[hsl(51,100%,50%)] w-6 h-6" />
      </motion.div>

      <motion.div 
        className="absolute top-60 right-80 w-14 h-14 bg-[hsl(264,100%,67%)]/20 rounded-full flex items-center justify-center"
        variants={pulseVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '-3s' }}
      >
        <SiSolana className="text-[hsl(264,100%,67%)] text-xl" />
      </motion.div>

      <motion.div 
        className="absolute bottom-40 right-40 w-10 h-10 bg-[hsl(160,100%,42%)]/30 rounded-full flex items-center justify-center"
        variants={pulseVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '-4s' }}
      >
        <FaDollarSign className="text-[hsl(160,100%,42%)] w-5 h-5" />
      </motion.div>

      {/* Geometric Shapes */}
      <motion.div 
        className="absolute top-96 right-60 w-8 h-8 border-2 border-[hsl(160,100%,42%)]/30 rotate-45"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '-2.5s' }}
      />

      <motion.div 
        className="absolute bottom-60 right-24 w-6 h-6 bg-gradient-to-r from-[hsl(160,100%,42%)]/30 to-[hsl(217,100%,60%)]/30 rotate-12"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '-1.5s' }}
      />
    </div>
  );
}
