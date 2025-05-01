import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { Play, Shield, ArrowRight, Ban, Clock } from 'lucide-react';
import { mockVulnerabilities, solidity101Code } from '../utils/mockData';
import { Vulnerability } from '../types';

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>(solidity101Code);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanComplete, setScanComplete] = useState<boolean>(false);
  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([]);
  const [lineDecorations, setLineDecorations] = useState<any[]>([]);
  const [selectedVulnerability, setSelectedVulnerability] = useState<Vulnerability | null>(null);

  const handleEditorDidMount = (editor: any) => {
    // Custom editor configuration can be added here
  };

  const handleCodeChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
      // Reset scan results when code changes
      if (scanComplete) {
        setScanComplete(false);
        setVulnerabilities([]);
        setLineDecorations([]);
        setSelectedVulnerability(null);
      }
    }
  };

  const performScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setVulnerabilities([]);
    setLineDecorations([]);
    setSelectedVulnerability(null);

    // Simulate scanning delay
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      
      // Simulate finding vulnerabilities
      const foundVulnerabilities = mockVulnerabilities.map(vuln => ({
        ...vuln,
        // Randomly assign line numbers to simulate finding issues in the current code
        lineNumber: Math.floor(Math.random() * code.split('\n').length) + 1
      }));
      
      setVulnerabilities(foundVulnerabilities);
      
      // Create editor decorations for vulnerability lines
      const decorations = foundVulnerabilities.map(vuln => {
        const severityColor = getSeverityColor(vuln.severity);
        return {
          range: {
            startLineNumber: vuln.lineNumber,
            startColumn: 1,
            endLineNumber: vuln.lineNumber,
            endColumn: 1
          },
          options: {
            isWholeLine: true,
            className: `vulnerability-${vuln.severity}`,
            glyphMarginClassName: `glyph-margin-${vuln.severity}`,
            overviewRuler: {
              color: severityColor,
              position: 4
            },
            zIndex: 10,
            backgroundColor: `${severityColor}33`,
          }
        };
      });
      
      setLineDecorations(decorations);
    }, 3000);
  };

  const getSeverityColor = (severity: string): string => {
    switch (severity) {
      case 'critical': return '#FF003C';
      case 'high': return '#FF6B00';
      case 'medium': return '#FFC700';
      case 'low': return '#48BB78';
      case 'info': return '#4299E1';
      default: return '#4299E1';
    }
  };

  const getSeverityBadge = (severity: string) => {
    let bgColor = '';
    let textColor = '';

    switch (severity) {
      case 'critical':
        bgColor = 'bg-red-500/20';
        textColor = 'text-red-400';
        break;
      case 'high':
        bgColor = 'bg-orange-500/20';
        textColor = 'text-orange-400';
        break;
      case 'medium':
        bgColor = 'bg-yellow-500/20';
        textColor = 'text-yellow-400';
        break;
      case 'low':
        bgColor = 'bg-green-500/20';
        textColor = 'text-green-400';
        break;
      case 'info':
        bgColor = 'bg-blue-500/20';
        textColor = 'text-blue-400';
        break;
    }

    return (
      <span className={`${bgColor} ${textColor} px-2 py-1 rounded-full text-xs font-semibold capitalize`}>
        {severity}
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold font-['Chakra_Petch'] text-cyan-100 mb-8">
        Smart Contract Code Editor
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-slate-800 border border-cyan-900/30 rounded-lg shadow-lg shadow-slate-900/50 overflow-hidden">
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
              <div className="text-lg font-semibold text-white font-['Chakra_Petch']">Solidity Editor</div>
              <button
                onClick={performScan}
                disabled={isScanning}
                className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                  isScanning
                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                } transition-all duration-200`}
              >
                {isScanning ? (
                  <>
                    <Clock className="w-4 h-4 animate-spin" />
                    <span>Scanning...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Scan Contract</span>
                  </>
                )}
              </button>
            </div>
            <div className="h-[600px] border-b border-slate-700">
              <Editor
                height="100%"
                language="sol"
                theme="vs-dark"
                value={code}
                onChange={handleCodeChange}
                onMount={handleEditorDidMount}
                options={{
                  minimap: { enabled: true },
                  scrollBeyondLastLine: false,
                  fontSize: 14,
                  fontFamily: 'JetBrains Mono, monospace',
                  lineNumbers: 'on',
                  glyphMargin: true,
                  folding: true,
                  lineDecorationsWidth: 10,
                  lineNumbersMinChars: 3
                }}
              />
            </div>
            <div className="px-4 py-3 bg-slate-850 flex items-center text-sm text-gray-400">
              <span>Smart contract syntax highlighting enabled • Solidity v0.8.0+</span>
            </div>
          </div>

          {selectedVulnerability && (
            <div className="mt-6 bg-slate-800 border border-cyan-900/30 rounded-lg p-6 shadow-lg shadow-slate-900/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white font-['Chakra_Petch']">
                  {selectedVulnerability.name}
                </h3>
                {getSeverityBadge(selectedVulnerability.severity)}
              </div>
              
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-1">Description</div>
                <p className="text-gray-300">{selectedVulnerability.description}</p>
              </div>
              
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-1">Vulnerable Code (Line {selectedVulnerability.lineNumber})</div>
                <pre className="bg-slate-900 p-3 rounded-md text-gray-300 font-mono text-sm overflow-x-auto">
                  {selectedVulnerability.code}
                </pre>
              </div>
              
              <div>
                <div className="text-sm text-gray-400 mb-1">Remediation</div>
                <p className="text-gray-300">{selectedVulnerability.remediation}</p>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="bg-slate-800 border border-cyan-900/30 rounded-lg p-6 shadow-lg shadow-slate-900/50">
            <h2 className="text-xl font-bold text-white mb-6 font-['Chakra_Petch'] flex items-center">
              <Shield className="mr-2 h-5 w-5 text-cyan-400" />
              Security Analysis
            </h2>

            {!scanComplete && !isScanning && (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <Shield className="h-16 w-16 text-gray-500" />
                <p className="text-gray-400">
                  Click "Scan Contract" to analyze your smart contract for vulnerabilities.
                </p>
              </div>
            )}

            {isScanning && (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="animate-pulse">
                  <Shield className="h-16 w-16 text-cyan-400" />
                </div>
                <p className="text-gray-300 animate-pulse">
                  Scanning for vulnerabilities...
                </p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-cyan-400 h-2.5 rounded-full w-[45%] animate-[scan_3s_ease-in-out_infinite]"></div>
                </div>
              </div>
            )}

            {scanComplete && (
              <>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Analysis Results</span>
                    <span className="text-cyan-400 text-sm">
                      {vulnerabilities.length} {vulnerabilities.length === 1 ? 'issue' : 'issues'} found
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 mb-4">
                    {['critical', 'high', 'medium', 'low', 'info'].map((severity) => {
                      const count = vulnerabilities.filter(v => v.severity === severity).length;
                      return (
                        <div key={severity} className="flex flex-col items-center">
                          <div 
                            className={`w-3 h-3 rounded-full`}
                            style={{ backgroundColor: getSeverityColor(severity) }}
                          ></div>
                          <span className="text-xs text-gray-400 mt-1">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Vulnerabilities</h3>
                  
                  {vulnerabilities.length === 0 ? (
                    <div className="text-center py-8">
                      <Ban className="h-12 w-12 mx-auto text-green-400 mb-2" />
                      <p className="text-gray-300">No vulnerabilities found!</p>
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                      {vulnerabilities.map((vuln) => (
                        <div
                          key={vuln.id}
                          className={`p-3 rounded-lg cursor-pointer transition-all border ${
                            selectedVulnerability?.id === vuln.id
                              ? 'bg-slate-700/70 border-cyan-500/50'
                              : 'bg-slate-700/30 border-slate-700 hover:border-cyan-500/30'
                          }`}
                          onClick={() => setSelectedVulnerability(vuln)}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div className="font-medium text-white">{vuln.name}</div>
                            {getSeverityBadge(vuln.severity)}
                          </div>
                          <div className="text-xs text-gray-400 flex items-center">
                            <ArrowRight className="h-3 w-3 mr-1" /> Line {vuln.lineNumber}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* CSS for decorations */}
      <style jsx>{`
        .vulnerability-critical { background-color: rgba(255, 0, 60, 0.2); }
        .vulnerability-high { background-color: rgba(255, 107, 0, 0.2); }
        .vulnerability-medium { background-color: rgba(255, 199, 0, 0.2); }
        .vulnerability-low { background-color: rgba(72, 187, 120, 0.2); }
        .vulnerability-info { background-color: rgba(66, 153, 225, 0.2); }
        
        .glyph-margin-critical { background-color: #FF003C; width: 5px !important; }
        .glyph-margin-high { background-color: #FF6B00; width: 5px !important; }
        .glyph-margin-medium { background-color: #FFC700; width: 5px !important; }
        .glyph-margin-low { background-color: #48BB78; width: 5px !important; }
        .glyph-margin-info { background-color: #4299E1; width: 5px !important; }
        
        @keyframes scan {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default CodeEditor;