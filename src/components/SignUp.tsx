import { useState } from 'react';
import { Mail, Phone, Eye, EyeOff, TrendingUp, ArrowRight, User, Building2, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface SignUpProps {
  onSignUp: () => void;
  onBack: () => void;
}

export function SignUp({ onSignUp, onBack }: SignUpProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    captcha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Simulate sign up
    onSignUp();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Back Button */}
        <button onClick={onBack} className="text-white mb-6 flex items-center gap-2 hover:text-indigo-100 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Sign In</span>
        </button>

        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
            <TrendingUp className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-white mb-2">Create Account</h1>
          <p className="text-indigo-100">Join InsightAI and boost your sales productivity</p>
        </div>

        {/* Sign Up Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 mb-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-900 border-b pb-2">Personal Details</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      placeholder="John" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required 
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      placeholder="Doe" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required 
                      className="mt-1.5"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email ID</Label>
                  <div className="relative mt-1.5">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative mt-1.5">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Company & Security */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-900 border-b pb-2">Company & Security</h3>

                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <div className="relative mt-1.5">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                      id="companyName" 
                      name="companyName" 
                      placeholder="Real Estate Corp" 
                      value={formData.companyName}
                      onChange={handleChange}
                      required 
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-1.5">
                    <Input 
                      id="password" 
                      name="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Create password" 
                      value={formData.password}
                      onChange={handleChange}
                      required 
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative mt-1.5">
                    <Input 
                      id="confirmPassword" 
                      name="confirmPassword" 
                      type={showConfirmPassword ? "text" : "password"} 
                      placeholder="Confirm password" 
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required 
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Captcha Mock */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-slate-700">Security Check</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-slate-200 px-4 py-2 rounded-lg font-mono text-lg tracking-widest text-slate-600 select-none strikethrough">
                    X7K9M2
                  </div>
                  <Input 
                    placeholder="Enter code" 
                    className="w-32 bg-white"
                    required
                  />
                </div>
              </div>
              <div className="text-xs text-slate-400 max-w-[150px]">
                Enter the characters shown to prove you are human.
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 text-lg rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 group"
            >
              <span>Create Account</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>

        {/* Terms */}
        <p className="text-center text-indigo-100 text-sm opacity-80">
          By creating an account, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
