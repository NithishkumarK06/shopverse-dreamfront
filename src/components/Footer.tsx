
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-shop-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 bg-shop-purple rounded-md"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[-30%] w-6 h-3 border-b-2 border-shop-orange rounded-b-full"></div>
              </div>
              <span className="ml-2 text-xl font-bold">
                MY<span className="text-shop-orange">CART</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your ultimate shopping destination for all your needs with unbeatable prices and exceptional quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-shop-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-shop-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-shop-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-shop-orange transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/1" className="text-gray-400 hover:text-shop-orange transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/categories/2" className="text-gray-400 hover:text-shop-orange transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/categories/3" className="text-gray-400 hover:text-shop-orange transition-colors">
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link to="/categories/4" className="text-gray-400 hover:text-shop-orange transition-colors">
                  Beauty & Health
                </Link>
              </li>
              <li>
                <Link to="/categories/5" className="text-gray-400 hover:text-shop-orange transition-colors">
                  Sports & Fitness
                </Link>
              </li>
              <li>
                <Link to="/categories/6" className="text-gray-400 hover:text-shop-orange transition-colors">
                  Toys & Games
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-shop-orange transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-shop-orange transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-shop-orange transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-shop-orange transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-shop-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-shop-orange transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest products, offers, and updates.
            </p>
            <div className="flex mb-4">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="rounded-r-none text-black" 
              />
              <Button className="rounded-l-none bg-shop-orange hover:bg-shop-orange/90">
                Subscribe
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-shop-orange shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 E-Commerce Street, Digital City, India
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-shop-orange" />
                <span className="text-gray-400">+91 1234 567 890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-shop-orange" />
                <span className="text-gray-400">support@mycart.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MYCART. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <img src="https://res.cloudinary.com/dj3q46zgl/image/upload/v1626436270/visa_jaidfl.png" alt="Visa" className="h-8" />
            <img src="https://res.cloudinary.com/dj3q46zgl/image/upload/v1626436270/mastercard_qfg6ge.png" alt="Mastercard" className="h-8" />
            <img src="https://res.cloudinary.com/dj3q46zgl/image/upload/v1626436270/paypal_hfbuji.png" alt="PayPal" className="h-8" />
            <img src="https://res.cloudinary.com/dj3q46zgl/image/upload/v1626436270/amex_wdnqrr.png" alt="American Express" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
