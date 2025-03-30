
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    avatar: 'https://randomuser.me/api/portraits/women/40.jpg',
    role: 'Regular Customer',
    content: 'MYCART has completely transformed my online shopping experience. The product variety is immense, and their delivery is super quick. I especially love the discount notifications!',
    rating: 5
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    role: 'Tech Enthusiast',
    content: 'As someone who buys a lot of electronics, I find MYCART to be the most reliable platform. Their product descriptions are detailed, and the return policy is hassle-free.',
    rating: 4
  },
  {
    id: 3,
    name: 'Ananya Patel',
    avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    role: 'Fashion Blogger',
    content: 'The fashion collection at MYCART is absolutely amazing! I love how they keep up with the latest trends. The quality of clothes has always exceeded my expectations.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-shop-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-3 text-shop-purple"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Hear from our satisfied customers about their shopping experience
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-shop-purple">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="flex-grow">
                  <p className="text-gray-600 italic">{testimonial.content}</p>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
