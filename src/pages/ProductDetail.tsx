
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Heart, 
  ShoppingCart, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  ThumbsUp, 
  Star, 
  Share2, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Minus, 
  Plus 
} from 'lucide-react';

// Sample product data
const sampleProducts = {
  1: {
    id: 1,
    name: 'Premium Wireless Earbuds with Noise Cancellation',
    description: 'Experience crystal-clear sound with our Premium Wireless Earbuds. Featuring advanced noise-cancellation technology, Bluetooth 5.2 connectivity, and up to 30 hours of battery life with the charging case. The ergonomic design ensures a comfortable fit for extended wear, while the built-in microphones deliver exceptional call quality. Perfect for work, exercise, or relaxing at home.',
    images: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1632&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624067673787-de14ddc90ad3?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608156639585-b3a7a6e98d0b?q=80&w=1374&auto=format&fit=crop'
    ],
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    rating: 4.7,
    numReviews: 249,
    isNew: true,
    inStock: true,
    category: 'Electronics',
    brand: 'SoundWave',
    colors: ['Black', 'White', 'Blue'],
    features: [
      'Active Noise Cancellation',
      'Bluetooth 5.2',
      '30-hour Battery Life',
      'IPX4 Water Resistant',
      'Touch Controls',
      'Voice Assistant Compatible'
    ],
    specifications: {
      'Driver Size': '11mm',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32 Ohm',
      'Battery Capacity': '50mAh (earbuds), 500mAh (case)',
      'Charging Time': '1.5 hours',
      'Weight': '5g (each earbud), 50g (charging case)'
    }
  }
};

// Sample reviews
const sampleReviews = [
  {
    id: 1,
    user: 'Rahul Singh',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    date: '3 weeks ago',
    title: 'Exceptional sound quality!',
    content: 'I've tried many earbuds in this price range, but these are truly exceptional. The noise cancellation works very well in noisy environments, and the sound clarity is outstanding. Battery life is as advertised, and they connect to my devices without any issues.',
    helpful: 42
  },
  {
    id: 2,
    user: 'Priya Sharma',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4,
    date: '1 month ago',
    title: 'Great earbuds with minor issues',
    content: 'The sound quality is excellent, and the noise cancellation is quite good for the price. My only complaint is that the touch controls can be a bit sensitive sometimes, causing unintended actions. Other than that, they are comfortable to wear and the battery life is impressive.',
    helpful: 28
  },
  {
    id: 3,
    user: 'Amit Patel',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    rating: 5,
    date: '2 months ago',
    title: 'Best purchase this year!',
    content: 'These earbuds exceeded my expectations in every way. The sound is rich and clear, battery life is excellent, and the noise cancellation works very well even in crowded places. The connectivity is stable, and I haven't experienced any dropouts. Definitely worth the price!',
    helpful: 56
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = sampleProducts[Number(id)] || sampleProducts[1]; // Fallback to first product if ID not found
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  return (
    <>
      <Navbar />
      <main className="bg-shop-gray min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-6">
            <span className="hover:text-shop-purple cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="hover:text-shop-purple cursor-pointer">{product.category}</span>
            <span className="mx-2">/</span>
            <span className="text-shop-purple">{product.name}</span>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 p-6">
              {/* Product Images */}
              <div className="lg:col-span-2">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4 h-96">
                  <motion.img 
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={product.images[currentImageIndex]} 
                    alt={product.name} 
                    className="w-full h-full object-contain"
                  />
                  
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`rounded-md overflow-hidden border-2 ${
                        index === currentImageIndex 
                          ? 'border-shop-purple' 
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} view ${index + 1}`} 
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="lg:col-span-3">
                <div className="flex flex-col h-full">
                  <div className="mb-4 flex items-center gap-2">
                    {product.isNew && (
                      <Badge className="bg-shop-purple">New Arrival</Badge>
                    )}
                    {product.discount && (
                      <Badge className="bg-shop-orange">{product.discount}% OFF</Badge>
                    )}
                  </div>
                  
                  <h1 className="text-2xl md:text-3xl font-bold text-shop-black mb-2">
                    {product.name}
                  </h1>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex text-amber-400 mr-2">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {product.rating} ({product.numReviews} reviews)
                    </div>
                    <div className="ml-auto flex items-center text-gray-600">
                      <Share2 className="h-4 w-4 mr-1" />
                      <span className="text-sm">Share</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <span className="text-3xl font-bold text-shop-purple">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <>
                          <span className="text-lg text-gray-500 line-through ml-2">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                          <span className="ml-2 text-shop-orange font-medium">
                            ({product.discount}% off)
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-green-600 text-sm flex items-center">
                      <Check className="h-4 w-4 mr-1" />
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Inclusive of all taxes
                    </p>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  {/* Color Selection */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Color: <span className="font-normal">{selectedColor}</span>
                    </h3>
                    <div className="flex space-x-2">
                      {product.colors.map(color => {
                        const colorMap = {
                          'Black': 'bg-black',
                          'White': 'bg-white',
                          'Blue': 'bg-blue-500',
                          'Red': 'bg-red-500',
                          'Gray': 'bg-gray-500',
                          'Green': 'bg-green-500'
                        };
                        
                        return (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-8 h-8 rounded-full ${colorMap[color]} ${
                              selectedColor === color 
                                ? 'ring-2 ring-offset-2 ring-shop-purple' 
                                : 'ring-1 ring-gray-300'
                            }`}
                            title={color}
                          ></button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Quantity */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Quantity</h3>
                    <div className="flex items-center">
                      <button
                        onClick={decrementQuantity}
                        className="p-2 border border-gray-300 rounded-l-md hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <div className="w-12 h-10 flex items-center justify-center border-t border-b border-gray-300">
                        {quantity}
                      </div>
                      <button
                        onClick={incrementQuantity}
                        className="p-2 border border-gray-300 rounded-r-md hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Button className="flex-1 bg-shop-orange hover:bg-shop-orange/90 h-12">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="flex-1 h-12">
                      <Heart className="mr-2 h-5 w-5" />
                      Add to Wishlist
                    </Button>
                  </div>
                  
                  {/* Delivery & Services */}
                  <div className="bg-shop-gray/50 rounded-lg p-4 space-y-4">
                    <div className="flex items-start">
                      <Truck className="h-5 w-5 text-shop-purple mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-medium">Free Delivery</h4>
                        <p className="text-sm text-gray-600">Delivery by tomorrow, 10 AM - 7 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ShieldCheck className="h-5 w-5 text-shop-purple mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-medium">1 Year Warranty</h4>
                        <p className="text-sm text-gray-600">Manufacturer warranty included</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <RotateCcw className="h-5 w-5 text-shop-purple mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-medium">7-Day Return Policy</h4>
                        <p className="text-sm text-gray-600">Return if product doesn't match description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Details Tabs */}
            <Tabs defaultValue="details" className="px-6 pb-6">
              <TabsList className="w-full max-w-md mx-auto mb-6">
                <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                <TabsTrigger value="specifications" className="flex-1">Specifications</TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-3">Product Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-shop-purple mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications">
                <h3 className="text-xl font-medium mb-3">Technical Specifications</h3>
                <div className="bg-shop-gray/30 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <tr key={key} className={index % 2 === 0 ? 'bg-white/50' : ''}>
                          <td className="py-3 px-4 font-medium">{key}</td>
                          <td className="py-3 px-4">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b">
                    <div className="flex flex-col items-center md:items-start">
                      <h3 className="text-xl font-medium">Customer Reviews</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex text-amber-400 mr-2">
                          {Array(5).fill(0).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span>
                          Based on {product.numReviews} reviews
                        </span>
                      </div>
                    </div>
                    <Button className="bg-shop-purple">Write a Review</Button>
                  </div>
                  
                  {/* Review List */}
                  <div className="space-y-6">
                    {sampleReviews.map(review => (
                      <div key={review.id} className="border-b pb-6">
                        <div className="flex items-center mb-3">
                          <img 
                            src={review.avatar} 
                            alt={review.user} 
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <div className="font-medium">{review.user}</div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                        </div>
                        
                        <div className="flex text-amber-400 mb-2">
                          {Array(5).fill(0).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        
                        <h4 className="font-medium mb-2">{review.title}</h4>
                        <p className="text-gray-700 mb-3">{review.content}</p>
                        
                        <div className="flex items-center">
                          <Button variant="ghost" size="sm" className="text-gray-600">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Helpful ({review.helpful})
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
