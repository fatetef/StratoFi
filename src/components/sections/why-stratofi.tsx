import { motion } from 'framer-motion';
import { TrendingUp, Shield, Link, Zap } from 'lucide-react';
import { usePlatformStats } from '@/hooks/use-vault-data';

export function WhyStratoFiSection() {
  const { data: stats, isLoading } = usePlatformStats();

  const benefits = [
    {
      icon: TrendingUp,
      title: 'High-Yield Passive Income',
      description: 'Earn industry-leading APY rates up to 17.4% on your crypto holdings. Our optimized yield farming strategies maximize your returns while minimizing risk through diversified liquidity pools.',
      gradient: 'from-[hsl(160,100%,42%)] to-[hsl(217,100%,60%)]'
    },
    {
      icon: Shield,
      title: 'Institutional-Grade Security',
      description: 'Your assets are protected by multi-signature wallets, smart contract audits by leading security firms, and comprehensive insurance coverage. We\'ve processed over $127M in transactions with zero security incidents.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Link,
      title: 'Cross-Chain Liquidity',
      description: 'Access liquidity across Solana, Ethereum, Polygon, Base, and BNB networks. Our advanced bridging technology enables seamless asset transfers with minimal fees and maximum speed.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Performance',
      description: 'Built on Solana\'s high-performance blockchain, enjoy sub-second transaction speeds and ultra-low fees. Process thousands of transactions per second without compromising security or decentralization.',
      gradient: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Platform Statistics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-[hsl(0,0%,10%)]/50 to-[hsl(0,0%,16%)]/30 backdrop-blur-lg rounded-2xl p-8 border border-[hsl(160,100%,42%)]/20">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Platform Statistics</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[hsl(160,100%,42%)] mb-2">
                    {isLoading ? '...' : stats?.totalValueLocked || '$127.5M'}
                  </div>
                  <div className="text-sm text-gray-400">Total Value Locked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {isLoading ? '...' : (stats?.activeUsers?.toLocaleString() || '24,891')}
                  </div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {isLoading ? '...' : stats?.transactionsProcessed || '1.2M+'}
                  </div>
                  <div className="text-sm text-gray-400">Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {isLoading ? '...' : `${stats?.networksSupported || 5}+`}
                  </div>
                  <div className="text-sm text-gray-400">Networks</div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-[hsl(0,0%,16%)]/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Security Score</span>
                  <span className="text-sm font-semibold text-green-400">
                    {isLoading ? '...' : `${stats?.securityScore || 98.7}%`}
                  </span>
                </div>
                <div className="w-full bg-[hsl(0,0%,4%)] rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stats?.securityScore || 98.7}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">WHY STRATOFI</h2>
            
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
