
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard, { Product } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Filter, Sparkles, Star, ChevronDown, Search, XCircle, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample product data
const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Earbuds with Noise Cancellation',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=1470&auto=format&fit=crop',
    price: 2999,
    originalPrice: 4999,
    rating: 4.7,
    numReviews: 249,
    isNew: true,
    discount: 40,
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Ultra Slim Smartwatch with Heart Rate Monitor',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1528&auto=format&fit=crop',
    price: 5499,
    originalPrice: 6999,
    rating: 4.5,
    numReviews: 178,
    discount: 21,
    category: 'Wearables'
  },
  {
    id: 3,
    name: 'Premium Leather Backpack with USB Charging Port',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1528&auto=format&fit=crop',
    price: 1999,
    originalPrice: 3499,
    rating: 4.8,
    numReviews: 312,
    discount: 43,
    category: 'Fashion'
  },
  {
    id: 4,
    name: 'Ultra HD Smart TV with AI Voice Control',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1470&auto=format&fit=crop',
    price: 42999,
    originalPrice: 54999,
    rating: 4.6,
    numReviews: 92,
    isNew: true,
    discount: 22,
    category: 'Electronics'
  },
  {
    id: 5,
    name: 'Pro Gaming Mechanical Keyboard with RGB Lighting',
    image: 'https://images.unsplash.com/photo-1646944979637-4eee95ac8ee7?q=80&w=1470&auto=format&fit=crop',
    price: 8999,
    originalPrice: 10999,
    rating: 4.9,
    numReviews: 156,
    category: 'Gaming'
  },
  {
    id: 6,
    name: 'Designer Stainless Steel Water Bottle - Insulated',
    image: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=1374&auto=format&fit=crop',
    price: 999,
    originalPrice: 1499,
    rating: 4.3,
    numReviews: 427,
    discount: 33,
    category: 'Home & Kitchen'
  },
  {
    id: 7,
    name: 'Professional DSLR Camera with 4K Video Recording',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1470&auto=format&fit=crop',
    price: 65999,
    originalPrice: 79999,
    rating: 4.8,
    numReviews: 74,
    isNew: true,
    discount: 17,
    category: 'Electronics'
  },
  {
    id: 8,
    name: 'Luxury Scented Candle Set - Pack of 3',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1470&auto=format&fit=crop',
    price: 1299,
    originalPrice: 1999,
    rating: 4.5,
    numReviews: 218,
    discount: 35,
    category: 'Home Decor'
  },
  {
    id: 9,
    name: 'Ergonomic Office Chair with Lumbar Support',
    image: 'https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?q=80&w=1374&auto=format&fit=crop',
    price: 12499,
    originalPrice: 15999,
    rating: 4.6,
    numReviews: 132,
    discount: 22,
    category: 'Furniture'
  },
  {
    id: 10,
    name: 'Smart Home Security Camera with Motion Detection',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1480&auto=format&fit=crop',
    price: 3999,
    originalPrice: 5499,
    rating: 4.4,
    numReviews: 89,
    discount: 27,
    category: 'Electronics'
  },
  {
    id: 11,
    name: 'Premium Yoga Mat with Alignment Lines',
    image: 'https://images.unsplash.com/photo-1592432678012-d9d891c67e8e?q=80&w=1374&auto=format&fit=crop',
    price: 1599,
    originalPrice: 2499,
    rating: 4.7,
    numReviews: 203,
    discount: 36,
    category: 'Sports & Fitness'
  },
  {
    id: 12,
    name: 'Wireless Gaming Controller for PC and Console',
    image: 'https://images.unsplash.com/photo-1585750494221-514053aeac89?q=80&w=1470&auto=format&fit=crop',
    price: 4999,
    originalPrice: 6999,
    rating: 4.8,
    numReviews: 167,
    isNew: true,
    discount: 29,
    category: 'Gaming'
  }
];

// Categories
const categories = [
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Beauty & Health',
  'Sports & Fitness',
  'Gaming',
  'Toys & Games',
  'Books',
  'Automotive',
  'Furniture'
];

// Brands
const brands = [
  'Apple',
  'Samsung',
  'Sony',
  'Bose',
  'Nike',
  'Adidas',
  'LG',
  'HP',
  'Philips',
  'Logitech'
];

const Products = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  // Filter products
  const filteredProducts = sampleProducts.filter(product => {
    // Filter by search query
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by price range
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    // Filter by rating
    if (selectedRating && product.rating < selectedRating) {
      return false;
    }
    
    // Filter by categories
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    
    // Filter by brands (in a real app, products would have brand property)
    // This is just a placeholder for demonstration
    if (selectedBrands.length > 0) {
      // For demo purposes, let's assume even IDs are Samsung, odd are Apple
      const productBrand = product.id % 2 === 0 ? 'Samsung' : 'Apple';
      if (!selectedBrands.includes(productBrand)) {
        return false;
      }
    }
    
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'discount':
        return (b.discount || 0) - (a.discount || 0);
      case 'newest':
        return b.id - a.id; // Using ID as a proxy for newness
      default: // featured
        return 0;
    }
  });
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };
  
  const handleRatingClick = (rating: number) => {
    setSelectedRating(prev => prev === rating ? null : rating);
  };
  
  const clearAllFilters = () => {
    setPriceRange([0, 100000]);
    setSelectedRating(null);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSearchQuery('');
  };
  
  const hasActiveFilters = () => {
    return (
      priceRange[0] > 0 ||
      priceRange[1] < 100000 ||
      selectedRating !== null ||
      selectedCategories.length > 0 ||
      selectedBrands.length > 0 ||
      searchQuery !== ''
    );
  };
  
  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };
  
  // Sidebar filter content
  const filterContent = (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <h3 className="text-lg font-medium mb-2">Search</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            type="text"
            placeholder="Search products..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <XCircle className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      
      {/* Price Range */}
      <Accordion type="single" collapsible defaultValue="price">
        <AccordionItem value="price">
          <AccordionTrigger className="text-lg font-medium">
            Price Range
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-2 space-y-4">
              <Slider 
                defaultValue={[0, 100000]} 
                min={0} 
                max={100000} 
                step={1000} 
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
              />
              <div className="flex justify-between">
                <span>₹{priceRange[0].toLocaleString()}</span>
                <span>₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      {/* Categories */}
      <Accordion type="single" collapsible defaultValue="categories">
        <AccordionItem value="categories">
          <AccordionTrigger className="text-lg font-medium">
            Categories
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 mt-2">
              {categories.map(category => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category}`} 
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <label 
                    htmlFor={`category-${category}`}
                    className="text-sm cursor-pointer"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      {/* Brands */}
      <Accordion type="single" collapsible defaultValue="brands">
        <AccordionItem value="brands">
          <AccordionTrigger className="text-lg font-medium">
            Brands
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 mt-2">
              {brands.map(brand => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`brand-${brand}`} 
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => handleBrandChange(brand)}
                  />
                  <label 
                    htmlFor={`brand-${brand}`}
                    className="text-sm cursor-pointer"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      {/* Ratings */}
      <div>
        <h3 className="text-lg font-medium mb-3">Ratings</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map(rating => (
            <button
              key={rating}
              onClick={() => handleRatingClick(rating)}
              className={`flex items-center w-full p-2 rounded-md transition-colors ${
                selectedRating === rating ? 'bg-shop-purple/10 text-shop-purple' : 'hover:bg-gray-100'
              }`}
            >
              <div className="flex">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2">& Above</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Clear Filters - only show if there are active filters */}
      {hasActiveFilters() && (
        <Button 
          variant="outline" 
          onClick={clearAllFilters}
          className="w-full mt-4"
        >
          Clear All Filters
        </Button>
      )}
    </div>
  );
  
  return (
    <>
      <Navbar />
      <main className="bg-shop-gray min-h-screen">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-shop-purple to-shop-purple/90 py-12 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-shop-orange/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-shop-orange/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                Explore Our Products
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl max-w-2xl mx-auto text-white/80"
              >
                Discover a vast selection of high-quality products at incredible prices
              </motion.p>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <aside className="hidden md:block w-64 bg-white p-6 rounded-xl shadow-md h-fit sticky top-24">
              {filterContent}
            </aside>
            
            {/* Mobile Filter Button */}
            <div className="md:hidden sticky top-20 z-30 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md flex justify-between items-center mb-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={toggleMobileFilters}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {hasActiveFilters() && (
                  <span className="bg-shop-purple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {selectedCategories.length + selectedBrands.length + (selectedRating ? 1 : 0) + 
                    ((priceRange[0] > 0 || priceRange[1] < 100000) ? 1 : 0) + (searchQuery ? 1 : 0)}
                  </span>
                )}
              </Button>
              
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                  <SelectItem value="discount">Discount</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Mobile Filter Panel */}
            {showMobileFilters && (
              <div className="md:hidden fixed inset-0 bg-black/50 z-40 flex justify-end">
                <motion.div 
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white w-4/5 h-full overflow-y-auto p-6"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={toggleMobileFilters}
                    >
                      <XCircle className="h-6 w-6" />
                    </Button>
                  </div>
                  
                  {filterContent}
                  
                  <div className="mt-8 flex gap-4">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={toggleMobileFilters}
                    >
                      Cancel
                    </Button>
                    <Button 
                      className="flex-1 bg-shop-purple"
                      onClick={toggleMobileFilters}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </motion.div>
              </div>
            )}
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Sort Options - Desktop */}
              <div className="hidden md:flex justify-between items-center mb-6">
                <div className="text-gray-600">
                  <span className="font-medium">{sortedProducts.length}</span> results
                  {hasActiveFilters() && " (filtered)"}
                </div>
                
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                    <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                    <SelectItem value="discount">Discount</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Product Grid */}
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <Search className="h-16 w-16 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No Products Found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any products matching your filters. Try adjusting your search criteria.
                  </p>
                  <Button onClick={clearAllFilters}>Clear All Filters</Button>
                </div>
              )}
              
              {/* Pagination */}
              {sortedProducts.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <Button variant="outline" className="mx-1">1</Button>
                  <Button variant="outline" className="mx-1">2</Button>
                  <Button variant="outline" className="mx-1">3</Button>
                  <Button variant="ghost" className="mx-1">...</Button>
                  <Button variant="outline" className="mx-1">10</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
