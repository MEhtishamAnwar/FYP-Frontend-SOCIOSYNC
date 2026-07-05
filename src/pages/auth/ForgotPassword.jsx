import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Zap, Mail, Lock, ArrowLeft, ArrowRight, Eye, EyeOff, Loader2 } from 'lucide-react';

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({});
  const [apiError, setApiError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setApiError(null);
    setSuccessMessage(null);
  }, [form]);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const passwordsMismatch = form.confirmPassword && form.password !== form.confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true, confirmPassword: true });

    if (!form.email || !form.password || !form.confirmPassword || passwordsMismatch) {
      return;
    }

    setIsSubmitting(true);
    setApiError(null);

    try {
      const response = await resetPassword(form.email, form.password, form.confirmPassword);
      if (response.success) {
        setSuccessMessage(response.message || 'Password reset successfully. You can now sign in.');
        setForm({ email: '', password: '', confirmPassword: '' });
      } else {
        setApiError(response.message || 'Unable to reset password. Please try again.');
      }
    } catch (error) {
      setApiError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden bg-surface-container flex-col justify-between p-12">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(var(--color-on-surface) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-dim flex items-center justify-center shadow-ambient">
            <Zap className="w-5 h-5 text-on-primary" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-on-surface">SocioSync</span>
        </div>

        <div className="relative z-10 flex flex-col gap-6 max-w-lg">
          <h2 className="text-4xl xl:text-5xl font-display font-bold text-on-surface tracking-tight leading-[1.15]">
            Lost access?
            <br />
            <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">Reset it in seconds.</span>
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed max-w-md">
            Enter your email and a new password. This mock reset updates your demo account locally so you can continue using SocioSync.
          </p>

          <div className="flex gap-4 mt-4">
            {[
              { icon: Mail, label: 'Email support', value: 'support@sociosync.app' },
              { icon: Lock, label: 'Secure mock flow', value: 'Local only' },
              { icon: Zap, label: 'Fast recovery', value: 'Instant reset' },
            ].map((stat) => (
              <div key={stat.label} className="glass p-4 rounded-2xl border-ghost flex flex-col gap-2 flex-1">
                <stat.icon className="w-4 h-4 text-primary" />
                <span className="text-lg font-display font-bold text-on-surface">{stat.value}</span>
                <span className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
          © 2026 SocioSync Inc. All rights reserved.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-16">
        <div className="w-full max-w-md flex flex-col gap-8">
          <div className="lg:hidden flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dim flex items-center justify-center shadow-ambient">
              <Zap className="w-5 h-5 text-on-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-on-surface">SocioSync</span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-display font-bold text-on-surface tracking-tight">Reset your password</h1>
            <p className="text-on-surface-variant text-sm">Enter the email address for your account and choose a new password.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest px-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={`w-full bg-surface-container-low border rounded-xl pl-11 pr-4 py-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none transition-all ${
                    touched.email && !form.email ? 'border-error focus:border-error' : 'border-ghost focus:border-primary/50'
                  }`}
                />
              </div>
              {touched.email && !form.email && (
                <span className="text-[10px] text-error font-medium px-1">Email is required</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest px-1">New Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Enter a new password"
                  autoComplete="new-password"
                  className={`w-full bg-surface-container-low border rounded-xl pl-11 pr-12 py-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none transition-all ${
                    touched.password && !form.password ? 'border-error focus:border-error' : 'border-ghost focus:border-primary/50'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {touched.password && !form.password && (
                <span className="text-[10px] text-error font-medium px-1">New password is required</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest px-1">Confirm Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                  className={`w-full bg-surface-container-low border rounded-xl pl-11 pr-12 py-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none transition-all ${
                    touched.confirmPassword && !form.confirmPassword ? 'border-error focus:border-error' : 'border-ghost focus:border-primary/50'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {passwordsMismatch && (
                <span className="text-[10px] text-error font-medium px-1">Passwords do not match</span>
              )}
            </div>

            {apiError && (
              <div className="p-3 rounded-xl bg-error/10 border border-error/20 text-error text-xs font-medium text-center">
                {apiError}
              </div>
            )}

            {successMessage && (
              <div className="p-3 rounded-xl bg-success/10 border border-success/20 text-success text-xs font-medium text-center">
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full h-12 rounded-xl font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 mt-2 ${
                isSubmitting
                  ? 'bg-surface-container-highest text-on-surface-variant cursor-not-allowed shadow-none'
                  : 'bg-gradient-to-r from-primary to-primary-dim text-on-primary shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Resetting...
                </>
              ) : (
                <>
                  Reset Password
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-ghost" />
            <span className="text-[10px] text-on-surface-variant/40 uppercase tracking-widest font-bold">or</span>
            <div className="flex-1 h-px bg-ghost" />
          </div>

          <p className="text-center text-sm text-on-surface-variant">
            <Link to="/login" className="text-primary font-semibold hover:text-primary-light transition-colors">
              Back to sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
