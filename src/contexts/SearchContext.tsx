import React, { createContext, useContext, useState } from 'react';

export interface SearchFilters {
  category: string;
  propertyType: string;
  location: string;
  priceRange: string;
  area: string;
  searchQuery: string;
}

interface SearchContextType {
  filters: SearchFilters;
  setFilters: (f: SearchFilters) => void;
}

const defaultFilters: SearchFilters = {
  category: 'buy',
  propertyType: '',
  location: '',
  priceRange: '',
  area: '',
  searchQuery: '',
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<SearchFilters>(defaultFilters);
  return (
    <SearchContext.Provider value={{ filters, setFilters }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error('useSearch must be used within SearchProvider');
  return ctx;
};


