
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  numReviews: number;
  isNew?: boolean;
  discount?: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full">
        <CardHeader className="p-0 relative">
          <Link to={`/products/${product.id}`}>
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {product.isNew && (
                <Badge className="absolute top-2 left-2 bg-shop-purple">New</Badge>
              )}
              {product.discount && (
                <Badge className="absolute top-2 right-2 bg-shop-orange">-{product.discount}%</Badge>
              )}
            </div>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white"
          >
            <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
          </Button>
        </CardHeader>
        
        <CardContent className="pt-4">
          <Link to={`/products/${product.id}`}>
            <h3 className="font-medium text-base mb-1 hover:text-shop-orange transition-colors line-clamp-2 h-12">
              {product.name}
            </h3>
          </Link>
          
          <div className="flex items-center mb-2">
            <div className="flex text-amber-400">
              {Array(5).fill(0).map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({product.numReviews})</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-shop-purple">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <div className="text-xs text-gray-500 mt-1">
            {product.category}
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <Button className="w-full bg-shop-orange text-white hover:bg-shop-orange/90">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
