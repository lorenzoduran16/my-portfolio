import React from 'react';
import { motion } from 'motion/react';
import { Database, Cpu, Zap, Clock, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function UnqorkSection() {
  return (
    <section id="unqork" className="w-full min-h-screen bg-slate-950 text-white py-20 px-6 md:px-12 border-b border-slate-900 flex flex-col justify-center">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-mono text-indigo-400 font-bold tracking-widest uppercase block mb-1">SCALE ARCHITECTURE</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Unqork <span className="text-indigo-500 font-light">— Database Scaling</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-mono max-w-xl">
              **Lead Systems Engineer (2015 - 2018)**. Focused on designing distributed state management architectures, scaling multi-tenant database clusters, and deploying real-time caching nodes.
            </p>
          </div>
          <div className="mt-4 md:mt-0 bg-slate-900 border border-slate-800 p-3 rounded-xl flex gap-6 text-xs font-mono shrink-0">
            <div>
              <span className="text-slate-500 block uppercase">Role</span>
              <span className="text-slate-300 font-bold">Systems Lead</span>
            </div>
            <div className="border-l border-slate-800 pl-6">
              <span className="text-slate-500 block">DB Operations</span>
              <span className="text-indigo-400 font-bold">85K+ Tenants</span>
            </div>
          </div>
        </div>

        {/* Dashboard Frame (Static Diagram & Highlights Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Achievement Bullet Highlights */}
          <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-2xs font-mono text-indigo-400 font-bold uppercase tracking-widest block mb-1">KEY ACHIEVEMENTS</span>
                <h3 className="text-xl font-bold text-slate-100">Performance & High-Availability Engineering</h3>
              </div>

              <ul className="space-y-4 text-xs font-mono text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                  <div>
                    <span className="text-white font-bold block">Multi-tenant PostgreSQL</span>
                    <span>Optimized connections and shards to serve 85K+ active clients.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                  <div>
                    <span className="text-white font-bold block">Real-time Redis Pipelines</span>
                    <span>Built high-load write-through caching, reducing database load limits by 60%.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                  <div>
                    <span className="text-white font-bold block">GraphQL Schema Tuning</span>
                    <span>Refactored nested resolver lookups, saving 14 production dev-hours/week.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                  <div>
                    <span className="text-white font-bold block">React Frontend Velocity</span>
                    <span>Spearheaded chunk split and code bundles, hitting 35% faster load times.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                  <div>
                    <span className="text-white font-bold block">Reliable Incident Response</span>
                    <span>Integrated automated system alerts, cutting Mean-Time-To-Resolution (MTTR) by 52%.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6 text-2xs text-slate-500 font-mono flex justify-between items-center">
              <span>Stack: PostgreSQL, Redis, GraphQL, React, OAuth2</span>
              <span className="text-indigo-400 font-bold uppercase tracking-wider">AWS Active</span>
            </div>
          </div>

          {/* Right Column: Dynamic Pipeline Diagram explanation */}
          <div className="lg:col-span-7 bg-slate-900/20 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
            <div>
              
              {/* Diagram Header */}
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b border-slate-800 pb-4 mb-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-100 font-mono flex items-center gap-2">
                    <Database className="w-4 h-4 text-indigo-400" />
                    Pipelining vs Sequential Ingestion Diagram
                  </h4>
                  <p className="text-3xs text-slate-500 font-mono mt-0.5">Visual representation of the network latency reduction achieved.</p>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-3xs font-bold font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  PIPELINE GAIN: 99% SPEEDUP
                </div>
              </div>

              {/* Diagrams Tracks */}
              <div className="space-y-6">
                
                {/* TRACK 1: SEQUENTIAL INGESTION (BAD) */}
                <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-900 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-3xs font-mono text-red-400 font-bold tracking-wider uppercase block">Traditional Sequential Writes</span>
                    <span className="text-3xs font-mono text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Latency: 168ms
                    </span>
                  </div>

                  {/* Flow representation */}
                  <div className="flex items-center justify-between text-2xs font-mono bg-slate-950/80 p-3 rounded-xl border border-slate-800/50">
                    <div className="space-y-1.5 w-full">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-600 font-bold shrink-0">Client ➔</span>
                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-3xs px-2 py-0.5 rounded font-bold uppercase">HSET client:1</div>
                        <div className="h-0.5 bg-slate-800 flex-1 relative min-w-[20px]" />
                        <span className="text-slate-600 font-bold">➔ Redis Cluster</span>
                        <span className="text-slate-500 font-bold">(RTT: 28ms)</span>
                      </div>
                      <div className="flex items-center gap-2 opacity-60">
                        <span className="text-slate-600 font-bold shrink-0">Client ➔</span>
                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-3xs px-2 py-0.5 rounded font-bold uppercase">LPUSH queue:1</div>
                        <div className="h-0.5 bg-slate-800 flex-1 relative min-w-[20px]" />
                        <span className="text-slate-600 font-bold">➔ Redis Cluster</span>
                        <span className="text-slate-500 font-bold">(RTT: 28ms)</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono block leading-relaxed">
                    Commands block subsequent queries. Every transaction waits for a complete network handshake round-trip (RTT), leading to overhead and database lock contention.
                  </span>
                </div>

                {/* TRACK 2: PIPELINED INGESTION (GOOD) */}
                <div className="bg-indigo-950/10 rounded-2xl p-4 border border-indigo-500/25 space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl" />
                  
                  <div className="flex justify-between items-center relative z-10">
                    <span className="text-3xs font-mono text-emerald-400 font-bold tracking-wider uppercase block">Redis Pipelining Batch Frame</span>
                    <span className="text-3xs font-mono text-emerald-400 flex items-center gap-1 font-bold">
                      <Zap className="w-3 h-3" /> Latency: 1.4ms
                    </span>
                  </div>

                  {/* Flow representation */}
                  <div className="flex items-center justify-between text-2xs font-mono bg-slate-950/80 p-3 rounded-xl border border-indigo-500/30 relative z-10">
                    <div className="flex items-center gap-2.5 w-full">
                      <span className="text-slate-600 font-bold shrink-0">Client ➔</span>
                      
                      {/* One big batch box */}
                      <div className="flex-1 flex gap-1 bg-indigo-500/15 border border-indigo-500/40 p-1.5 rounded-lg overflow-x-auto select-none">
                        <span className="bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase truncate">HSET client:1</span>
                        <span className="bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase truncate">LPUSH queue:1</span>
                        <span className="bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase truncate">SADD global:1</span>
                      </div>

                      <div className="flex items-center text-emerald-400 shrink-0">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-slate-400 font-bold shrink-0">➔ Redis Cluster</span>
                      <span className="text-emerald-400 font-bold uppercase text-3xs shrink-0">(Single Frame Flush)</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-300 font-mono block leading-relaxed relative z-10">
                    Multiple queries are packed into a single TCP frame. The server flushes the operations at memory speed in 1.4ms without blocking client event loops, saving substantial database execution overhead.
                  </span>
                </div>

              </div>

            </div>

            {/* Static HIPAA container network compliance statement */}
            <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
              <div className="text-3xs font-mono text-slate-500 flex items-center gap-1.5 uppercase">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Fully Optimized Multi-Tenant Database Topology</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
