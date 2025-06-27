import { useState, useCallback, useEffect } from 'react';
import { blockchainService } from '@/lib/blockchain';

export interface WalletState {
  isConnected: boolean;
  address: string | null;
  network: string | null;
  balance: string | null;
}

export function useWallet() {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
    network: null,
    balance: null
  });
  
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for existing wallet connection on mount
  useEffect(() => {
    const checkConnection = async () => {
      try {
        // Check MetaMask
        if (typeof window.ethereum !== 'undefined') {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setWalletState({
              isConnected: true,
              address: accounts[0],
              network: 'Ethereum',
              balance: null
            });
          }
        }
        // Check Phantom (Solana)
        else if (typeof window.solana !== 'undefined' && window.solana.isPhantom) {
          if (window.solana.isConnected) {
            setWalletState({
              isConnected: true,
              address: window.solana.publicKey?.toString() || null,
              network: 'Solana',
              balance: null
            });
          }
        }
      } catch (error) {
        console.error('Error checking wallet connection:', error);
      }
    };

    checkConnection();
  }, []);

  const connectWallet = useCallback(async (walletType: 'metamask' | 'phantom' | 'solflare' = 'metamask') => {
    setIsConnecting(true);
    setError(null);
    
    try {
      const address = await blockchainService.connectWallet(walletType);
      
      setWalletState({
        isConnected: true,
        address,
        network: walletType === 'metamask' ? 'Ethereum' : 'Solana',
        balance: null // Will be fetched separately
      });
      
      return address;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to connect wallet';
      setError(errorMessage);
      throw err;
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setWalletState({
      isConnected: false,
      address: null,
      network: null,
      balance: null
    });
    setError(null);
  }, []);

  return {
    walletState,
    isConnecting,
    error,
    connectWallet,
    disconnectWallet
  };
}
