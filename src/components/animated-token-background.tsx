import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const tokens = [
  { name: 'BTC', color: '#F7931A', symbol: '₿' },
  { name: 'ETH', color: '#627EEA', symbol: 'Ξ' },
  { name: 'SOL', color: '#9945FF', symbol: '◎' },
  { name: 'USDC', color: '#2775CA', symbol: '$' },
  { name: 'BNB', color: '#F3BA2F', symbol: 'B' },
  { name: 'MATIC', color: '#8247E5', symbol: 'M' },
  { name: 'AVAX', color: '#E84142', symbol: 'A' },
  { name: 'ADA', color: '#0033AD', symbol: '₳' },
];

interface FloatingToken {
  id: number;
  token: typeof tokens[0];
  x: number;
  y: number;
  rotation: number;
  scale: number;
  duration: number;
}

export function AnimatedTokenBackground() {
  const [floatingTokens, setFloatingTokens] = useState<FloatingToken[]>([]);

  useEffect(() => {
    const generateTokens = () => {
      const newTokens: FloatingToken[] = [];
      
      for (let i = 0; i < 15; i++) {
        newTokens.push({
          id: i,
          token: tokens[Math.floor(Math.random() * tokens.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          rotation: Math.random() * 360,
          scale: 0.5 + Math.random() * 0.8,
          duration: 10 + Math.random() * 20,
        });
      }
      
      setFloatingTokens(newTokens);
    };

    generateTokens();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {floatingTokens.map((floatingToken) => (
        <motion.div
          key={floatingToken.id}
          className="absolute opacity-10 select-none"
          style={{
            left: `${floatingToken.x}%`,
            top: `${floatingToken.y}%`,
            color: floatingToken.token.color,
            scale: floatingToken.scale,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            rotate: [floatingToken.rotation, floatingToken.rotation + 360],
            scale: [floatingToken.scale, floatingToken.scale * 1.2, floatingToken.scale * 0.8, floatingToken.scale],
          }}
          transition={{
            duration: floatingToken.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-6xl font-bold">
            {floatingToken.token.symbol}
          </div>
          <div className="text-sm font-semibold text-center mt-1">
            {floatingToken.token.name}
          </div>
        </motion.div>
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,4%)]/60 via-transparent to-[hsl(0,0%,4%)]/60" />
    </div>
  );
}

export function TokenGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <div className="grid grid-cols-8 gap-8 p-8 h-full">
        {Array.from({ length: 64 }).map((_, i) => {
          const token = tokens[i % tokens.length];
          return (
            <motion.div
              key={i}
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ 
                delay: i * 0.1,
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: Math.random() * 5
              }}
            >
              <div 
                className="text-2xl font-bold"
                style={{ color: token.color }}
              >
                {token.symbol}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}