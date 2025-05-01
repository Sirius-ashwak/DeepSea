import React, { useState } from 'react';
import { User, Edit, Lock, Bell, Shield, Key, Zap, ExternalLink } from 'lucide-react';
import { User as UserType } from '../types';

interface ProfileProps {
  user: UserType | null;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('account');

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center py-12">
          <User className="h-16 w-16 mx-auto text-gray-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-300">Not logged in</h2>
          <p className="text-gray-400 mt-2">Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  const userActivityData = [
    { date: '2023-10-18', type: 'Contract Scan', details: 'Scanned TokenExchange contract' },
    { date: '2023-10-16', type: 'Vulnerability Fix', details: 'Fixed critical reentrancy vulnerability' },
    { date: '2023-10-15', type: 'Contract Upload', details: 'Uploaded MultiSigWallet contract' },
    { date: '2023-10-13', type: 'API Key Generated', details: 'Generated new API key for integrations' },
    { date: '2023-10-10', type: 'Subscription Renewal', details: 'Renewed Pro subscription for 12 months' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div className="bg-slate-800 border border-cyan-900/30 rounded-lg shadow-lg shadow-slate-900/50 p-6">
            <h3 className="text-xl font-bold text-white mb-6 font-['Chakra_Petch']">Account Information</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue={user.name}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Role</label>
                  <select
                    defaultValue={user.role}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="developer">Developer</option>
                    <option value="auditor">Auditor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                  <input
                    type="text"
                    defaultValue="Blockchain Solutions Inc."
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Bio</label>
                <textarea
                  defaultValue="Blockchain developer with 5 years of experience building secure DeFi applications and NFT marketplaces."
                  rows={4}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </div>
              
              <div>
                <button className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'security':
        return (
          <div className="space-y-6">
            <div className="bg-slate-800 border border-cyan-900/30 rounded-lg shadow-lg shadow-slate-900/50 p-6">
              <h3 className="text-xl font-bold text-white mb-6 font-['Chakra_Petch'] flex items-center">
                <Lock className="mr-2 h-5 w-5 text-cyan-400" />
                Password Security
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Current Password</label>
                  <input
                    type="password"
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                
                <div>
                  <button className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 border border-cyan-900/30 rounded-lg shadow-lg shadow-slate-900/50 p-6">
              <h3 className="text-xl font-bold text-white mb-6 font-['Chakra_Petch'] flex items-center">
                <Shield className="mr-2 h-5 w-5 text-cyan-400" />
                Two-Factor Authentication
              </h3>
              
              <div className="flex items-center justify-between p-4 border border-cyan-900/30 rounded-lg bg-slate-700/50 mb-6">
                <div>
                  <h4 className="text-white font-medium">2FA Status</h4>
                  <p className="text-gray-400 text-sm">Protect your account with two-factor authentication</p>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  Enabled
                </div>
              </div>
              
              <button className="text-cyan-400 border border-cyan-500/30 px-5 py-2 rounded-md hover:bg-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200">
                Reconfigure 2FA
              </button>
            </div>
            
            <div className="bg-slate-800 border border-cyan-900/30 rounded-lg shadow-lg shadow-slate-900/50 p-6">
              <h3 className="text-xl font-bold text-white mb-6 font-['Chakra_Petch'] flex items-center">
                <Key className="mr-2 h-5 w-5 text-cyan-400" />
                API Keys
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 border border-cyan-900/30 rounded-lg bg-slate-700/50">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium text-white">Production API Key</div>
                    <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Active</div>
                  </div>
                  <div className="font-mono text-sm text-gray-400 bg-slate-800 p-2 rounded mb-2">
                    sk_live_•••••••••••••••••••••••••••••
                  </div>
                  <div className="text-xs text-gray-500">Created on Oct 10, 2023 • Last used 2 hours ago</div>
                </div>
                
                <div className="p-4 border border-cyan-900/30 rounded-lg bg-slate-700/50">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium text-white">Development API Key</div>
                    <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Active</div>
                  </div>
                  <div className="font-mono text-sm text-gray-400 bg-slate-800 p-2 rounded mb-2">
                    sk_test_•••••••••••••••••••••••••••••
                  </div>
                  <div className="text-xs text-gray-500">Created on Sep 5, 2023 • Last used yesterday</div>
                </div>
              </div>
              
              <button className="text-cyan-400 border border-cyan-500/30 px-5 py-2 rounded-md hover:bg-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200">
                Generate New API Key
              </button>
            </div>
          </div>
        );
      
      case 'notifications':
        return (
          <div className="bg-slate-800 border border-cyan-900/30 rounded-lg shadow-lg shadow-slate-900/50 p-6">
            <h3 className="text-xl font-bold text-white mb-6 font-['Chakra_Petch'] flex items-center">
              <Bell className="mr-2 h-5 w-5 text-cyan-400" />
              Notification Preferences
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-white mb-4">Email Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-slate-700 rounded-lg">
                    <div>
                      <div className="font-medium text-white">Security Alerts</div>
                      <div className="text-sm text-gray-400">Critical and high severity vulnerabilities</div>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="relative w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-slate-700 rounded-lg">
                    <div>
                      <div className="font-medium text-white">Scan Completions</div>
                      <div className="text-sm text-gray-400">When a contract scan is completed</div>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="relative w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-slate-700 rounded-lg">
                    <div>
                      <div className="font-medium text-white">System Updates</div>
                      <div className="text-sm text-gray-400">Platform updates and new features</div>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="relative w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-slate-700 rounded-lg">
                    <div>
                      <div className="font-medium text-white">Marketing</div>
                      <div className="text-sm text-gray-400">News and promotional offers</div>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="relative w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-white mb-4">Push Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-slate-700 rounded-lg">
                    <div>
                      <div className="font-medium text-white">Real-time Alerts</div>
                      <div className="text-sm text-gray-400">Instant notifications for critical issues</div>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="relative w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-slate-700 rounded-lg">
                    <div>
                      <div className="font-medium text-white">Activity Summary</div>
                      <div className="text-sm text-gray-400">Daily summary of platform activity</div>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="relative w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                </div>
              </div>
              
              <div>
                <button className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200">
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'activity':
        return (
          <div className="bg-slate-800 border border-cyan-900/30 rounded-lg shadow-lg shadow-slate-900/50 p-6">
            <h3 className="text-xl font-bold text-white mb-6 font-['Chakra_Petch'] flex items-center">
              <Zap className="mr-2 h-5 w-5 text-cyan-400" />
              Recent Activity
            </h3>
            
            <div className="relative pl-5 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-700">
              {userActivityData.map((activity, index) => (
                <div key={index} className="mb-6 relative before:absolute before:left-[-5px] before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-cyan-500">
                  <div className="pl-4">
                    <time className="text-xs text-gray-400">{activity.date}</time>
                    <div className="font-medium text-white mt-1">{activity.type}</div>
                    <p className="text-sm text-gray-300 mt-1">{activity.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-4">
              <a href="#" className="text-cyan-400 hover:text-cyan-300 flex items-center justify-center space-x-1">
                <span>View Full Activity Log</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-['Chakra_Petch'] text-cyan-100 mb-2">
          User Profile
        </h1>
        <p className="text-gray-400">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Profile Overview */}
        <div className="lg:col-span-3">
          <div className="bg-slate-800 border border-cyan-900/30 rounded-lg shadow-lg shadow-slate-900/50 p-6 sticky top-24">
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full border-2 border-cyan-500"
                />
                <button className="absolute bottom-0 right-0 bg-slate-700 p-1 rounded-full border border-cyan-500 text-cyan-400 hover:bg-slate-600">
                  <Edit className="h-4 w-4" />
                </button>
              </div>
              <h2 className="text-xl font-bold text-white mt-4">{user.name}</h2>
              <p className="text-gray-400">{user.email}</p>
              <div className="mt-2 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium capitalize">
                {user.role}
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setActiveTab('account')}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm ${
                      activeTab === 'account'
                        ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-500'
                        : 'text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    <User className="h-5 w-5" />
                    <span>Account</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm ${
                      activeTab === 'security'
                        ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-500'
                        : 'text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    <Shield className="h-5 w-5" />
                    <span>Security</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('notifications')}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm ${
                      activeTab === 'notifications'
                        ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-500'
                        : 'text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    <Bell className="h-5 w-5" />
                    <span>Notifications</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('activity')}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm ${
                      activeTab === 'activity'
                        ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-500'
                        : 'text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    <Zap className="h-5 w-5" />
                    <span>Activity</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;