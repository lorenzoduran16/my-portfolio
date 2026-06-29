import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, Smartphone, CheckCircle, Database, 
  Sparkles, FileText, Volume2, ShieldCheck, HeartPulse,
  Clock, Zap, ArrowRight, Activity
} from 'lucide-react';

export default function YetiSection() {
  const concurrency = 50000;
  const cpuOverhead = 42;
  const responseTime = 12;
  const queryOptimizationSaved = 9000;

  return (
    <section id="yeti" className="w-full min-h-screen bg-slate-950 text-white py-20 px-6 md:px-12 border-b border-slate-900 flex flex-col justify-center">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-mono text-blue-400 font-bold tracking-widest uppercase block mb-1">INFRASTRUCTURE PORTFOLIO</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              YETI <span className="text-blue-400 font-light">— High-Load Sync</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-mono max-w-xl">
              **Infrastructure Architect (2013 - 2015)**. Designed and maintained real-time high-throughput transactional gateways, caching hierarchies, and continuous delivery deployment models.
            </p>
          </div>
          <div className="mt-4 md:mt-0 bg-slate-900 border border-slate-800 p-3 rounded-xl flex gap-6 text-xs font-mono shrink-0">
            <div>
              <span className="text-slate-500 block uppercase">Role</span>
              <span className="text-slate-300 font-bold">Infrastructure Lead</span>
            </div>
            <div className="border-l border-slate-800 pl-6">
              <span className="text-slate-500 block">Peak Load</span>
              <span className="text-blue-400 font-bold">50K+ Active Concurrency</span>
            </div>
          </div>
        </div>

        {/* Content Bento Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bento Block 1: Achievements List */}
          <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-2xs font-mono text-blue-400 font-bold uppercase tracking-widest block mb-1">METRIC MILESTONES</span>
                <h3 className="text-xl font-bold text-slate-100">Synchronized High-Load Platforms</h3>
              </div>

              <ul className="space-y-4 text-xs font-mono text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                  <div>
                    <span className="text-white font-bold block">Real Estate Engine Speedup</span>
                    <span>Refactored geo-routing indexes, delivering +2.3s load speed improvement.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                  <div>
                    <span className="text-white font-bold block">100% Redis Sync Alignment</span>
                    <span>Built an eventual consistency sync broker, aligning 20K+ transactions flawlessly.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                  <div>
                    <span className="text-white font-bold block">MySQL Connection Overhead</span>
                    <span>Implemented SQL proxy pools, reducing overhead consumption by 18%.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                  <div>
                    <span className="text-white font-bold block">Docker CI Pipeline Overhaul</span>
                    <span>Refactored testing layer images, cutting QA suite runtime from 4h down to 15min.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                  <div>
                    <span className="text-white font-bold block">Transactional Gateways</span>
                    <span>Reworked checkout error rollbacks, increasing transaction success rate by +22%.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6 text-2xs text-slate-500 font-mono flex justify-between items-center">
              <span>Stack: MySQL, Redis, Docker, PHP/Go, Kubernetes</span>
              <span className="text-blue-400 font-bold uppercase tracking-wider">AWS Architecture</span>
            </div>
          </div>

          {/* Bento Block 2: Static HIPAA Pharmacy Sync Flow & Load Stress Test */}
          <div className="lg:col-span-7 bg-slate-900/20 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-100 font-mono flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-rose-500 animate-pulse" />
                    High-Load Pharmacy Sync & Prescription Workflow
                  </h4>
                  <p className="text-3xs text-slate-500 font-mono mt-0.5">HIPAA-compliant high-throughput voice and pharmacy dispatch pipeline.</p>
                </div>
              </div>

              {/* Stress Concurrency Stats Card */}
              <div className="bg-slate-950 border border-slate-900 rounded-2xl p-4 space-y-4">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Peak Connection Stress Benchmark:</span>
                  <span className="text-blue-400 font-bold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {concurrency.toLocaleString()} concurrent users
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono pt-2 border-t border-slate-900">
                  <div>
                    <span className="text-slate-500 text-[10px] block">CPU OVERHEAD</span>
                    <span className="font-bold text-slate-300">{cpuOverhead}%</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block">DB RESPONSE</span>
                    <span className="text-emerald-400 font-bold">{responseTime}ms</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block">DB OVERHEAD SAVED</span>
                    <span className="text-blue-400 font-bold">-{queryOptimizationSaved.toLocaleString()} queries</span>
                  </div>
                </div>
              </div>

              {/* Stepped Workflow Diagram */}
              <div className="space-y-3">
                <span className="text-3xs font-mono text-slate-500 uppercase tracking-widest block">Dispatched Workflow Pipelines</span>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
                  
                  {/* Step 1: Doctor */}
                  <div className="p-3 rounded-xl border border-blue-500/20 bg-blue-500/5 text-center">
                    <FileText className="w-4 h-4 mx-auto mb-1.5 text-blue-400" />
                    <span className="text-[10px] font-mono block uppercase font-bold tracking-wider text-blue-400">1. Upload</span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">Doctor uploads audio dictation & credentials.</span>
                  </div>

                  {/* Step 2: NLP Parser */}
                  <div className="p-3 rounded-xl border border-indigo-500/20 bg-indigo-500/5 text-center">
                    <Sparkles className="w-4 h-4 mx-auto mb-1.5 text-indigo-400" />
                    <span className="text-[10px] font-mono block uppercase font-bold tracking-wider text-indigo-400">2. Parse</span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">NLP extraction models parse prescriptions.</span>
                  </div>

                  {/* Step 3: MySQL */}
                  <div className="p-3 rounded-xl border border-purple-500/20 bg-purple-500/5 text-center">
                    <Database className="w-4 h-4 mx-auto mb-1.5 text-purple-400" />
                    <span className="text-[10px] font-mono block uppercase font-bold tracking-wider text-purple-400">3. Persist</span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">Proxy pool handles ACID MySQL writes.</span>
                  </div>

                  {/* Step 4: Sync & Notify */}
                  <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-center">
                    <Volume2 className="w-4 h-4 mx-auto mb-1.5 text-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono block uppercase font-bold tracking-wider text-emerald-400">4. Notify</span>
                    <span className="text-[9px] text-slate-300 block mt-0.5">Sync to Redis cache and dial patient.</span>
                  </div>

                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 flex justify-between items-center text-3xs font-mono text-slate-500 mt-2">
                  <span className="flex items-center gap-1.5 uppercase text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    DATA INTEGRITY SECURED: 100% REDIS ALIGNMENT
                  </span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    VOICE SERVICE ACTIVE
                  </span>
                </div>

              </div>

            </div>

            {/* Static HIPAA container network compliance statement */}
            <div className="mt-4 flex flex-col md:flex-row items-center gap-4">
              <div className="text-3xs font-mono text-slate-500 flex items-center gap-1.5 uppercase">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Fully HIPAA compliant distributed cluster network</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
