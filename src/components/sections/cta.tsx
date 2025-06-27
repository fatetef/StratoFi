import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { CheckCircle } from 'lucide-react';

export function CTASection() {
  const features = [
    'Audited Smart Contracts',
    'Insurance Protected',
    '24/7 Support'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          className="bg-gradient-to-br from-[hsl(0,0%,10%)]/50 to-[hsl(0,0%,16%)]/30 backdrop-blur-lg rounded-3xl p-12 border border-[hsl(160,100%,42%)]/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-black mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(160,100%,42%)] to-[hsl(217,100%,60%)]">
              Maximize
            </span>{' '}
            Your Crypto?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join 24,000+ users who trust StratoFi with their DeFi investments. Start earning 
            high-yield passive income today with just a few clicks.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[hsl(160,100%,42%)] to-[hsl(217,100%,60%)] hover:from-[hsl(160,100%,35%)] hover:to-[hsl(217,100%,55%)] px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
            >
              Launch App
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-[hsl(160,100%,42%)] text-[hsl(160,100%,42%)] hover:bg-[hsl(160,100%,42%)]/10 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              View Documentation
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center space-x-8 text-sm text-gray-400 flex-wrap gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-green-400 w-4 h-4" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
