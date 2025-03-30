
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

const categoryList: Category[] = [
  {
    id: 1,
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1502&auto=format&fit=crop',
    count: 245
  },
  {
    id: 2,
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?q=80&w=1522&auto=format&fit=crop',
    count: 432
  },
  {
    id: 3,
    name: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1374&auto=format&fit=crop',
    count: 187
  },
  {
    id: 4,
    name: 'Beauty & Health',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480&auto=format&fit=crop',
    count: 308
  },
  {
    id: 5,
    name: 'Sports & Fitness',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop',
    count: 156
  },
  {
    id: 6,
    name: 'Toys & Games',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1470&auto=format&fit=crop',
    count: 94
  }
];

const Categories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-3 text-shop-purple"
          >
            Shop by Category
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore our wide range of products across popular categories
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryList.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link to={`/categories/${category.id}`} className="block">
                <div className="bg-shop-gray rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-shop-purple">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} Products</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
