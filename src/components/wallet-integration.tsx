import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wallet, ExternalLink, Copy, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WalletConfig {
  ETHEREUM_WALLET: string;
  SOLANA_WALLET: string;
}

const WALLET_ADDRESSES: WalletConfig = {
  ETHEREUM_WALLET: '0x942c3bC5B0ee8d5843D3394500291f7B4b4679e8',
  SOLANA_WALLET: '7cLkstoxV1YmfNVN8KJQgYYT7bBL7QH8d4zFKa1kBwHs'
};

interface FundingModalProps {
  isOpen: boolean;
  onClose: () => void;
  poolType: 'vault' | 'liquidity';
  poolName: string;
}

export function FundingModal({ isOpen, onClose, poolType, poolName }: FundingModalProps) {
  const [amount, setAmount] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('ethereum');
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const walletAddress = selectedNetwork === 'ethereum' 
    ? WALLET_ADDRESSES.ETHEREUM_WALLET 
    : WALLET_ADDRESSES.SOLANA_WALLET;

  const copyAddress = async () => {
    await navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    toast({
      title: "Address Copied",
      description: "Wallet address copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const openBlockchainExplorer = () => {
    const url = selectedNetwork === 'ethereum' 
      ? `https://etherscan.io/address/${walletAddress}`
      : `https://solscan.io/account/${walletAddress}`;
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="bg-[hsl(0,0%,8%)] border-[hsl(0,0%,16%)] max-w-md w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[hsl(160,100%,42%)]">
            <Wallet className="w-5 h-5" />
            Add Funds to {poolName}
          </CardTitle>
          <CardDescription>
            Send funds to the {poolType} wallet address below
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="network">Select Network</Label>
            <Select value={selectedNetwork} onValueChange={setSelectedNetwork}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ethereum">Ethereum (ETH)</SelectItem>
                <SelectItem value="solana">Solana (SOL)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-[hsl(0,0%,12%)] border-[hsl(0,0%,16%)]"
            />
          </div>

          <div className="bg-[hsl(0,0%,12%)] p-4 rounded-lg">
            <Label className="text-sm font-semibold text-yellow-400 mb-2 block">
              {selectedNetwork === 'ethereum' ? 'Ethereum' : 'Solana'} Wallet Address
            </Label>
            <div className="flex items-center gap-2">
              <code className="text-xs bg-[hsl(0,0%,16%)] p-2 rounded flex-1 text-gray-300 break-all">
                {walletAddress}
              </code>
              <Button
                variant="outline"
                size="sm"
                onClick={copyAddress}
                className="shrink-0"
              >
                {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Badge variant="secondary" className="w-full justify-center">
              Network: {selectedNetwork === 'ethereum' ? 'Ethereum Mainnet' : 'Solana Mainnet'}
            </Badge>
            <p className="text-xs text-gray-400 text-center">
              Send only {selectedNetwork === 'ethereum' ? 'ETH or ERC-20' : 'SOL or SPL'} tokens to this address.
              Other tokens may be lost permanently.
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={openBlockchainExplorer}
              className="flex-1 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View on Explorer
            </Button>
            <Button onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function WalletStatus() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  useEffect(() => {
    // Check for wallet connections
    const checkWalletConnection = async () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setIsConnected(true);
            setAddress(accounts[0]);
          }
        } catch (error) {
          console.log('Wallet not connected');
        }
      }
    };

    checkWalletConnection();
  }, []);

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
        setAddress(accounts[0]);
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    } else {
      window.open('https://metamask.io/download/', '_blank');
    }
  };

  return (
    <div className="flex items-center gap-2">
      {isConnected ? (
        <Badge className="bg-green-600 text-white">
          Connected: {address.slice(0, 6)}...{address.slice(-4)}
        </Badge>
      ) : (
        <Button
          variant="outline"
          size="sm"
          onClick={connectWallet}
          className="flex items-center gap-2"
        >
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </Button>
      )}
    </div>
  );
}