import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Cpu, Play, Zap, Terminal, Code2, Server } from 'lucide-react';

export default function SummarySection() {
  const [activeTab, setActiveTab] = useState<'backend' | 'tech' | 'transactions' | 'ai'>('backend');

  // Static telemetry values for elegant display
  const staticTransactions = [
    { id: '1', timestamp: '07:18:42', service: 'payment-service', endpoint: '/v1/payments', method: 'POST', status: 200, latency: 14 },
    { id: '2', timestamp: '07:18:39', service: 'ai-router', endpoint: '/v1/agents/route', method: 'POST', status: 201, latency: 8 },
    { id: '3', timestamp: '07:18:35', service: 'db-pool-writer', endpoint: '/v1/query', method: 'PUT', status: 200, latency: 11 },
    { id: '4', timestamp: '07:18:31', service: 'user-service', endpoint: '/v1/users/auth', method: 'GET', status: 200, latency: 5 },
    { id: '5', timestamp: '07:18:28', service: 'cache-sync', endpoint: '/v1/redis/sync', method: 'DELETE', status: 204, latency: 4 },
  ];

  return (
    <section id="summary" className="w-full min-h-screen bg-slate-950 flex flex-col justify-center py-20 px-6 md:px-12 border-b border-slate-900 relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-xs font-mono text-blue-400 font-semibold tracking-widest uppercase mb-2">Executive Overview</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Key Architecture & Achievements
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-3 font-mono">
            A high-level summary of a decadelong career designing systems that handle billions in data transit, robust microservice coordination, and next-generation AI integrations.
          </p>
        </div>

        {/* Four Main Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          
          {/* Card 1: 10+ Years */}
          <button
            onClick={() => setActiveTab('backend')}
            className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group focus:outline-none ${
              activeTab === 'backend'
                ? 'bg-slate-900/80 border-blue-500/80 shadow-lg shadow-blue-500/5'
                : 'bg-slate-900/30 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
            }`}
            id="summary-card-backend"
          >
            <div className="absolute top-0 right-0 p-3 text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
              <Database className="w-16 h-16" />
            </div>
            <div className="flex flex-col h-full justify-between font-mono">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">EXPERIENCE CORE</span>
                <h3 className="text-2xl font-black text-white mt-2 flex items-baseline gap-1">
                  10+ <span className="text-lg font-medium text-slate-400 font-sans">Years</span>
                </h3>
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-slate-100 font-sans">Scalable Backend Systems</p>
                <p className="text-xs text-slate-400 mt-1 font-sans">Multi-tenant, distributed nodes with active failover pools.</p>
              </div>
              {activeTab === 'backend' && (
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
              )}
            </div>
          </button>

          {/* Card 2: Tech Expert */}
          <button
            onClick={() => setActiveTab('tech')}
            className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group focus:outline-none ${
              activeTab === 'tech'
                ? 'bg-slate-900/80 border-indigo-500/80 shadow-lg shadow-indigo-500/5'
                : 'bg-slate-900/30 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
            }`}
            id="summary-card-tech"
          >
            <div className="absolute top-0 right-0 p-3 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors">
              <Code2 className="w-16 h-16" />
            </div>
            <div className="flex flex-col h-full justify-between font-mono">
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-bold">LANGUAGE GRID</span>
                <h3 className="text-2xl font-black text-white mt-2">Expert</h3>
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-slate-100 font-sans">Python, Go, TS, AWS</p>
                <p className="text-xs text-slate-400 mt-1 font-sans">Specialized in robust compiler runtimes, Cloud VPC networks.</p>
              </div>
              {activeTab === 'tech' && (
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
              )}
            </div>
          </button>

          {/* Card 3: 12M+ Transactions */}
          <button
            onClick={() => setActiveTab('transactions')}
            className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group focus:outline-none ${
              activeTab === 'transactions'
                ? 'bg-slate-900/80 border-purple-500/80 shadow-lg shadow-purple-500/5'
                : 'bg-slate-900/30 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
            }`}
            id="summary-card-transactions"
          >
            <div className="absolute top-0 right-0 p-3 text-purple-500/20 group-hover:text-purple-500/40 transition-colors">
              <Server className="w-16 h-16" />
            </div>
            <div className="flex flex-col h-full justify-between font-mono">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">TRANSACTION LOAD</span>
                <h3 className="text-2xl font-black text-white mt-2 flex items-baseline gap-1">
                  12M+ <span className="text-xs font-mono text-purple-400 font-semibold">tx/day</span>
                </h3>
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-slate-100 font-sans">High-Concurrency Scale</p>
                <p className="text-xs text-slate-400 mt-1 font-sans">Parallel streaming queues, Redis cache pipelines, low DB load.</p>
              </div>
              {activeTab === 'transactions' && (
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
              )}
            </div>
          </button>

          {/* Card 4: AI & Automation */}
          <button
            onClick={() => setActiveTab('ai')}
            className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group focus:outline-none ${
              activeTab === 'ai'
                ? 'bg-slate-900/80 border-pink-500/80 shadow-lg shadow-pink-500/5'
                : 'bg-slate-900/30 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
            }`}
            id="summary-card-ai"
          >
            <div className="absolute top-0 right-0 p-3 text-pink-500/20 group-hover:text-pink-500/40 transition-colors">
              <Cpu className="w-16 h-16" />
            </div>
            <div className="flex flex-col h-full justify-between font-mono">
              <div>
                <span className="text-xs font-mono text-pink-400 uppercase tracking-widest font-bold">SYSTEM INTELLIGENCE</span>
                <h3 className="text-2xl font-black text-white mt-2">AI-Driven</h3>
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-slate-100 font-sans">AI Routing & Orchestration</p>
                <p className="text-xs text-slate-400 mt-1 font-sans">Multi-agent backends, automated LLM routing and vector state syncs.</p>
              </div>
              {activeTab === 'ai' && (
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-pink-500 to-rose-500" />
              )}
            </div>
          </button>
        </div>

        {/* Showcase Area for Selected Achievement - Static Architecture representation */}
        <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md overflow-hidden relative">
          
          <AnimatePresence mode="wait">
            {/* 1. SCALABLE BACKEND SYSTEMS */}
            {activeTab === 'backend' && (
              <motion.div
                key="backend-sim"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-xs font-mono text-blue-400 font-bold tracking-widest uppercase">System Topology</span>
                  <h4 className="text-xl font-bold text-slate-100 mt-2">Multi-Node Distribution Mapping</h4>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed font-mono">
                    High-availability structures require redundant routing failure points. This mapping displays the active Load Balancer orchestrating traffic across twin web application nodes which balance query loads against a replicated database layer with active Redis fallback cache coverage.
                  </p>
                  
                  <div className="mt-6 flex flex-col gap-2 border-t border-slate-800/80 pt-4 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500">System Status:</span>
                      <span className="text-emerald-400 font-bold">● ACTIVE / OPTIMAL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">System Uptime:</span>
                      <span className="text-slate-300 font-bold">99.999% SLA</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-center items-center bg-slate-950/80 rounded-2xl p-6 border border-slate-800/50 relative overflow-hidden min-h-[300px]">
                  
                  {/* Nodes Layout */}
                  <div className="w-full h-full flex flex-col justify-between relative gap-8 py-4">
                    
                    {/* Level 1: Client Gateway */}
                    <div className="flex justify-center">
                      <div className="relative bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span className="text-xs font-mono text-slate-300 font-bold uppercase tracking-wider">Client Load Balancer</span>
                      </div>
                    </div>

                    {/* Level 2: Twins App Servers */}
                    <div className="flex justify-around items-center w-full relative">
                      <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-800/80 stroke-[1.5]" style={{ transform: 'translateY(-120%)' }}>
                        <line x1="50%" y1="0%" x2="25%" y2="100%" />
                        <line x1="50%" y1="0%" x2="75%" y2="100%" />
                      </svg>

                      {/* Node A */}
                      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex flex-col items-center gap-1 shadow-md w-[140px] z-10 hover:border-blue-500/50 transition-colors">
                        <span className="text-xs font-mono text-slate-400">Node A (Python)</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="text-2xs font-mono text-slate-500">CPU LOAD: 14%</span>
                        </div>
                      </div>

                      {/* Node B */}
                      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex flex-col items-center gap-1 shadow-md w-[140px] z-10 hover:border-indigo-500/50 transition-colors">
                        <span className="text-xs font-mono text-slate-400">Node B (Go)</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="text-2xs font-mono text-slate-500">CPU LOAD: 9%</span>
                        </div>
                      </div>
                    </div>

                    {/* Level 3: Database & Cache */}
                    <div className="flex justify-around items-center w-full relative mt-2">
                      <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-800/80 stroke-[1.5]" style={{ transform: 'translateY(-80%)' }}>
                        <line x1="25%" y1="0%" x2="25%" y2="100%" />
                        <line x1="25%" y1="0%" x2="75%" y2="100%" />
                        <line x1="75%" y1="0%" x2="25%" y2="100%" />
                        <line x1="75%" y1="0%" x2="75%" y2="100%" />
                      </svg>

                      {/* DB Primary */}
                      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex flex-col items-center gap-1 shadow-md w-[130px] z-10 hover:border-purple-500/50 transition-colors">
                        <Database className="w-4 h-4 text-purple-400" />
                        <span className="text-2xs font-mono text-slate-400 mt-1 uppercase tracking-wider font-semibold">PostgreSQL Master</span>
                        <span className="text-3xs font-mono text-emerald-400">Pool: 24/100 connections</span>
                      </div>

                      {/* Redis Replica */}
                      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex flex-col items-center gap-1 shadow-md w-[130px] z-10 hover:border-red-500/50 transition-colors">
                        <Zap className="w-4 h-4 text-red-400" />
                        <span className="text-2xs font-mono text-slate-400 mt-1 uppercase tracking-wider font-semibold">Redis Cache Pool</span>
                        <span className="text-3xs font-mono text-red-400">Cache Hit Rate: 94.2%</span>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. TECH LOGO COLLAPSIBLES */}
            {activeTab === 'tech' && (
              <motion.div
                key="tech-sim"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <span className="text-xs font-mono text-indigo-400 font-bold tracking-widest uppercase">SKILLS MATRIX</span>
                  <h4 className="text-xl font-bold text-slate-100 mt-2">Architectural Tech Stack</h4>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed font-mono">
                    Selecting the appropriate language runtime determines the velocity of scale. This matrix displays Lorenzo's core system integration profiles and optimization playbooks.
                  </p>
                </div>

                <div className="lg:col-span-8 bg-slate-950/80 rounded-2xl p-6 border border-slate-800/50 flex flex-col justify-center min-h-[300px]">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Tech Card 1 */}
                    <div className="bg-slate-900 border border-slate-800/80 p-4 rounded-xl flex flex-col items-center text-center hover:border-indigo-500/40 hover:bg-slate-900/60 transition-all duration-300">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 text-lg font-bold font-mono">
                        Py
                      </div>
                      <span className="text-sm font-bold text-slate-200 mt-3">Python</span>
                      <p className="text-3xs font-mono text-indigo-400 mt-1 uppercase tracking-widest">ML & Automations</p>
                      <p className="text-2xs text-slate-400 mt-2 font-sans">FastAPI microservices, pandas indexing, custom langchain agents.</p>
                    </div>

                    {/* Tech Card 2 */}
                    <div className="bg-slate-900 border border-slate-800/80 p-4 rounded-xl flex flex-col items-center text-center hover:border-blue-500/40 hover:bg-slate-900/60 transition-all duration-300">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600/10 text-blue-400 border border-blue-600/20 text-md font-bold font-mono">
                        TS
                      </div>
                      <span className="text-sm font-bold text-slate-200 mt-3">TypeScript</span>
                      <p className="text-3xs font-mono text-blue-400 mt-1 uppercase tracking-widest">Type-Safe Node</p>
                      <p className="text-2xs text-slate-400 mt-2 font-sans">Express frameworks, GraphQL schema optimizations, React structures.</p>
                    </div>

                    {/* Tech Card 3 */}
                    <div className="bg-slate-900 border border-slate-800/80 p-4 rounded-xl flex flex-col items-center text-center hover:border-orange-500/40 hover:bg-slate-900/60 transition-all duration-300">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-bold font-mono">
                        AWS
                      </div>
                      <span className="text-sm font-bold text-slate-200 mt-3">Cloud AWS</span>
                      <p className="text-3xs font-mono text-orange-400 mt-1 uppercase tracking-widest">Infrastructure</p>
                      <p className="text-2xs text-slate-400 mt-2 font-sans">Lambda serverless architecture, SQS buffering, RDS PostgreSQL configurations.</p>
                    </div>

                    {/* Tech Card 4 */}
                    <div className="bg-slate-900 border border-slate-800/80 p-4 rounded-xl flex flex-col items-center text-center hover:border-teal-500/40 hover:bg-slate-900/60 transition-all duration-300">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 text-md font-bold font-mono">
                        Go
                      </div>
                      <span className="text-sm font-bold text-slate-200 mt-3">Golang</span>
                      <p className="text-3xs font-mono text-teal-400 mt-1 uppercase tracking-widest">High Concurrency</p>
                      <p className="text-2xs text-slate-400 mt-2 font-sans">Highly optimized HTTP services, goroutine channels, fast JSON compilation.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. 12M+ DAILY TRANSACTIONS */}
            {activeTab === 'transactions' && (
              <motion.div
                key="transactions-sim"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-xs font-mono text-purple-400 font-bold tracking-widest uppercase">CONCURRENCY RUNTIME</span>
                  <h4 className="text-xl font-bold text-slate-100 mt-2">Transaction Flow Telemetry</h4>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed font-mono">
                    This window showcases real-time telemetry streams on a 12M+ daily transaction profile. Active caching successfully buffers database queries to retain sub-15ms system response speeds under load.
                  </p>

                  <div className="mt-6 flex flex-col gap-2 border-t border-slate-800/80 pt-4 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Daily Total:</span>
                      <span className="text-purple-400 font-bold">12,480,392 tx</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Average Latency:</span>
                      <span className="text-slate-300 font-bold">10.4ms</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col bg-slate-950/80 rounded-2xl p-6 border border-slate-800/50 min-h-[300px] justify-between">
                  {/* Console Header */}
                  <div className="flex justify-between items-center pb-3 border-b border-slate-800/80 mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <Terminal className="w-4 h-4 text-purple-400" />
                      <span>System Latency Logs</span>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="w-2 h-2 rounded-full bg-slate-800" />
                    </div>
                  </div>

                  {/* Logs Terminal representation */}
                  <div className="flex-1 font-mono text-xs text-slate-300 space-y-3 p-2 bg-slate-950 rounded-lg max-h-[180px] overflow-y-auto">
                    {staticTransactions.map((tx) => (
                      <div
                        key={tx.id}
                        className="flex justify-between items-center py-1.5 px-2 rounded hover:bg-slate-900 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="text-slate-300 font-medium">{tx.endpoint}</span>
                        </div>
                        
                        <div className="text-slate-400 font-semibold">{tx.latency}ms</div>
                      </div>
                    ))}
                  </div>

                  {/* Active throughput load info */}
                  <div className="mt-4 pt-3 border-t border-slate-900/60 flex justify-between items-center text-xs font-mono text-slate-500">
                    <span>Status: Stable</span>
                    <span className="text-purple-400 font-bold">144 requests/sec</span>
                  </div>

                </div>
              </motion.div>
            )}

            {/* 4. AI & AUTOMATION SYSTEMS ROUTER */}
            {activeTab === 'ai' && (
              <motion.div
                key="ai-sim"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-xs font-mono text-pink-400 font-bold tracking-widest uppercase">AUTOMATION SYSTEM</span>
                  <h4 className="text-xl font-bold text-slate-100 mt-2">Multi-Agent Router Logic</h4>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed font-mono">
                    Modern architectures use routing nodes as intelligent controllers. This diagram demonstrates how a parser categorizes incoming client requests and routes them to specialized, low-latency execution blocks.
                  </p>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-center items-center bg-slate-950/80 rounded-2xl p-6 border border-slate-800/50 min-h-[300px] relative">
                  
                  {/* Semantic routing diagram */}
                  <div className="w-full space-y-6">
                    {/* Step A: Input */}
                    <div className="flex justify-center">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 max-w-[280px] w-full text-center relative">
                        <span className="text-3xs font-mono text-slate-500 uppercase block tracking-wider mb-1">Incoming Query</span>
                        <div className="text-xs font-mono text-slate-200 truncate font-semibold">"Authorize Payment"</div>
                      </div>
                    </div>

                    {/* Step B: Routing Node */}
                    <div className="flex justify-center">
                      <div className="border rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 border-pink-500 bg-pink-500/10 text-pink-400">
                        <Cpu className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step C: Target Microservices */}
                    <div className="grid grid-cols-3 gap-3">
                      
                      {/* Service 1: Payment Agent */}
                      <div className="p-3 rounded-xl border text-center transition-all duration-300 bg-emerald-500/10 border-emerald-500/30 text-emerald-400">
                        <span className="text-xs font-semibold block">Payment Gateway</span>
                        <span className="text-[10px] font-mono text-emerald-500/80">Active</span>
                      </div>

                      {/* Service 2: Cache DB sync */}
                      <div className="p-3 rounded-xl border text-center transition-all duration-300 bg-slate-900 border-slate-800 text-slate-400">
                        <span className="text-xs font-semibold block">Database Sync</span>
                        <span className="text-[10px] font-mono text-slate-600">Idle</span>
                      </div>

                      {/* Service 3: Reports compiler */}
                      <div className="p-3 rounded-xl border text-center transition-all duration-300 bg-slate-900 border-slate-800 text-slate-400">
                        <span className="text-xs font-semibold block">Report Compiler</span>
                        <span className="text-[10px] font-mono text-slate-600">Idle</span>
                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

