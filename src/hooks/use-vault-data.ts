import { useQuery } from '@tanstack/react-query';
import { blockchainService, VaultData, PlatformStats } from '@/lib/blockchain';

export function useVaultData() {
  return useQuery<VaultData[]>({
    queryKey: ['/api/vaults'],
    queryFn: () => blockchainService.fetchVaultData(),
    refetchInterval: 30000, // Refresh every 30 seconds
    staleTime: 15000 // Consider data stale after 15 seconds
  });
}

export function usePlatformStats() {
  return useQuery<PlatformStats>({
    queryKey: ['/api/stats'],
    queryFn: () => blockchainService.fetchPlatformStats(),
    refetchInterval: 60000, // Refresh every minute
    staleTime: 30000 // Consider data stale after 30 seconds
  });
}
