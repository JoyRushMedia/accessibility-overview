'use client';

import React, { createContext, useContext, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  debouncedSetSearchQuery: (query: string) => void;
  isSearching: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSetSearchQuery = useDebouncedCallback((query: string) => {
    setIsSearching(true);
    setSearchQuery(query);
    // Reduce the artificial delay
    setTimeout(() => setIsSearching(false), 150);
  }, 150);

  return (
    <SearchContext.Provider 
      value={{ 
        searchQuery, 
        setSearchQuery, 
        debouncedSetSearchQuery,
        isSearching 
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
