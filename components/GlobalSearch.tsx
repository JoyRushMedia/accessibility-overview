'use client';

import { Search } from "lucide-react";
import { useSearch } from "../app/contexts/SearchContext";
import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import {
  SidebarGroup,
  SidebarContent,
} from "./ui/sidebar";

interface SearchResult {
  title: string;
  description: string;
  link: string;
}

export function GlobalSearch() {
  const { searchQuery, debouncedSetSearchQuery, isSearching } = useSearch();
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (searchQuery.length >= 2) {
      // Mock search results - replace with real search logic
      const mockResults = [
        {
          title: "WCAG 2.1 Guidelines",
          description: "Overview of accessibility requirements",
          link: "/wcag"
        },
        {
          title: "Procurement Process",
          description: "Vendor evaluation guidelines",
          link: "/procurement"
        },
        // Add more mock results as needed
      ].filter(result => 
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setResults(mockResults);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchQuery]);

  return (
    <div className="relative">
      <SidebarGroup className="py-0">
        <SidebarContent className="relative">
          <input
            placeholder="Search across all sections..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => debouncedSetSearchQuery(e.target.value)}
            onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
            className="pl-9 pr-4 h-9 bg-white rounded-lg border-gray-200 
              focus:border-indigo-300 focus:ring focus:ring-indigo-200/50"
          />
          <Search 
            className={`pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 
              ${isSearching ? 'text-indigo-600' : 'text-gray-400'}`} 
          />
          {isSearching && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin text-indigo-600">⏳</div>
            </div>
          )}
        </SidebarContent>
      </SidebarGroup>

      {showResults && results.length > 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 shadow-lg border-gray-200 
          divide-y divide-gray-100 max-h-96 overflow-auto rounded-lg">
          {results.map((result, index) => (
            <a
              key={index}
              href={result.link}
              className="block p-3 hover:bg-gray-50 transition-colors"
            >
              <div className="text-sm font-medium text-gray-900">{result.title}</div>
              <div className="text-xs text-gray-500">{result.description}</div>
            </a>
          ))}
        </Card>
      )}
    </div>
  );
}
