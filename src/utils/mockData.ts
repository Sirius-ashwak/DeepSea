import { SmartContract, Vulnerability, AuditReport, DashboardStats, User } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alex Chen',
  email: 'alex@example.com',
  avatar: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=150',
  role: 'developer'
};

export const mockVulnerabilities: Vulnerability[] = [
  {
    id: 'v1',
    name: 'Reentrancy Vulnerability',
    description: 'This contract is vulnerable to reentrancy attacks, allowing an attacker to repeatedly withdraw funds before the balance is updated.',
    severity: 'critical',
    lineNumber: 42,
    code: 'function withdraw(uint amount) public {\n  require(balances[msg.sender] >= amount);\n  (bool success, ) = msg.sender.call{value: amount}("");\n  require(success);\n  balances[msg.sender] -= amount;\n}',
    remediation: 'Implement the checks-effects-interactions pattern by updating balances before external calls.'
  },
  {
    id: 'v2',
    name: 'Integer Overflow',
    description: 'Arithmetic operation can result in an integer overflow, potentially leading to unexpected behavior.',
    severity: 'high',
    lineNumber: 78,
    code: 'function addToBalance(uint amount) public {\n  balances[msg.sender] += amount;\n}',
    remediation: 'Use SafeMath library for arithmetic operations or solidity 0.8.0+ which has built-in overflow checks.'
  },
  {
    id: 'v3',
    name: 'Unprotected Function',
    description: 'This function lacks access control, allowing anyone to call it.',
    severity: 'medium',
    lineNumber: 112,
    code: 'function setOwner(address newOwner) public {\n  owner = newOwner;\n}',
    remediation: 'Add access control modifiers to restrict who can call this function.'
  },
  {
    id: 'v4',
    name: 'Unchecked Return Value',
    description: 'Return value from external call is not checked, which may lead to silent failures.',
    severity: 'medium',
    lineNumber: 156,
    code: 'function transferFunds(address target, uint amount) public {\n  target.transfer(amount);\n}',
    remediation: 'Check the return value of external calls and handle potential failures.'
  },
  {
    id: 'v5',
    name: 'Missing Event Emission',
    description: 'Important state changes do not emit events, making it difficult to track changes off-chain.',
    severity: 'low',
    lineNumber: 201,
    code: 'function updateConfig(uint newConfig) public onlyOwner {\n  config = newConfig;\n}',
    remediation: 'Emit events for important state changes to improve transparency and facilitate off-chain tracking.'
  }
];

export const mockContract: SmartContract = {
  id: 'c1',
  name: 'TokenExchange',
  description: 'A decentralized token exchange smart contract for swapping ERC20 tokens.',
  code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenExchange is Ownable {
    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) public allowances;
    
    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);
    event Swap(address indexed user, address indexed tokenFrom, address indexed tokenTo, uint256 amountFrom, uint256 amountTo);
    
    function deposit() external payable {
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }
    
    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Transfer failed");
        emit Withdraw(msg.sender, amount);
    }
    
    function swap(address tokenFrom, address tokenTo, uint256 amountFrom) external {
        require(tokenFrom != address(0) && tokenTo != address(0), "Invalid token address");
        require(amountFrom > 0, "Amount must be greater than 0");
        
        uint256 amountTo = calculateSwapAmount(tokenFrom, tokenTo, amountFrom);
        require(amountTo > 0, "Invalid swap amount");
        
        IERC20(tokenFrom).transferFrom(msg.sender, address(this), amountFrom);
        IERC20(tokenTo).transfer(msg.sender, amountTo);
        
        emit Swap(msg.sender, tokenFrom, tokenTo, amountFrom, amountTo);
    }
    
    function calculateSwapAmount(address tokenFrom, address tokenTo, uint256 amountFrom) public view returns (uint256) {
        // This is just a simplified example
        // In a real contract, we would use price oracles or other mechanisms
        return amountFrom * getExchangeRate(tokenFrom, tokenTo) / 1e18;
    }
    
    function getExchangeRate(address tokenFrom, address tokenTo) public view returns (uint256) {
        // This would be implemented with oracles in a real contract
        return 1e18; // 1:1 exchange rate for simplicity
    }
    
    function setOwner(address newOwner) public {
        owner = newOwner;
    }
}`,
  owner: '0x1234567890abcdef1234567890abcdef12345678',
  createdAt: '2023-09-15T14:30:00Z',
  updatedAt: '2023-09-15T14:35:00Z',
  status: 'completed',
  vulnerabilities: mockVulnerabilities
};

export const mockAuditReport: AuditReport = {
  id: 'r1',
  contractId: 'c1',
  timestamp: '2023-09-15T14:40:00Z',
  overallRisk: 'high',
  metrics: [
    { name: 'Code Quality', value: 72, max: 100 },
    { name: 'Security Score', value: 61, max: 100 },
    { name: 'Gas Efficiency', value: 85, max: 100 },
    { name: 'Documentation', value: 68, max: 100 }
  ],
  vulnerabilities: mockVulnerabilities
};

export const mockDashboardStats: DashboardStats = {
  contractsScanned: 342,
  vulnerabilitiesFound: 1247,
  vulnerabilitiesFixed: 892,
  averageRiskScore: 72
};

export const mockSmartContracts: SmartContract[] = [
  mockContract,
  {
    id: 'c2',
    name: 'MultiSigWallet',
    description: 'A multi-signature wallet requiring multiple approvals for transactions.',
    code: '// Code for MultiSigWallet contract',
    owner: '0x1234567890abcdef1234567890abcdef12345678',
    createdAt: '2023-09-14T10:20:00Z',
    updatedAt: '2023-09-14T10:25:00Z',
    status: 'completed',
    vulnerabilities: mockVulnerabilities.slice(1, 3)
  },
  {
    id: 'c3',
    name: 'NFTMarketplace',
    description: 'An NFT marketplace for trading digital collectibles.',
    code: '// Code for NFTMarketplace contract',
    owner: '0x1234567890abcdef1234567890abcdef12345678',
    createdAt: '2023-09-13T16:45:00Z',
    updatedAt: '2023-09-13T16:50:00Z',
    status: 'analyzing',
    vulnerabilities: []
  }
];

export const solidity101Code = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SimpleToken is ERC20, Ownable {
    uint256 public constant INITIAL_SUPPLY = 1000000 * 10**18;
    
    constructor() ERC20("SimpleToken", "STK") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
    
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
    
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}`;