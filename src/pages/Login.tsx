
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Eye, EyeOff, Mail, Phone, Lock } from 'lucide-react';

// Define schemas for both login methods
const emailSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  remember: z.boolean().default(false),
});

const phoneSchema = z.object({
  phone: z.string().regex(/^[0-9]{10}$/, { message: 'Please enter a valid 10-digit phone number' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  remember: z.boolean().default(false),
});

type EmailFormValues = z.infer<typeof emailSchema>;
type PhoneFormValues = z.infer<typeof phoneSchema>;

const Login = () => {
  const [activeTab, setActiveTab] = useState<'email' | 'phone'>('email');
  const [showPassword, setShowPassword] = useState(false);
  
  // Email form
  const emailForm = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });
  
  // Phone form
  const phoneForm = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phone: '',
      password: '',
      remember: false,
    },
  });
  
  const onEmailSubmit = (data: EmailFormValues) => {
    console.log('Email login data:', data);
    // Implement actual login logic
  };
  
  const onPhoneSubmit = (data: PhoneFormValues) => {
    console.log('Phone login data:', data);
    // Implement actual login logic
  };
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-shop-gray to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="px-6 py-8 sm:px-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-shop-purple">Welcome Back</h2>
                <p className="text-gray-600 mt-2">Sign in to your MYCART account</p>
              </div>
              
              <Tabs defaultValue="email" value={activeTab} onValueChange={(value) => setActiveTab(value as 'email' | 'phone')}>
                <TabsList className="grid grid-cols-2 mb-8">
                  <TabsTrigger value="email">Email</TabsTrigger>
                  <TabsTrigger value="phone">Phone</TabsTrigger>
                </TabsList>
                
                <TabsContent value="email">
                  <Form {...emailForm}>
                    <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-6">
                      <FormField
                        control={emailForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input className="pl-10" placeholder="you@example.com" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={emailForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input 
                                  className="pl-10" 
                                  type={showPassword ? 'text' : 'password'} 
                                  placeholder="Enter your password" 
                                  {...field} 
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="absolute right-1 top-1/2 transform -translate-y-1/2"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex items-center justify-between">
                        <FormField
                          control={emailForm.control}
                          name="remember"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox 
                                  checked={field.value} 
                                  onCheckedChange={field.onChange} 
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal cursor-pointer">Remember me</FormLabel>
                            </FormItem>
                          )}
                        />
                        
                        <Link to="/forgot-password" className="text-sm text-shop-orange hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      
                      <Button type="submit" className="w-full bg-shop-purple hover:bg-shop-purple/90">
                        Login
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
                
                <TabsContent value="phone">
                  <Form {...phoneForm}>
                    <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className="space-y-6">
                      <FormField
                        control={phoneForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input className="pl-10" placeholder="10-digit mobile number" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={phoneForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input 
                                  className="pl-10" 
                                  type={showPassword ? 'text' : 'password'} 
                                  placeholder="Enter your password" 
                                  {...field} 
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="absolute right-1 top-1/2 transform -translate-y-1/2"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex items-center justify-between">
                        <FormField
                          control={phoneForm.control}
                          name="remember"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox 
                                  checked={field.value} 
                                  onCheckedChange={field.onChange} 
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal cursor-pointer">Remember me</FormLabel>
                            </FormItem>
                          )}
                        />
                        
                        <Link to="/forgot-password" className="text-sm text-shop-orange hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      
                      <Button type="submit" className="w-full bg-shop-purple hover:bg-shop-purple/90">
                        Login
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Button variant="outline" className="w-full">
                    <svg className="h-5 w-5 mr-2" fill="#4285F4" viewBox="0 0 24 24">
                      <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.798-1.677-4.198-2.707-6.735-2.707-5.523 0-10 4.477-10 10s4.477 10 10 10c8.836 0 10.989-8.371 9.773-13.372z" />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg className="h-5 w-5 mr-2" fill="#3b5998" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    Facebook
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg className="h-5 w-5 mr-2" fill="#00acee" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    Twitter
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  New to MYCART?{' '}
                  <Link to="/signup" className="text-shop-orange font-medium hover:underline">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
