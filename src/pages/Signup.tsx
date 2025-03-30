
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Eye, EyeOff, Mail, Phone, Lock, User } from 'lucide-react';

// Define schema for signup
const signupSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().regex(/^[0-9]{10}$/, { message: 'Please enter a valid 10-digit phone number' }),
  countryCode: z.string(),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
    .regex(/[^A-Za-z0-9]/, { message: 'Password must contain at least one special character' }),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, { message: 'You must accept the terms and conditions' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

const countryCodes = [
  { value: '+91', label: 'India (+91)' },
  { value: '+1', label: 'USA (+1)' },
  { value: '+44', label: 'UK (+44)' },
  { value: '+61', label: 'Australia (+61)' },
  { value: '+81', label: 'Japan (+81)' },
  { value: '+86', label: 'China (+86)' },
  { value: '+49', label: 'Germany (+49)' },
  { value: '+33', label: 'France (+33)' },
  { value: '+7', label: 'Russia (+7)' },
  { value: '+971', label: 'UAE (+971)' },
];

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [verifyStep, setVerifyStep] = useState(false);
  const [otpInputs, setOtpInputs] = useState(['', '', '', '', '', '']);
  
  // Signup form
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      countryCode: '+91',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });
  
  const onSubmit = (data: SignupFormValues) => {
    console.log('Signup data:', data);
    // In a real implementation, this would send the data to your backend
    // and then trigger the OTP verification step
    setVerifyStep(true);
  };
  
  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtpInputs = [...otpInputs];
      newOtpInputs[index] = value;
      setOtpInputs(newOtpInputs);
      
      // Auto-focus next input
      if (value.length === 1 && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };
  
  const handleVerifyOtp = () => {
    const otp = otpInputs.join('');
    console.log('Verifying OTP:', otp);
    // In a real implementation, this would verify the OTP with your backend
    // For demo purposes, we'll just log it and redirect
    alert('Account created successfully! Redirecting to login...');
    // Redirect to login page
    window.location.href = '/login';
  };
  
  if (verifyStep) {
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
                  <h2 className="text-3xl font-bold text-shop-purple">Verify Your Account</h2>
                  <p className="text-gray-600 mt-2">
                    We've sent a 6-digit OTP to <br />
                    <span className="font-medium">{form.getValues('email')}</span> and 
                    <span className="font-medium"> {form.getValues('countryCode')} {form.getValues('phone')}</span>
                  </p>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter 6-digit OTP
                  </label>
                  <div className="flex justify-between gap-2">
                    {otpInputs.map((value, index) => (
                      <Input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        className="w-10 h-12 text-center text-xl"
                        value={value}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Backspace' && !value && index > 0) {
                            const prevInput = document.getElementById(`otp-${index - 1}`);
                            if (prevInput) prevInput.focus();
                          }
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={handleVerifyOtp} 
                  className="w-full bg-shop-purple hover:bg-shop-purple/90"
                  disabled={otpInputs.some(val => val === '')}
                >
                  Verify & Create Account
                </Button>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Didn't receive the OTP?{' '}
                    <button type="button" className="text-shop-orange font-medium hover:underline">
                      Resend OTP
                    </button>
                  </p>
                </div>
                
                <div className="mt-4 text-center">
                  <button 
                    type="button" 
                    onClick={() => setVerifyStep(false)}
                    className="text-sm text-gray-600 hover:text-shop-purple"
                  >
                    ← Go back to signup
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
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
                <h2 className="text-3xl font-bold text-shop-purple">Create an Account</h2>
                <p className="text-gray-600 mt-2">Join MYCART for exclusive deals and offers</p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <Input className="pl-10" placeholder="John Doe" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
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
                  
                  <div className="grid grid-cols-4 gap-3">
                    <FormField
                      control={form.control}
                      name="countryCode"
                      render={({ field }) => (
                        <FormItem className="col-span-1">
                          <FormLabel>Code</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {countryCodes.map(country => (
                                <SelectItem key={country.value} value={country.value}>
                                  {country.value}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="col-span-3">
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
                  </div>
                  
                  <FormField
                    control={form.control}
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
                              placeholder="Create a strong password" 
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
                  
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <Input 
                              className="pl-10" 
                              type={showConfirmPassword ? 'text' : 'password'} 
                              placeholder="Confirm your password" 
                              {...field} 
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-1 top-1/2 transform -translate-y-1/2"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange} 
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal">
                            I agree to the{' '}
                            <Link to="/terms" className="text-shop-orange hover:underline">
                              Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link to="/privacy" className="text-shop-orange hover:underline">
                              Privacy Policy
                            </Link>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-shop-purple hover:bg-shop-purple/90">
                    Create Account
                  </Button>
                </form>
              </Form>
              
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or sign up with</span>
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
                  Already have an account?{' '}
                  <Link to="/login" className="text-shop-orange font-medium hover:underline">
                    Sign in
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

export default Signup;
