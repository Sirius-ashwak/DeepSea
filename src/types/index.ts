export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'auditor' | 'developer';
};

export type Vulnerability = {
  id: string;
  name: string;
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low' | 'info';
  lineNumber: number;
  code: string;
  remediation: string;
};

export type SmartContract = {
  id: string;
  name: string;
  description: string;
  code: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
  status: 'analyzing' | 'completed' | 'failed';
  vulnerabilities: Vulnerability[];
};

export type RiskMetric = {
  name: string;
  value: number;
  max: number;
};

export type AuditReport = {
  id: string;
  contractId: string;
  timestamp: string;
  overallRisk: 'critical' | 'high' | 'medium' | 'low' | 'safe';
  metrics: RiskMetric[];
  vulnerabilities: Vulnerability[];
};

export type DashboardStats = {
  contractsScanned: number;
  vulnerabilitiesFound: number;
  vulnerabilitiesFixed: number;
  averageRiskScore: number;
};