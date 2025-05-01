import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, AlertTriangle, Code, Zap, BarChart, Mail, LogIn, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../config/firebase';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoggingIn(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to sign in with Google');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsRegistering(true);

    try {
      if (!name.trim()) {
        throw new Error('Please enter your name');
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name.trim()
      });
      
      await login(email, password);
      navigate('/dashboard');
    } catch (error: any) {
      if (error.message === 'Please enter your name') {
        setError(error.message);
      } else if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use');
      } else if (error.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters');
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setIsRegistering(false);
    }
  };

  // Animation for the background
  React.useEffect(() => {
    const createHexagon = () => {
      const hexWrapper = document.createElement('div');
      hexWrapper.classList.add('absolute', 'opacity-10');
      
      const size = Math.random() * 60 + 20;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 40 + 20;
      
      hexWrapper.style.left = `${left}%`;
      hexWrapper.style.top = '-100px';
      hexWrapper.style.width = `${size}px`;
      hexWrapper.style.height = `${size}px`;
      hexWrapper.style.animation = `float ${animationDuration}s linear infinite`;
      
      const hexagon = document.createElement('div');
      hexagon.classList.add('w-full', 'h-full', 'rotate-45', 'border', 'border-cyan-500');
      
      hexWrapper.appendChild(hexagon);
      document.getElementById('hexBackground')?.appendChild(hexWrapper);
      
      setTimeout(() => {
        hexWrapper.remove();
      }, animationDuration * 1000);
    };
    
    const interval = setInterval(createHexagon, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 text-white">
      {/* Animated Background */}
      <div id="hexBackground" className="absolute inset-0 overflow-hidden z-0"></div>
      
      {/* Digital Rain Effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[linear-gradient(0deg,rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[length:100%_4px] z-0 animate-rain"></div>
      
      {/* Header */}
      <header className="relative z-10 bg-gradient-to-b from-slate-900 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold font-['Chakra_Petch'] bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              DeepSea Sentinel
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-['Chakra_Petch'] leading-tight">
                  Secure Your Smart Contracts with AI-Powered Analysis
                </h1>
                <p className="mt-6 text-lg text-gray-400 max-w-2xl">
                  DeepSea Sentinel provides advanced security analysis for your smart contracts, helping you identify and fix vulnerabilities before deployment.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 border border-cyan-900/30 rounded-lg p-6">
                  <Shield className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Advanced Security</h3>
                  <p className="text-gray-400">State-of-the-art vulnerability detection</p>
                </div>
                <div className="bg-slate-800/50 border border-cyan-900/30 rounded-lg p-6">
                  <Code className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Smart Analysis</h3>
                  <p className="text-gray-400">AI-powered code analysis</p>
                </div>
                <div className="bg-slate-800/50 border border-cyan-900/30 rounded-lg p-6">
                  <AlertTriangle className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Real-time Alerts</h3>
                  <p className="text-gray-400">Instant vulnerability notifications</p>
                </div>
                <div className="bg-slate-800/50 border border-cyan-900/30 rounded-lg p-6">
                  <BarChart className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Detailed Reports</h3>
                  <p className="text-gray-400">Comprehensive security insights</p>
                </div>
              </div>
            </div>

            {/* Right Column - Auth Form */}
            <div className="bg-slate-800/50 border border-cyan-900/30 rounded-lg p-8 shadow-lg shadow-slate-900/50">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">{showRegister ? 'Create Account' : 'Sign In'}</h2>
                <button
                  onClick={() => setShowRegister(!showRegister)}
                  className="text-sm text-cyan-400 hover:text-cyan-300"
                >
                  {showRegister ? 'Already have an account? Sign in' : 'Need an account? Register'}
                </button>
              </div>
              
              {error && (
                <div className="bg-red-500/20 border border-red-500/30 text-red-400 p-3 rounded-md mb-4">
                  {error}
                </div>
              )}

              {/* Google Sign In Button */}
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium rounded-md text-white bg-slate-700 hover:bg-slate-600 border border-slate-600 mb-4 transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign in with Google
              </button>
              
              <div className="relative mb-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-slate-800/50 text-gray-400">Or continue with email</span>
                </div>
              </div>
              
              <form onSubmit={showRegister ? handleRegister : handleLogin} className="space-y-4">
                {showRegister && (
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded-md pl-10 p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        required
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 rounded-md pl-10 p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 rounded-md pl-10 p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      required
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoggingIn || isRegistering}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                >
                  {isLoggingIn || isRegistering ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {isLoggingIn ? 'Logging in...' : 'Creating account...'}
                    </>
                  ) : (
                    <>
                      <LogIn className="h-4 w-4" />
                      {showRegister ? 'Register' : 'Log In'}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.1; }
          90% { opacity: 0.1; }
          100% { transform: translateY(-2000px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes rain {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        
        .animate-rain {
          animation: rain 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;