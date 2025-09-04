import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SearchProvider } from "@/contexts/SearchContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PropertyDetails from "./pages/PropertyDetails";
import Favorites from "./pages/Favorites";
import NewsList from "./pages/NewsList";
import NewsPost from "./pages/NewsPost";
import HashScroll from "@/components/HashScroll";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <SearchProvider>
          <FavoritesProvider>
            
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <HashScroll />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/property/:id" element={<PropertyDetails />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/news" element={<NewsList />} />
                  <Route path="/news/:slug" element={<NewsPost />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </FavoritesProvider>
        </SearchProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
