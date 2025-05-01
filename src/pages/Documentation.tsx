import React, { useState } from 'react';
import { BookOpen, Code, Server, Shield, Key, Search, ChevronRight, ExternalLink, Database, Bot } from 'lucide-react';

const Documentation: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    { id: 'getting-started', label: 'Getting Started', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'api-reference', label: 'API Reference', icon: <Server className="w-5 h-5" /> },
    { id: 'code-editor', label: 'Code Editor', icon: <Code className="w-5 h-5" /> },
    { id: 'security-scanning', label: 'Security Scanning', icon: <Shield className="w-5 h-5" /> },
    { id: 'authentication', label: 'Authentication', icon: <Key className="w-5 h-5" /> },
    { id: 'database', label: 'Database Integration', icon: <Database className="w-5 h-5" /> },
    { id: 'ai-features', label: 'AI Features', icon: <Bot className="w-5 h-5" /> }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div>
            <h2 className="text-2xl font-bold font-['Chakra_Petch'] text-white mb-6">Getting Started with DeepSea Sentinel</h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300">
                DeepSea Sentinel is an AI-powered smart contract security platform that helps developers identify and fix vulnerabilities 
                in their blockchain applications. This guide will help you get started with the platform and make the most of its features.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Quick Start Guide</h3>
              
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-400 mr-4 mt-0.5">1</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Create an Account</h4>
                    <p className="text-gray-300">
                      Sign up for a DeepSea Sentinel account using your email address. Verify your email to activate your account.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-400 mr-4 mt-0.5">2</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Upload a Smart Contract</h4>
                    <p className="text-gray-300">
                      Navigate to the Code Editor section and either upload your Solidity smart contract or write one directly in the editor.
                    </p>
                    <div className="mt-3 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                      <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
{`// Sample smart contract upload
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint private storedData;
    
    function set(uint x) public {
        storedData = x;
    }
    
    function get() public view returns (uint) {
        return storedData;
    }
}`}
                      </pre>
                    </div>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-400 mr-4 mt-0.5">3</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Scan for Vulnerabilities</h4>
                    <p className="text-gray-300">
                      Click the "Scan Contract" button to start the security analysis. Our AI-powered engine will analyze your code 
                      for potential vulnerabilities and security issues.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-400 mr-4 mt-0.5">4</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Review Results</h4>
                    <p className="text-gray-300">
                      Once the scan is complete, review the detected vulnerabilities. Each issue will include:
                    </p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-gray-300">
                      <li>Severity level (Critical, High, Medium, Low, Info)</li>
                      <li>Description of the vulnerability</li>
                      <li>Affected code</li>
                      <li>Recommended fixes</li>
                    </ul>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-400 mr-4 mt-0.5">5</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Fix Vulnerabilities</h4>
                    <p className="text-gray-300">
                      Implement the recommended fixes in your code. You can make changes directly in the Code Editor and rescan to verify that the issues have been resolved.
                    </p>
                  </div>
                </li>
              </ol>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">System Requirements</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                  <h4 className="text-lg font-bold text-white mb-2">Supported Browsers</h4>
                  <ul className="space-y-1 list-disc list-inside text-gray-300">
                    <li>Chrome (latest 2 versions)</li>
                    <li>Firefox (latest 2 versions)</li>
                    <li>Safari (latest 2 versions)</li>
                    <li>Edge (latest 2 versions)</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                  <h4 className="text-lg font-bold text-white mb-2">Supported Solidity Versions</h4>
                  <ul className="space-y-1 list-disc list-inside text-gray-300">
                    <li>Solidity 0.8.x (recommended)</li>
                    <li>Solidity 0.7.x</li>
                    <li>Solidity 0.6.x</li>
                    <li>Solidity 0.5.x (limited support)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-400" />
                  Pro Tip
                </h4>
                <p className="text-gray-300">
                  For the best results, scan your contracts after each significant change rather than waiting until the end of development. 
                  This helps identify issues early when they're easier to fix.
                </p>
              </div>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Next Steps</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="block p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-cyan-500/30 transition-all">
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-cyan-400" />
                    Advanced Code Editor Features
                  </h4>
                  <p className="text-gray-300">
                    Learn about syntax highlighting, error detection, and auto-completion features.
                  </p>
                </a>
                
                <a href="#" className="block p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-cyan-500/30 transition-all">
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                    <Server className="w-5 h-5 mr-2 text-cyan-400" />
                    API Integration
                  </h4>
                  <p className="text-gray-300">
                    Integrate DeepSea Sentinel security scanning into your CI/CD pipeline.
                  </p>
                </a>
              </div>
            </div>
          </div>
        );
      
      case 'code-editor':
        return (
          <div>
            <h2 className="text-2xl font-bold font-['Chakra_Petch'] text-white mb-6">Code Editor Guide</h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300">
                The DeepSea Sentinel Code Editor is a powerful tool designed specifically for smart contract development. 
                It provides syntax highlighting, error detection, and integrated security scanning features.
              </p>
              
              <div className="mt-6 mb-8">
                <img 
                  src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Code Editor Interface" 
                  className="rounded-lg border border-slate-600 w-full h-auto"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Editor Features</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                  <h4 className="text-lg font-bold text-white mb-2">Syntax Highlighting</h4>
                  <p className="text-gray-300">
                    Smart contract code is automatically highlighted with color-coding for different 
                    elements (functions, variables, keywords, etc.) to improve readability.
                  </p>
                </div>
                
                <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                  <h4 className="text-lg font-bold text-white mb-2">Error Detection</h4>
                  <p className="text-gray-300">
                    Real-time syntax error detection helps you identify issues as you write your code, 
                    with inline markers and helpful error messages.
                  </p>
                </div>
                
                <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                  <h4 className="text-lg font-bold text-white mb-2">Code Formatting</h4>
                  <p className="text-gray-300">
                    Automatically format your code according to best practices with the built-in 
                    formatter, ensuring consistent and readable code.
                  </p>
                </div>
                
                <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                  <h4 className="text-lg font-bold text-white mb-2">Security Annotations</h4>
                  <p className="text-gray-300">
                    After scanning, vulnerable code sections are highlighted directly in the editor 
                    with severity-based color coding.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Keyboard Shortcuts</h3>
              
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-700">
                      <th className="px-4 py-2 text-left text-white border border-slate-600">Action</th>
                      <th className="px-4 py-2 text-left text-white border border-slate-600">Windows/Linux</th>
                      <th className="px-4 py-2 text-left text-white border border-slate-600">macOS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">Save</td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Ctrl</kbd> + <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">S</kbd>
                      </td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">⌘</kbd> + <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">S</kbd>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">Find</td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Ctrl</kbd> + <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">F</kbd>
                      </td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">⌘</kbd> + <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">F</kbd>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">Format Code</td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Shift</kbd> + <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Alt</kbd> + <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">F</kbd>
                      </td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">⇧</kbd> + <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">⌥</kbd> + <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">F</kbd>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">Undo</td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Ctrl</kbd> + <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Z</kbd>
                      </td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">⌘</kbd> + <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Z</kbd>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">Redo</td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Ctrl</kbd> + <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Y</kbd>
                      </td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">⌘</kbd> + <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">⇧</kbd> + <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Z</kbd>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">Start Scan</td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">F5</kbd>
                      </td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">F5</kbd>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Tips for Effective Use</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-400 mr-4 mt-0.5">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-300">
                      <strong className="text-white">Use code snippets:</strong> Access common Solidity patterns with the snippet library. Type <code className="text-xs bg-slate-700 px-1 py-0.5 rounded">!contract</code> to generate a basic contract structure.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-400 mr-4 mt-0.5">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-300">
                      <strong className="text-white">Save frequently:</strong> While the editor has auto-save, it's good practice to manually save after significant changes.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-400 mr-4 mt-0.5">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-300">
                      <strong className="text-white">Use version pragma:</strong> Always specify your Solidity version with a pragma statement at the top of your file.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-400 mr-4 mt-0.5">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-300">
                      <strong className="text-white">Enable auto-formatting:</strong> Configure auto-format on save in your settings to maintain consistent code style.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg mt-8">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-amber-400" />
                  Important Note
                </h4>
                <p className="text-gray-300">
                  The Code Editor is optimized for Solidity development. While it may work with other languages, 
                  security scanning features are specifically designed for Solidity smart contracts.
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'security-scanning':
        return (
          <div>
            <h2 className="text-2xl font-bold font-['Chakra_Petch'] text-white mb-6">Security Scanning Documentation</h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300">
                DeepSea Sentinel's security scanning engine identifies potential vulnerabilities and security issues in your smart contracts. 
                This guide explains how the scanning process works and how to interpret the results.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">How It Works</h3>
              
              <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 mb-8">
                <ol className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-400 mr-4">1</div>
                    <div className="text-gray-300">
                      <strong className="text-white">Static Analysis:</strong> The scanner examines your code without executing it to identify patterns that match known vulnerability signatures.
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-400 mr-4">2</div>
                    <div className="text-gray-300">
                      <strong className="text-white">Pattern Matching:</strong> Your code is compared against a database of vulnerable patterns and known exploit vectors.
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-400 mr-4">3</div>
                    <div className="text-gray-300">
                      <strong className="text-white">Control Flow Analysis:</strong> The scanner maps the program's execution paths to identify potential logic flaws and edge cases.
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-400 mr-4">4</div>
                    <div className="text-gray-300">
                      <strong className="text-white">AI-Powered Analysis:</strong> Our advanced AI models, trained on thousands of contracts, identify complex vulnerability patterns and suggest fixes.
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-400 mr-4">5</div>
                    <div className="text-gray-300">
                      <strong className="text-white">Report Generation:</strong> Results are compiled into a comprehensive report with severity ratings and remediation suggestions.
                    </div>
                  </li>
                </ol>
              </div>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Vulnerability Severity Levels</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Critical
                  </h4>
                  <p className="text-gray-300">
                    Vulnerabilities that can lead to immediate loss of funds, contract takeover, or severe security breaches. 
                    These issues require immediate attention.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Examples: Reentrancy attacks, integer overflow/underflow (pre-Solidity 0.8.0), unauthorized access to critical functions
                  </p>
                </div>
                
                <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    High
                  </h4>
                  <p className="text-gray-300">
                    Vulnerabilities that could potentially be exploited to compromise the contract, but may require specific conditions or sophisticated attacks.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Examples: Unchecked return values, flash loan vulnerabilities, front-running susceptibility
                  </p>
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                    <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    Medium
                  </h4>
                  <p className="text-gray-300">
                    Issues that could lead to unintended behavior but might not necessarily result in direct fund loss. 
                    These should be addressed in a timely manner.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Examples: Logic flaws, timestamp dependence, improper access controls for non-critical functions
                  </p>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Low
                  </h4>
                  <p className="text-gray-300">
                    Minor issues or best practice violations that are unlikely to be exploited but should be addressed to improve code quality.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Examples: Missing events for state changes, inefficient gas usage, outdated compiler versions
                  </p>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                    <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Info
                  </h4>
                  <p className="text-gray-300">
                    Informational findings that don't pose security risks but may help improve code quality, readability, or efficiency.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Examples: Style recommendations, documentation suggestions, minor optimization opportunities
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Common Vulnerabilities</h3>
              
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-700">
                      <th className="px-4 py-2 text-left text-white border border-slate-600">Vulnerability</th>
                      <th className="px-4 py-2 text-left text-white border border-slate-600">Description</th>
                      <th className="px-4 py-2 text-left text-white border border-slate-600">Prevention</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600 text-white">Reentrancy</td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        Occurs when external contract calls allow attackers to re-enter the original function before the first execution completes.
                      </td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        Use the checks-effects-interactions pattern and consider the ReentrancyGuard modifier.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600 text-white">Integer Overflow/Underflow</td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        Arithmetic operations reaching the max or min value of the data type, causing unexpected values.
                      </td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        Use Solidity 0.8.0+ (built-in checks) or the SafeMath library for earlier versions.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600 text-white">Access Control Issues</td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        Improper restrictions on who can execute certain functions or access data.
                      </td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        Use modifiers (e.g., onlyOwner) and follow the principle of least privilege.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600 text-white">Front-Running</td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        Attackers observe pending transactions and place their own with higher gas fees to execute first.
                      </td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        Implement commit-reveal schemes or use techniques like minimum/maximum values.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600 text-white">Gas Limitations</td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        Functions that consume too much gas or hit block gas limits, causing failures.
                      </td>
                      <td className="px-4 py-2 border border-slate-600 text-gray-300">
                        Optimize gas usage, avoid unbounded loops, and consider pagination for large operations.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Interpreting Scan Results</h3>
              
              <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 space-y-6 mb-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Vulnerability Details</h4>
                  <p className="text-gray-300">
                    Each detected vulnerability includes:
                  </p>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-gray-300">
                    <li>Name and description of the vulnerability</li>
                    <li>Severity rating (Critical, High, Medium, Low, Info)</li>
                    <li>Affected line numbers and code snippets</li>
                    <li>Explanation of why the code is vulnerable</li>
                    <li>Recommended fixes with sample code</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Risk Score</h4>
                  <p className="text-gray-300">
                    The overall risk score is calculated based on the number and severity of detected vulnerabilities. 
                    The score ranges from 0-100, with lower scores indicating higher risk.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Fixing Vulnerabilities</h4>
                  <p className="text-gray-300">
                    For each vulnerability, review the suggested fix and implement it in your code. 
                    After making changes, re-scan your contract to verify that the issue has been resolved.
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg mt-8">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-cyan-400" />
                  Best Practice
                </h4>
                <p className="text-gray-300">
                  While our scanning engine is comprehensive, no automated tool can catch 100% of all possible vulnerabilities. 
                  We recommend using DeepSea Sentinel as part of a broader security strategy that includes manual code reviews, 
                  formal verification, and professional audits, especially for high-value contracts.
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 mx-auto text-gray-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Documentation Section</h3>
            <p className="text-gray-400">
              Select a topic from the sidebar to view documentation.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold font-['Chakra_Petch'] text-cyan-100 mb-8">
        Documentation
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-slate-800 border border-cyan-900/30 rounded-lg shadow-lg shadow-slate-900/50 p-4 sticky top-24">
            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-slate-700 border border-slate-600 text-white w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Search docs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <nav>
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm ${
                        activeSection === section.id
                          ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-500'
                          : 'text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      {section.icon}
                      <span>{section.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
              <h4 className="text-sm font-semibold text-white mb-2">Need Additional Help?</h4>
              <p className="text-xs text-gray-400 mb-3">
                Contact our support team or visit our community forums for assistance.
              </p>
              <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center">
                <span>Visit Support Center</span>
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-3/4">
          <div className="bg-slate-800 border border-cyan-900/30 rounded-lg shadow-lg shadow-slate-900/50 p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;