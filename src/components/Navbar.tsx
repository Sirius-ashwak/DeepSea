import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Anchor, 
  ShieldAlert, 
  Code, 
  FileText, 
  User as UserIcon, 
  BookOpen, 
  Menu, 
  X,
  LogOut
} from 'lucide-react';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <ShieldAlert className="w-5 h-5" /> },
    { path: '/editor', label: 'Code Editor', icon: <Code className="w-5 h-5" /> },
    { path: '/reports', label: 'Reports', icon: <FileText className="w-5 h-5" /> },
    { path: '/profile', label: 'Profile', icon: <UserIcon className="w-5 h-5" /> },
    { path: '/docs', label: 'Documentation', icon: <BookOpen className="w-5 h-5" /> }
  ];

  return (
    <nav className="bg-slate-900 border-b border-cyan-900/30 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Anchor className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold font-['Chakra_Petch'] bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                DeepSea Sentinel
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {user && (
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-cyan-300'
                  }`}
                  onClick={closeMenu}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
              <button
                onClick={onLogout}
                className="flex items-center space-x-1 ml-4 px-3 py-1 text-sm font-medium text-gray-300 hover:text-cyan-300 transition-colors duration-200"
              >
                <LogOut className="w-5 h-5" />
                <span>Log Out</span>
              </button>
              <div className="ml-4 flex items-center space-x-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-8 w-8 rounded-full border border-cyan-400/30"
                />
                <span className="text-sm font-medium text-gray-300">{user.name}</span>
              </div>
            </div>
          )}

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && user && (
        <div className="md:hidden bg-slate-800 border-t border-cyan-900/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-slate-700 text-cyan-400'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
                onClick={closeMenu}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            <button
              onClick={onLogout}
              className="flex w-full items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-slate-700 hover:text-white"
            >
              <LogOut className="w-5 h-5" />
              <span>Log Out</span>
            </button>
            <div className="flex items-center space-x-3 px-3 py-2">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-8 w-8 rounded-full border border-cyan-400/30"
              />
              <span className="text-sm font-medium text-gray-300">{user.name}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;