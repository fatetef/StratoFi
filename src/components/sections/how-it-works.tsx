import { motion } from 'framer-motion';
import { Wallet, Coins, TrendingUp, Shield, Zap, Link, Percent } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: Wallet,
      title: 'Connect Wallet',
      description: 'Securely link your digital wallet supporting Solana, Ethereum, and other major networks.'
    },
    {
      number: 2,
      icon: Coins,
      title: 'Choose Asset',
      description: 'Select the desired cryptocurrency from our extensive list of supported tokens and lending pools.'
    },
    {
      number: 3,
      icon: TrendingUp,
      title: 'Receive Loan Offer',
      description: 'Get instant liquidity with our competitive rates and start earning passive income immediately.'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Multi-signature wallets and smart contract audits',
      color: 'text-green-400'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-second transactions on Solana network',
      color: 'text-blue-400'
    },
    {
      icon: Link,
      title: 'Cross-Chain',
      description: 'Supports 5+ major blockchain networks',
      color: 'text-purple-400'
    },
    {
      icon: Percent,
      title: 'High Yields',
      description: 'Industry-leading APY rates up to 17.4%',
      color: 'text-[hsl(160,100%,42%)]'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">HOW IT WORKS</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started with StratoFi in three simple steps. Our platform makes DeFi accessible, 
            secure, and profitable for everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-[hsl(160,100%,42%)] to-[hsl(217,100%,60%)] rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[hsl(160,100%,42%)] rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Features */}
        <motion.div 
          className="bg-gradient-to-br from-[hsl(0,0%,10%)]/50 to-[hsl(0,0%,16%)]/30 backdrop-blur-lg rounded-2xl p-8 border border-[hsl(160,100%,42%)]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-12 h-12 ${feature.color.replace('text-', 'bg-')}/20 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <feature.icon className={`${feature.color} w-6 h-6`} />
                </div>
                <h4 className="font-semibold mb-2 text-white">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
