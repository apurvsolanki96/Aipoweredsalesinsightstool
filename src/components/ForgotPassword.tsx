import { useState } from 'react';
import { ArrowLeft, Mail, CheckCircle, TrendingUp } from 'lucide-react';

interface ForgotPasswordProps {
  onBack: () => void;
}

export function ForgotPassword({ onBack }: ForgotPasswordProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
              <TrendingUp className="w-8 h-8 text-indigo-600" />
            </div>
          </div>

          {/* Success Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>

            <h2 className="text-slate-900 mb-3">Check Your Email</h2>
            <p className="text-slate-600 mb-6">
              We&apos;ve sent password reset instructions to:
            </p>
            <p className="text-indigo-600 mb-8">{email}</p>

            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-6">
              <p className="text-sm text-slate-700">
                Didn&apos;t receive the email? Check your spam folder or try again in a few minutes.
              </p>
            </div>

            <button
              onClick={onBack}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30"
            >
              Back to Sign In
            </button>
          </div>

          {/* Footer */}
          <div className="text-center mt-6">
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-white text-sm underline hover:no-underline"
            >
              Try different email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
            <TrendingUp className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-white mb-2">Reset Password</h1>
          <p className="text-indigo-100">We&apos;ll send you instructions to reset your password</p>
        </div>

        {/* Reset Password Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 -ml-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Sign In</span>
          </button>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-slate-700 mb-2">
                Company Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="agent@company.com"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <p className="text-sm text-slate-700">
                A password reset link will be sent to this email address if it exists in our system.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30"
            >
              Send Reset Link
            </button>
          </form>
        </div>

        {/* Help */}
        <div className="text-center text-white text-sm">
          <p className="mb-2">Need help?</p>
          <button className="text-white underline hover:no-underline">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
