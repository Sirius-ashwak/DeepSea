import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import CodeEditor from './pages/CodeEditor';
import VulnerabilityReports from './pages/VulnerabilityReports';
import Profile from './pages/Profile';
import Documentation from './pages/Documentation';
import Layout from './components/Layout';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-gray-100">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/editor" element={<CodeEditor />} />
              <Route path="/reports" element={<VulnerabilityReports />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/docs" element={<Documentation />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;