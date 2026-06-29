import React from 'react';
import { motion } from 'motion/react';
import { 
  Server, Shield, Cpu, Layers, ArrowRight, Zap, 
  Settings, CheckCircle, BarChart3, Database, HelpCircle
} from 'lucide-react';

export default function ScienceSoftSection() {
  return (
    <section id="sciencesoft" className="w-full min-h-screen bg-slate-950 text-white py-20 px-6 md:px-12 border-b border-slate-900 flex flex-col justify-center">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-mono text-emerald-400 font-bold tracking-widest uppercase block mb-1">PROFESSIONAL EXPERIENCE</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              ScienceSoft <span className="text-blue-500 font-light">— System Architecture</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-mono max-w-xl">
              **Senior Backend Engineer (2018 - 2022)**. Designed and scaled high-throughput financial architectures, microservices, and AI routers to support 50K+ concurrent users.
            </p>
          </div>
          <div className="mt-4 md:mt-0 bg-slate-900 border border-slate-800 p-3 rounded-xl flex gap-6 text-xs font-mono shrink-0">
            <div>
              <span className="text-slate-500 block uppercase">Role</span>
              <span className="text-slate-300 font-bold">Lead Core Backend</span>
            </div>
            <div className="border-l border-slate-800 pl-6">
              <span className="text-slate-500 block">Performance Gain</span>
              <span className="text-emerald-400 font-bold">2.4x Speedup</span>
            </div>
          </div>
        </div>

        {/* Dashboard Frame / Diagram Display */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl p-6 md:p-8 space-y-8">
          
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-slate-800/80 pb-6">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Settings className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100 font-mono flex items-center gap-1.5">
                AI-Powered Transaction Platform Architecture <span className="text-3xs bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded font-bold uppercase">PROD STACK</span>
              </h3>
              <p className="text-[11px] text-slate-500 font-mono mt-0.5">Static architectural mapping and throughput telemetry.</p>
            </div>
          </div>

          {/* Diagram Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left side: System Architecture Diagram */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-3xs font-mono text-slate-500 uppercase tracking-widest block">System Topology Map</span>
                <span className="text-3xs font-mono text-emerald-400 flex items-center gap-1.5 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Prod Data Flow
                </span>
              </div>

              {/* The Visual Diagram Nodes */}
              <div className="bg-slate-950/60 rounded-2xl p-6 border border-slate-800/40 min-h-[300px] flex flex-col justify-between space-y-6">
                
                {/* Horizontal flow for desktop, vertical stack for mobile */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative">
                  
                  {/* Stage 1: Edge API Gateway */}
                  <div className="flex-1 min-w-[120px] bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-center relative z-10 hover:border-blue-500/50 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-2">
                      <Shield className="w-4 h-4" />
                    </div>
                    <span className="text-3xs font-mono font-bold text-emerald-400 block uppercase tracking-wider">01. API Edge</span>
                    <span className="text-[11px] text-white font-bold block mt-1">Kong Gateway</span>
                    <span className="text-4xs text-slate-500 font-mono block mt-0.5">Rate Limit & JWT</span>
                  </div>

                  <div className="hidden md:flex items-center text-slate-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Stage 2: LLM Router Service */}
                  <div className="flex-1 min-w-[120px] bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-center relative z-10 hover:border-pink-500/50 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mx-auto mb-2">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <span className="text-3xs font-mono font-bold text-pink-400 block uppercase tracking-wider">02. AI Router</span>
                    <span className="text-[11px] text-white font-bold block mt-1">LLM Dispatch</span>
                    <span className="text-4xs text-slate-500 font-mono block mt-0.5">Intent Categorizer</span>
                  </div>

                  <div className="hidden md:flex items-center text-slate-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Stage 3: Core Transaction Ledger */}
                  <div className="flex-1 min-w-[120px] bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-center relative z-10 hover:border-purple-500/50 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mx-auto mb-2">
                      <Server className="w-4 h-4" />
                    </div>
                    <span className="text-3xs font-mono font-bold text-purple-400 block uppercase tracking-wider">03. Ledger Core</span>
                    <span className="text-[11px] text-white font-bold block mt-1">Go Microservice</span>
                    <span className="text-4xs text-slate-500 font-mono block mt-0.5">Isolate Thread Pool</span>
                  </div>

                  <div className="hidden md:flex items-center text-slate-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Stage 4: Database Layer */}
                  <div className="flex-1 min-w-[120px] bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-center relative z-10 hover:border-blue-500/50 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto mb-2">
                      <Database className="w-4 h-4" />
                    </div>
                    <span className="text-3xs font-mono font-bold text-blue-400 block uppercase tracking-wider">04. Sync DB</span>
                    <span className="text-[11px] text-white font-bold block mt-1">Redis + Postgres</span>
                    <span className="text-4xs text-slate-500 font-mono block mt-0.5">Consistent Hashing</span>
                  </div>

                </div>

                {/* Sub-text explanation box */}
                <div className="border-t border-slate-900 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-slate-400">
                  <div className="space-y-1">
                    <span className="text-white font-bold block text-sm">Consensus-Locked Ledgers</span>
                    <p className="text-[11px] leading-normal">
                      We migrated legacy single-thread processes to concurrent Go microservices, utilizing active Redis pipeline locks. This avoids double-spend states during highly volatile, high-load transactions.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-white font-bold block text-sm">Dynamic AI Routing</span>
                    <p className="text-[11px] leading-normal">
                      An intelligent semantic router evaluates natural language transfers, routing requests dynamically to target agent pools and slashing round-trip backend latency to just 8.4ms.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right side: Performance KPIs */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-3xs font-mono text-slate-500 uppercase tracking-widest block">Architecture Gains (Before vs After)</span>
              
              <div className="bg-slate-950/60 rounded-2xl p-5 border border-slate-800/40 space-y-5 h-full flex flex-col justify-between">
                
                {/* Metric 1: Latency */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Average API Latency</span>
                    <span className="text-emerald-400 font-bold">-38% Reduction</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/50 relative">
                    <div className="absolute top-0 left-0 h-full bg-slate-700 w-full rounded-full" />
                    <div className="absolute top-0 left-0 h-full bg-emerald-500 w-[62%] rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>Before: 161ms</span>
                    <span className="text-emerald-400 font-bold">After: 100ms</span>
                  </div>
                </div>

                {/* Metric 2: Throughput */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Peak Concurrency Max</span>
                    <span className="text-blue-400 font-bold">2.4x Multiplier</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/50 relative">
                    <div className="absolute top-0 left-0 h-full bg-slate-700 w-[41%] rounded-full" />
                    <div className="absolute top-0 left-0 h-full bg-blue-500 w-full rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>Before: 20K users</span>
                    <span className="text-blue-400 font-bold">After: 50K+ users</span>
                  </div>
                </div>

                {/* Metric 3: Compute Efficiency */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">AWS Infrastructure Cost</span>
                    <span className="text-orange-400 font-bold">-22% Saved</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/50 relative">
                    <div className="absolute top-0 left-0 h-full bg-slate-700 w-full rounded-full" />
                    <div className="absolute top-0 left-0 h-full bg-orange-500 w-[78%] rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>Before: $124K/mo</span>
                    <span className="text-orange-400 font-bold">After: $96.7K/mo</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Business Impact Bottom Grid Bar */}
          <div className="bg-slate-950/80 px-6 py-6 rounded-2xl border border-slate-800 grid grid-cols-2 md:grid-cols-5 gap-4">
            
            <div className="space-y-1" id="impact-uptime">
              <span className="text-3xs font-mono text-slate-500 block uppercase tracking-widest">SYSTEM UPTIME</span>
              <span className="text-sm font-black text-emerald-400 block font-mono">99.99%</span>
              <span className="text-3xs text-slate-500 font-mono block">Continuous High Availability</span>
            </div>

            <div className="space-y-1 border-l border-slate-900 pl-4" id="impact-savings">
              <span className="text-3xs font-mono text-slate-500 block uppercase tracking-widest">ANNUAL SAVINGS</span>
              <span className="text-sm font-black text-white block font-mono">$2.1M+</span>
              <span className="text-3xs text-slate-500 font-mono block">Infrastructure Optimizations</span>
            </div>

            <div className="space-y-1 border-l border-slate-900 pl-4" id="impact-users">
              <span className="text-3xs font-mono text-slate-500 block uppercase tracking-widest">HAPPY DAILY USERS</span>
              <span className="text-sm font-black text-white block font-mono">12M+</span>
              <span className="text-3xs text-slate-500 font-mono block">Zero-Latency Operations</span>
            </div>

            <div className="space-y-1 border-l border-slate-900 pl-4" id="impact-latency">
              <span className="text-3xs font-mono text-slate-500 block uppercase tracking-widest">AVG RESPONSE</span>
              <span className="text-sm font-black text-blue-400 block font-mono">&lt;100ms</span>
              <span className="text-3xs text-slate-500 font-mono block">Global Cloud Transit Edge</span>
            </div>

            <div className="space-y-1 border-l border-slate-900 pl-4" id="impact-concurrency">
              <span className="text-3xs font-mono text-slate-500 block uppercase tracking-widest">CONCURRENT USERS</span>
              <span className="text-sm font-black text-white block font-mono">50K+</span>
              <span className="text-3xs text-slate-500 font-mono block">Parallel Microservice Scaling</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
