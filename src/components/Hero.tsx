
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-shop-purple to-shop-purple/90 text-white">
      {/* Background Animation - Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-shop-orange/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-shop-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-shop-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Shop the Future, <br />
              <span className="text-shop-orange">Today</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl mb-6 text-white/80"
            >
              Discover a new era of online shopping with unparalleled selection,
              exclusive deals, and an immersive experience designed for the modern shopper.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="bg-shop-orange hover:bg-shop-orange/90 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                Explore Now
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg">
                Today's Deals
              </Button>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              {/* Animated Shopping Bag */}
              <div className="absolute inset-0 bg-shop-purple rounded-lg shadow-2xl overflow-hidden">
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-3/4 border-b-4 border-shop-orange rounded-b-full"></div>
                <div className="absolute top-2/3 w-full flex justify-center">
                  <span className="text-3xl font-bold tracking-wider">
                    MY<span className="text-shop-orange">CART</span>
                  </span>
                </div>
              </div>
              
              {/* Floating Elements Animation */}
              <motion.div 
                animate={{ y: ['-5%', '5%', '-5%'] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-shop-orange/30 backdrop-blur-sm"
              />
              <motion.div 
                animate={{ y: ['5%', '-5%', '5%'] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-shop-orange/20 backdrop-blur-sm"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Stats or Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="p-4">
            <h3 className="text-3xl font-bold text-shop-orange">24K+</h3>
            <p className="text-white/80">Products</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-bold text-shop-orange">10M+</h3>
            <p className="text-white/80">Customers</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-bold text-shop-orange">99%</h3>
            <p className="text-white/80">Satisfaction</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-bold text-shop-orange">24/7</h3>
            <p className="text-white/80">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
