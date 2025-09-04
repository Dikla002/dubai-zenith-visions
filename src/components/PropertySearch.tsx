import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, DollarSign, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SearchFilters {
  location: string;
  priceRange: string;
  propertyType: string;
  searchQuery: string;
}

const PropertySearch = () => {
  const { t, direction } = useLanguage();
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    priceRange: '',
    propertyType: '',
    searchQuery: '',
  });

  const handleSearch = () => {
    console.log('Search filters:', filters);
    // Here you would implement the actual search logic
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="search-container p-6">
        {/* Main Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className={`absolute top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground ${
              direction === 'rtl' ? 'right-3' : 'left-3'
            }`} />
            <Input
              placeholder={t('search.placeholder')}
              value={filters.searchQuery}
              onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
              className={`${direction === 'rtl' ? 'pr-10' : 'pl-10'} h-12 text-lg`}
            />
          </div>
          <Button 
            onClick={handleSearch}
            className="cta-primary h-12 px-8 font-semibold"
          >
            {t('search.button')}
          </Button>
        </div>

        {/* Advanced Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {t('search.location')}
            </label>
            <Select value={filters.location} onValueChange={(value) => setFilters({ ...filters, location: value })}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="downtown">Downtown Dubai</SelectItem>
                <SelectItem value="marina">Dubai Marina</SelectItem>
                <SelectItem value="jbr">JBR</SelectItem>
                <SelectItem value="palm">Palm Jumeirah</SelectItem>
                <SelectItem value="business-bay">Business Bay</SelectItem>
                <SelectItem value="jlt">Jumeirah Lakes Towers</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              {t('search.price')}
            </label>
            <Select value={filters.priceRange} onValueChange={(value) => setFilters({ ...filters, priceRange: value })}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="500k-1m">AED 500K - 1M</SelectItem>
                <SelectItem value="1m-2m">AED 1M - 2M</SelectItem>
                <SelectItem value="2m-5m">AED 2M - 5M</SelectItem>
                <SelectItem value="5m-10m">AED 5M - 10M</SelectItem>
                <SelectItem value="10m+">AED 10M+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Home className="h-4 w-4" />
              {t('search.type')}
            </label>
            <Select value={filters.propertyType} onValueChange={(value) => setFilters({ ...filters, propertyType: value })}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="studio">Studio</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;