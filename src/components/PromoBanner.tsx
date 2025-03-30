
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const PromoBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-shop-purple to-shop-purple/90 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-20 top-10 w-80 h-80 rounded-full bg-shop-orange/20"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -left-40 -bottom-20 w-96 h-96 rounded-full bg-shop-orange/20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-white mb-8 md:mb-0"
          >
            <span className="inline-block py-1 px-3 bg-shop-orange rounded-full text-sm font-medium mb-4">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Up To 50% Off <br />On New Arrivals
            </h2>
            <p className="text-white/80 mb-6 max-w-md">
              Upgrade your style and tech with our season-end sale. 
              Discover amazing deals across all categories before they're gone!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-shop-orange hover:bg-shop-orange/90 text-white px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                Shop Now
              </Button>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <span className="block text-2xl font-bold">13</span>
                  <span className="text-xs text-white/80">Days</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold">09</span>
                  <span className="text-xs text-white/80">Hours</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold">24</span>
                  <span className="text-xs text-white/80">Minutes</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-2/5"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1637160083777-eb4dd9ef1952?q=80&w=1470&auto=format&fit=crop" 
                    alt="Smartwatch" 
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <div className="text-center">
                    <p className="text-white font-medium">Smartwatches</p>
                    <p className="text-shop-orange font-bold">Up to 30% Off</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1587290557171-f3405e85017d?q=80&w=1470&auto=format&fit=crop" 
                    alt="Headphones" 
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <div className="text-center">
                    <p className="text-white font-medium">Headphones</p>
                    <p className="text-shop-orange font-bold">Up to 40% Off</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1528&auto=format&fit=crop" 
                    alt="Sneakers" 
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <div className="text-center">
                    <p className="text-white font-medium">Sneakers</p>
                    <p className="text-shop-orange font-bold">Up to 50% Off</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1374&auto=format&fit=crop" 
                    alt="Cosmetics" 
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <div className="text-center">
                    <p className="text-white font-medium">Beauty Kits</p>
                    <p className="text-shop-orange font-bold">Up to 45% Off</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
