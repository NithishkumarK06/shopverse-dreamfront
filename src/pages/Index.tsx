
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import PromoBanner from '@/components/PromoBanner';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ShoppingBag, Truck, ShieldCheck, RefreshCw } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <ShoppingBag className="h-8 w-8 text-shop-orange" />,
                  title: "Huge Selection",
                  description: "Over 100,000 products to choose from across categories"
                },
                {
                  icon: <Truck className="h-8 w-8 text-shop-orange" />,
                  title: "Fast Delivery",
                  description: "Free standard shipping and express delivery options"
                },
                {
                  icon: <ShieldCheck className="h-8 w-8 text-shop-orange" />,
                  title: "Secure Shopping",
                  description: "Multiple payment options with end-to-end encryption"
                },
                {
                  icon: <RefreshCw className="h-8 w-8 text-shop-orange" />,
                  title: "Easy Returns",
                  description: "Hassle-free return and refund within 7 days"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-shop-purple/10 rounded-full">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-shop-purple">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <Categories />
        
        <FeaturedProducts />
        
        <PromoBanner />
        
        <FeaturedProducts 
          title="New Arrivals" 
          subtitle="The latest additions to our exceptional product collection" 
        />
        
        <Testimonials />
        
        {/* Newsletter Section */}
        <section className="py-16 bg-shop-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-shop-orange/10 rounded-full blur-3xl" />
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-shop-orange/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-shop-orange/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Join Our Newsletter
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/80 mb-8"
              >
                Stay updated with the latest products, exclusive offers, and promotions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-shop-orange text-gray-800"
                />
                <button className="px-6 py-3 bg-shop-orange text-white font-medium rounded-lg hover:bg-shop-orange/90 transition-colors">
                  Subscribe
                </button>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm text-white/60 mt-4"
              >
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </motion.p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
