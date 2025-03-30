
import React, { useState } from 'react';
import ProductCard, { Product } from './ProductCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  }
];

interface FeaturedProductsProps {
  title?: string;
  subtitle?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  title = "Featured Products", 
  subtitle = "Discover our handpicked selection of premium products" 
}) => {
  const [activePage, setActivePage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(sampleProducts.length / itemsPerPage);
  
  const handleNextPage = () => {
    setActivePage((prev) => (prev + 1) % totalPages);
  };
  
  const handlePrevPage = () => {
    setActivePage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const visibleProducts = sampleProducts.slice(
    activePage * itemsPerPage,
    (activePage + 1) * itemsPerPage
  );
  
  return (
    <section className="py-12 bg-shop-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-3 text-shop-purple"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrevPage}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant={activePage === index ? "default" : "outline"}
                size="icon"
                onClick={() => setActivePage(index)}
                className={`rounded-full ${activePage === index ? 'bg-shop-purple' : ''}`}
              >
                {index + 1}
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNextPage}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
