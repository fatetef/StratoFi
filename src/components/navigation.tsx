import { useState } from 'react';
import { Button } from './ui/button';
import { useWallet } from '@/hooks/use-wallet';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const { walletState, connectWallet, isConnecting, error } = useWallet();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleConnectWallet = async () => {
    try {
      await connectWallet('metamask');
    } catch (err) {
      console.error('Wallet connection failed:', err);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(0,0%,4%)]/80 backdrop-blur-lg border-b border-[hsl(0,0%,16%)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3">
              <img 
                src="/src/assets/stratofi-logo.png" 
                alt="StratoFi" 
                className="w-10 h-10 rounded-lg"
              />
              <div className="w-8 h-8 bg-gradient-to-r from-[hsl(160,100%,42%)] to-[hsl(264,100%,67%)] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">S</span>
              </div>
              <span className="text-white font-bold text-xl">StratoFi</span>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/markets" className="text-gray-300 hover:text-[hsl(160,100%,42%)] transition-colors">
              Markets
            </a>
            <a href="/vaults" className="text-gray-300 hover:text-[hsl(160,100%,42%)] transition-colors">
              Vaults
            </a>
            <a href="/pools" className="text-gray-300 hover:text-[hsl(160,100%,42%)] transition-colors">
              Pools
            </a>
            <a href="/analytics" className="text-gray-300 hover:text-[hsl(160,100%,42%)] transition-colors">
              Analytics
            </a>
            <a href="/docs" className="text-gray-300 hover:text-[hsl(160,100%,42%)] transition-colors">
              Docs
            </a>
          </div>
          
          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleConnectWallet}
              disabled={isConnecting}
              className="bg-gradient-to-r from-[hsl(160,100%,42%)] to-[hsl(217,100%,60%)] hover:from-[hsl(160,100%,35%)] hover:to-[hsl(217,100%,55%)] text-white font-medium transition-all duration-300 animate-pulse-glow"
            >
              {isConnecting 
                ? 'Connecting...' 
                : walletState.isConnected 
                  ? `${walletState.address?.slice(0, 6)}...${walletState.address?.slice(-4)}`
                  : 'Connect Wallet'
              }
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[hsl(0,0%,4%)]/95 backdrop-blur-lg border-b border-[hsl(0,0%,16%)]/20"
          >
            <div className="px-4 py-4 space-y-4">
              <a href="/markets" className="block text-gray-300 hover:text-[hsl(160,100%,42%)] transition-colors">
                Markets
              </a>
              <a href="/vaults" className="block text-gray-300 hover:text-[hsl(160,100%,42%)] transition-colors">
                Vaults
              </a>
              <a href="/pools" className="block text-gray-300 hover:text-[hsl(160,100%,42%)] transition-colors">
                Pools
              </a>
              <a href="/analytics" className="block text-gray-300 hover:text-[hsl(160,100%,42%)] transition-colors">
                Analytics
              </a>
              <a href="#docs" className="block text-gray-300 hover:text-[hsl(160,100%,42%)] transition-colors">
                Docs
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <div className="absolute top-full left-0 right-0 bg-red-600/90 text-white px-4 py-2 text-sm">
          {error}
        </div>
      )}
    </nav>
  );
}
