import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/home";
import MarketsPage from "@/pages/markets";
import VaultsPage from "@/pages/vaults";
import PoolsPage from "@/pages/pools";
import AnalyticsPage from "@/pages/analytics";
import DocsPage from "@/pages/docs";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/markets" component={MarketsPage} />
      <Route path="/vaults" component={VaultsPage} />
      <Route path="/pools" component={PoolsPage} />
      <Route path="/analytics" component={AnalyticsPage} />
      <Route path="/docs" component={DocsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
