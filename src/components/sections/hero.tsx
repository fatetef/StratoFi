import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { FloatingElements } from '../ui/floating-elements';
import { AnimatedTokenBackground } from '../animated-token-background';
import { FundingModal } from '../wallet-integration';
import { usePlatformStats } from '@/hooks/use-vault-data';
import { useState } from 'react';
import { Wallet, TrendingUp, Shield } from 'lucide-react';

export function HeroSection() {
  const { data: stats, isLoading } = usePlatformStats();
  const [showFundingModal, setShowFundingModal] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <AnimatedTokenBackground />
      <FloatingElements />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
              <span className="block">LEND.</span>
              <span className="block">BORROW.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[hsl(160,100%,42%)] to-[hsl(217,100%,60%)]">
                GROW.
              </span>
            </h1>
            
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-[hsl(160,100%,42%)]">
                DEFI REIMAGINED FOR EVERY TOKEN—
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-[hsl(160,100%,42%)]">
                POWERED BY SOLANA.
              </h3>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              StratoFi is your gateway to high-yield passive income, real-time multi-chain lending, 
              and secure asset management. Lend SOL, ETH, BTC, and more—faster, smarter, safer.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={() => setShowFundingModal(true)}
              className="bg-gradient-to-r from-[hsl(160,100%,42%)] to-[hsl(217,100%,60%)] hover:from-[hsl(160,100%,35%)] hover:to-[hsl(217,100%,55%)] px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-pulse-glow flex items-center gap-2"
            >
              <Wallet className="w-5 h-5" />
              Add Funds & Start Earning
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-[hsl(160,100%,42%)] text-[hsl(160,100%,42%)] hover:bg-[hsl(160,100%,42%)]/10 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Access Liquidity
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Interactive Dashboard Preview */}
          <div className="bg-gradient-to-br from-[hsl(0,0%,10%)]/50 to-[hsl(0,0%,16%)]/30 backdrop-blur-lg rounded-2xl p-6 border border-[hsl(160,100%,42%)]/20 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Portfolio Overview</h3>
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm text-gray-400">Live</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[hsl(0,0%,16%)]/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400">Total Deposited</div>
                  <div className="text-2xl font-bold text-[hsl(160,100%,42%)]">
                    {isLoading ? '...' : stats?.totalValueLocked || '$24,567.89'}
                  </div>
                </div>
                <div className="bg-[hsl(0,0%,16%)]/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400">Total Earned</div>
                  <div className="text-2xl font-bold text-green-400">$3,891.23</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Platform Growth</span>
                  <span className="text-sm font-medium text-white">+127%</span>
                </div>
                <div className="w-full bg-[hsl(0,0%,16%)] rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-[hsl(160,100%,42%)] to-[hsl(217,100%,60%)] h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Funding Modal */}
      <FundingModal
        isOpen={showFundingModal}
        onClose={() => setShowFundingModal(false)}
        poolType="vault"
        poolName="StratoFi Main Vault"
      />
    </section>
  );
}
