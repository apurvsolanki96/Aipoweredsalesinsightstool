import { useState } from 'react';
import { Mail, Phone, Eye, EyeOff, ArrowRight, CheckCircle2 } from 'lucide-react';
import logo from 'figma:asset/4b42ebdf777b62bc9b6f3f2517077f7d9ec1c9f5.png';

interface SignInProps {
  onSignIn: () => void;
  onForgotPassword: () => void;
  onSignUp: () => void;
}

export function SignIn({ onSignIn, onForgotPassword, onSignUp }: SignInProps) {
  const [signInMethod, setSignInMethod] = useState<'email' | 'phone'>('email');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn();
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Left Column - Branding / Hero */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#001529] overflow-hidden flex-col justify-between p-12">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10">
          <img src={logo} alt="PropIntelix Logo" className="h-20 w-auto mb-8" />
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
            The Premier B2B <br/>Commercial Real Estate <br/>Intelligence Platform
          </h1>
          <p className="text-indigo-200 text-lg max-w-md">
            Empowering agents and businesses with AI-driven insights, verified listings, and seamless lead management.
          </p>
        </div>

        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-4 text-white/80">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">AI-Powered Matches</h3>
              <p className="text-sm text-indigo-200">Get instant property recommendations.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Verified B2B Listings</h3>
              <p className="text-sm text-indigo-200">100% verified commercial inventory.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
             <div className="lg:hidden flex justify-center mb-6">
                <img src={logo} alt="PropIntelix Logo" className="h-16 w-auto" />
             </div>
            <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
            <p className="text-slate-500 mt-2">Sign in to access your dashboard and leads.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            {/* Sign In Method Toggle */}
            <div className="flex gap-2 mb-8 bg-slate-50 p-1 rounded-xl border border-slate-100">
              <button
                onClick={() => setSignInMethod('email')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all font-medium ${
                  signInMethod === 'email'
                    ? 'bg-white text-primary shadow-sm border border-slate-200'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </button>
              <button
                onClick={() => setSignInMethod('phone')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all font-medium ${
                  signInMethod === 'phone'
                    ? 'bg-white text-primary shadow-sm border border-slate-200'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">Phone</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {signInMethod === 'email' ? (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select className="px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98765 43210"
                      className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                  </div>
                </div>
              )}

              {signInMethod === 'email' && (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-sm font-medium text-slate-700">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={onForgotPassword}
                      className="text-sm text-primary hover:text-indigo-700 font-medium"
                    >
                      Forgot?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 pr-12 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-white py-3.5 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 group font-semibold text-lg"
              >
                <span>Sign In</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-slate-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button
                  onClick={onSignIn}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-sm font-medium text-slate-700">Google</span>
                </button>
                <button
                   onClick={onSignIn}
                   className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                >
                   <span className="text-sm font-medium text-slate-700">SSO</span>
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-slate-600">
            Don't have an account?{' '}
            <button 
              onClick={onSignUp}
              className="font-semibold text-primary hover:text-indigo-700 transition-colors"
            >
              Request Access
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
