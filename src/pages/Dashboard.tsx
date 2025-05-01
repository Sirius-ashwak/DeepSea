import React from 'react';
import { AlertTriangle, Shield, FileWarning, Check, ArrowRight } from 'lucide-react';
import { mockDashboardStats, mockSmartContracts } from '../utils/mockData';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from 'recharts';

const Dashboard: React.FC = () => {
  const vulnerabilityData = [
    { name: 'Critical', count: 12, color: '#FF003C' },
    { name: 'High', count: 24, color: '#FF6B00' },
    { name: 'Medium', count: 38, color: '#FFC700' },
    { name: 'Low', count: 52, color: '#48BB78' },
    { name: 'Info', count: 36, color: '#4299E1' }
  ];

  const recentActivityData = [
    { date: 'Oct 12', vulnerabilities: 24 },
    { date: 'Oct 13', vulnerabilities: 18 },
    { date: 'Oct 14', vulnerabilities: 32 },
    { date: 'Oct 15', vulnerabilities: 14 },
    { date: 'Oct 16', vulnerabilities: 28 },
    { date: 'Oct 17', vulnerabilities: 22 },
    { date: 'Oct 18', vulnerabilities: 16 }
  ];

  const securityScoreData = [
    { name: 'Reentrancy', value: 18 },
    { name: 'Integer Overflow', value: 12 },
    { name: 'Unchecked Return', value: 8 },
    { name: 'Access Control', value: 14 },
    { name: 'Other', value: 10 }
  ];

  const severityColors = {
    critical: '#FF003C',
    high: '#FF6B00',
    medium: '#FFC700',
    low: '#48BB78',
    info: '#4299E1'
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ 
    cx, cy, midAngle, innerRadius, outerRadius, percent 
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor="middle" 
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold font-['Chakra_Petch'] text-cyan-100 mb-8">
        Security Dashboard
      </h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800 border border-cyan-900/30 rounded-lg p-6 shadow-lg shadow-slate-900/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Contracts Scanned</p>
              <p className="text-3xl font-bold text-white mt-1">{mockDashboardStats.contractsScanned}</p>
            </div>
            <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Shield className="h-6 w-6 text-blue-400" />
            </div>
          </div>
          <div className="mt-4 text-sm text-blue-400">
            <span className="flex items-center"><ArrowRight className="h-4 w-4 mr-1" /> 24 in the last week</span>
          </div>
        </div>
        
        <div className="bg-slate-800 border border-cyan-900/30 rounded-lg p-6 shadow-lg shadow-slate-900/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Vulnerabilities Found</p>
              <p className="text-3xl font-bold text-white mt-1">{mockDashboardStats.vulnerabilitiesFound}</p>
            </div>
            <div className="h-12 w-12 rounded-lg bg-red-500/20 flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-red-400" />
            </div>
          </div>
          <div className="mt-4 text-sm text-red-400">
            <span className="flex items-center"><ArrowRight className="h-4 w-4 mr-1" /> 86 critical issues</span>
          </div>
        </div>
        
        <div className="bg-slate-800 border border-cyan-900/30 rounded-lg p-6 shadow-lg shadow-slate-900/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Vulnerabilities Fixed</p>
              <p className="text-3xl font-bold text-white mt-1">{mockDashboardStats.vulnerabilitiesFixed}</p>
            </div>
            <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Check className="h-6 w-6 text-green-400" />
            </div>
          </div>
          <div className="mt-4 text-sm text-green-400">
            <span className="flex items-center"><ArrowRight className="h-4 w-4 mr-1" /> 71.5% resolution rate</span>
          </div>
        </div>
        
        <div className="bg-slate-800 border border-cyan-900/30 rounded-lg p-6 shadow-lg shadow-slate-900/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Average Risk Score</p>
              <p className="text-3xl font-bold text-white mt-1">{mockDashboardStats.averageRiskScore}</p>
            </div>
            <div className="h-12 w-12 rounded-lg bg-yellow-500/20 flex items-center justify-center">
              <FileWarning className="h-6 w-6 text-yellow-400" />
            </div>
          </div>
          <div className="mt-4 text-sm text-yellow-400">
            <span className="flex items-center"><ArrowRight className="h-4 w-4 mr-1" /> Medium risk level</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Vulnerability by Severity */}
        <div className="bg-slate-800 border border-cyan-900/30 rounded-lg p-6 shadow-lg shadow-slate-900/50">
          <h2 className="text-xl font-bold text-white mb-6 font-['Chakra_Petch']">Vulnerabilities by Severity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={vulnerabilityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
              <XAxis dataKey="name" stroke="#A0AEC0" />
              <YAxis stroke="#A0AEC0" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1E293B',
                  borderColor: '#0F172A',
                  color: '#E2E8F0',
                }}
              />
              <Bar dataKey="count" barSize={40}>
                {vulnerabilityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-slate-800 border border-cyan-900/30 rounded-lg p-6 shadow-lg shadow-slate-900/50">
          <h2 className="text-xl font-bold text-white mb-6 font-['Chakra_Petch']">Recent Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={recentActivityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
              <XAxis dataKey="date" stroke="#A0AEC0" />
              <YAxis stroke="#A0AEC0" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1E293B',
                  borderColor: '#0F172A',
                  color: '#E2E8F0',
                }}
              />
              <Line
                type="monotone"
                dataKey="vulnerabilities"
                stroke="#00F0FF"
                strokeWidth={2}
                dot={{ r: 4, fill: '#00F0FF', stroke: '#00F0FF' }}
                activeDot={{ r: 6, fill: '#00F0FF', stroke: '#00F0FF' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Vulnerability Breakdown */}
        <div className="bg-slate-800 border border-cyan-900/30 rounded-lg p-6 shadow-lg shadow-slate-900/50">
          <h2 className="text-xl font-bold text-white mb-6 font-['Chakra_Petch']">Vulnerability Types</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={securityScoreData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {securityScoreData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={Object.values(severityColors)[index % Object.values(severityColors).length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1E293B',
                  borderColor: '#0F172A',
                  color: '#E2E8F0',
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Contracts */}
        <div className="lg:col-span-2 bg-slate-800 border border-cyan-900/30 rounded-lg p-6 shadow-lg shadow-slate-900/50">
          <h2 className="text-xl font-bold text-white mb-6 font-['Chakra_Petch']">Recent Contracts</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Vulnerabilities</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Owner</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {mockSmartContracts.map((contract) => (
                  <tr key={contract.id} className="hover:bg-slate-700/30 transition-colors">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">{contract.name}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      {contract.status === 'analyzing' ? (
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-400/20 text-blue-400">Analyzing</span>
                      ) : contract.status === 'completed' ? (
                        <span className="px-2 py-1 text-xs rounded-full bg-green-400/20 text-green-400">Completed</span>
                      ) : (
                        <span className="px-2 py-1 text-xs rounded-full bg-red-400/20 text-red-400">Failed</span>
                      )}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{contract.vulnerabilities.length}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{contract.owner.substring(0, 6)}...{contract.owner.substring(contract.owner.length - 4)}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                      {new Date(contract.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;