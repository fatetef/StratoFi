import { motion } from 'framer-motion';
import { useVaultData } from '@/hooks/use-vault-data';
import { VAULT_TOKENS } from '@/lib/constants';
import { SiBitcoin, SiEthereum, SiSolana, SiBinance } from 'react-icons/si';
import { FaDollarSign } from 'react-icons/fa';

export function VaultYieldsSection() {
  const { data: vaultData, isLoading, error } = useVaultData();

  const features = [
    'Real-time yield calculations',
    'Automatic compound interest',
    'Flexible withdrawal terms',
    'Insurance protection available'
  ];

  const colors = ['green', 'blue', 'purple', 'teal'];

  if (error) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-red-400 mb-4">Failed to load vault data</div>
          <p className="text-gray-400">{error instanceof Error ? error.message : 'Unknown error occurred'}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">VAULT YIELDS</h2>
            <p className="text-xl text-gray-300 mb-8">
              Maximize your crypto earnings with our high-yield vaults. All yields are calculated 
              in real-time and secured by institutional-grade protocols.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-3 h-3 bg-${colors[index]}-400 rounded-full`} />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {isLoading ? (
              // Loading skeletons
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="bg-[hsl(0,0%,10%)]/50 border border-gray-600/20 rounded-2xl p-6 animate-pulse">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-600/20 rounded-full" />
                      <div className="w-12 h-4 bg-gray-600/20 rounded" />
                    </div>
                    <div className="text-right">
                      <div className="w-16 h-8 bg-gray-600/20 rounded mb-1" />
                      <div className="w-20 h-3 bg-gray-600/20 rounded" />
                    </div>
                  </div>
                  <div className="w-full bg-gray-600/20 rounded-full h-2" />
                </div>
              ))
            ) : (
              vaultData?.map((vault, index) => {
                const tokenInfo = VAULT_TOKENS[vault.symbol as keyof typeof VAULT_TOKENS];
                
                return (
                  <motion.div
                    key={vault.symbol}
                    className={`bg-gradient-to-br from-[${tokenInfo?.color || 'hsl(160,100%,42%)'}]/10 to-[${tokenInfo?.color || 'hsl(160,100%,42%)'}]/5 border border-[${tokenInfo?.color || 'hsl(160,100%,42%)'}]/20 rounded-2xl p-6 hover:border-[${tokenInfo?.color || 'hsl(160,100%,42%)'}]/40 transition-all duration-300 group`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-[${tokenInfo?.color || 'hsl(160,100%,42%)'}]/20 rounded-full flex items-center justify-center`}>
                          {vault.symbol === 'BTC' && <SiBitcoin className="w-5 h-5" style={{ color: tokenInfo?.color }} />}
                          {vault.symbol === 'ETH' && <SiEthereum className="w-5 h-5" style={{ color: tokenInfo?.color }} />}
                          {vault.symbol === 'SOL' && <SiSolana className="w-5 h-5" style={{ color: tokenInfo?.color }} />}
                          {vault.symbol === 'BNB' && <SiBinance className="w-5 h-5" style={{ color: tokenInfo?.color }} />}
                          {vault.symbol === 'USDC' && <FaDollarSign className="w-5 h-5" style={{ color: tokenInfo?.color }} />}
                          {!['BTC', 'ETH', 'SOL', 'BNB', 'USDC'].includes(vault.symbol) && (
                            <span className="font-bold text-sm" style={{ color: tokenInfo?.color }}>
                              {vault.symbol[0]}
                            </span>
                          )}
                        </div>
                        <span className="font-semibold text-white">{vault.symbol}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold" style={{ color: tokenInfo?.color }}>
                          {vault.apy.toFixed(1)}%
                        </div>
                        <div className="text-xs text-gray-400">
                          {vault.symbol === 'BTC' ? '30-day lock' : 'Flexible'}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      Available: <span className="text-white">{vault.available}</span>
                    </div>
                    <div className="w-full bg-[hsl(0,0%,16%)] rounded-full h-2">
                      <motion.div 
                        className="h-2 rounded-full bg-gradient-to-r"
                        style={{ 
                          backgroundImage: `linear-gradient(to right, ${tokenInfo?.color}, ${tokenInfo?.color}80)`,
                          width: `${Math.min(Math.max((vault.tvl / 1000000) * 100, 20), 90)}%`
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min(Math.max((vault.tvl / 1000000) * 100, 20), 90)}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
