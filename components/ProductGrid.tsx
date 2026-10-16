'use client';

import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'low_high' | 'high_low'>('default');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Category
    if (selectedCategory !== 'ALL') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Search
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q)
      );
    }

    // Sort by price
    if (sortBy === 'low_high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high_low') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('ALL');
    setSearchQuery('');
    setSortBy('default');
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - Pinterest "Choose Your Water" layout style */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-primary bg-brand-soft px-3.5 py-1.5 rounded-full border border-brand-light/30">
            Pure & Natural Catalog
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Choose Your Wellness
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Handcrafted with organic purity. Add your favorite essentials to the cart and order directly.
          </p>
        </div>

        {/* Filter & Search Bar Row */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, makhana, alkaline..."
                className="w-full pl-10 pr-10 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Price Sort Dropdown */}
            <div className="w-full md:w-auto flex items-center justify-end gap-2 text-xs sm:text-sm text-gray-600">
              <SlidersHorizontal size={15} className="text-brand-primary" />
              <span className="font-medium hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-2 px-3 rounded-full bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 cursor-pointer"
              >
                <option value="default">Featured / Default</option>
                <option value="low_high">Price: Low to High</option>
                <option value="high_low">Price: High to Low</option>
              </select>
            </div>

          </div>

          {/* Category Tabs / Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              const count =
                cat.id === 'ALL'
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    active
                      ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20 scale-102'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-gray-50 rounded-3xl p-8 border border-dashed border-gray-200 max-w-lg mx-auto">
            <h3 className="text-lg font-bold text-gray-800">No products found</h3>
            <p className="mt-1 text-sm text-gray-500">
              We couldn&apos;t find any item matching your query &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-primary text-white text-xs font-semibold hover:bg-brand-dark transition-all"
            >
              <RotateCcw size={14} />
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
