import { ArrowRight, Sparkles } from 'lucide-react';
import { useContactAction } from '../hooks/useContactAction';

// Animated dashboard mockup
function DashboardMockup() {
    return (
        <div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
            {/* Glow orb behind */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl scale-110" />

            {/* Main card */}
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden animate-float">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-slate-800/50">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-xs text-slate-400 font-mono">AgentOS — Dashboard</span>
                </div>

                {/* Dashboard content */}
                <div className="p-5 space-y-4">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { label: 'Tasks Handled', value: '12,450', color: 'text-cyan-400' },
                            { label: 'Time Saved', value: '420 hrs', color: 'text-emerald-400' },
                            { label: 'Cost Reduced', value: '68%', color: 'text-violet-400' },
                        ].map((stat) => (
                            <div key={stat.label} className="rounded-xl bg-slate-800/60 p-3 border border-white/5">
                                <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                                <p className={`text-sm font-bold ${stat.color}`}>{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Chart */}
                    <div className="rounded-xl bg-slate-800/60 p-4 border border-white/5">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-slate-400 font-medium">Productivity (30d)</span>
                            <span className="text-xs text-emerald-400">↑ 312%</span>
                        </div>
                        <svg viewBox="0 0 220 60" className="w-full h-14">
                            <defs>
                                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0,55 L20,45 L45,38 L70,30 L95,22 L120,28 L145,15 L170,8 L195,4 L220,2 L220,60 L0,60 Z"
                                fill="url(#chartGrad)"
                            />
                            <path
                                d="M0,55 L20,45 L45,38 L70,30 L95,22 L120,28 L145,15 L170,8 L195,4 L220,2"
                                fill="none"
                                stroke="#22d3ee"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <circle cx="220" cy="2" r="4" fill="#22d3ee" />
                            <circle cx="220" cy="2" r="8" fill="#22d3ee" fillOpacity="0.2" />
                        </svg>
                    </div>

                    {/* Applications list */}
                    <div className="rounded-xl bg-slate-800/60 border border-white/5 overflow-hidden">
                        <div className="px-4 py-2.5 border-b border-white/5">
                            <span className="text-xs font-medium text-slate-400">Active AI Agents</span>
                        </div>
                        {[
                            { name: 'Customer Support Agent', amount: '2,490 queries/day', status: 'Online', color: 'text-emerald-400 bg-emerald-400/10' },
                            { name: 'Data Processing Agent', amount: '1.2M rows/hr', status: 'Processing', color: 'text-amber-400 bg-amber-400/10' },
                            { name: 'Sales Outreach Agent', amount: '500 leads/day', status: 'Online', color: 'text-emerald-400 bg-emerald-400/10' },
                        ].map((app) => (
                            <div key={app.name} className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 last:border-0">
                                <div>
                                    <p className="text-xs font-medium text-white">{app.name}</p>
                                    <p className="text-xs text-slate-500">{app.amount}</p>
                                </div>
                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${app.color}`}>
                                    {app.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating code snippet */}
            <div className="absolute -bottom-4 -left-6 rounded-xl border border-cyan-500/20 bg-slate-900/90 backdrop-blur-xl p-3 text-xs font-mono shadow-xl animate-float-slow">
                <span className="text-slate-500">{'// '}</span>
                <span className="text-cyan-400">Team Size</span>
                <br />
                <span className="text-slate-500">employees</span>
                <span className="text-slate-300">{': '}</span>
                <span className="text-emerald-400">3</span>
                <span className="text-slate-300">{', '}</span>
                <span className="text-violet-400">output: enterprise</span>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-3 -right-4 rounded-xl border border-blue-500/20 bg-slate-900/90 backdrop-blur-xl px-3 py-2 text-xs shadow-xl animate-float">
                <span className="text-blue-400 font-semibold">⚡ 10x</span>
                <span className="text-slate-400"> Faster</span>
            </div>
        </div>
    );
}

export default function Hero({ openModal }) {
    const handleSession = useContactAction(openModal, 'mailto:cprajnan@gmail.com?subject=Architecture%20Mapping%20Session%20Request');
    return (
        <section className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-r from-cyan-600/10 via-blue-600/8 to-violet-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `linear-gradient(rgba(34,211,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
                            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                            <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">
                                From Digitalization To Upgradation
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
                                A company of 3 operating{' '}
                                <span className="gradient-text">like an Enterprise</span>{' '}
                                with AI Agents.
                            </h1>
                            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                                We help small teams build complex capabilities{' '}
                                <span className="text-slate-200 font-medium">faster, better, and cheaper.</span>{' '}
                                Empower your workflow with AI agents and custom-built systems, without bloated IT vendor pricing.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <a
                                id="hero-primary-cta"
                                href="#"
                                onClick={handleSession}
                                className="btn-primary flex items-center gap-2 text-base"
                            >
                                Contact us for Custom Requirements
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <div className="flex items-center gap-2 text-sm text-slate-500 mt-1 sm:mt-3">
                                <div className="flex -space-x-2">
                                    {['cyan', 'blue', 'violet'].map((c, i) => (
                                        <div
                                            key={i}
                                            className={`w-7 h-7 rounded-full border-2 border-slate-950 bg-gradient-to-br ${c === 'cyan' ? 'from-cyan-400 to-cyan-600' : c === 'blue' ? 'from-blue-400 to-blue-600' : 'from-violet-400 to-violet-600'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span>Free discovery call</span>
                            </div>
                        </div>

                        {/* Trust signals */}
                        <div className="flex flex-wrap gap-6 pt-2">
                            {[
                                { icon: '⚡', text: 'Faster Building' },
                                { icon: '💎', text: 'Better Quality' },
                                { icon: '💰', text: 'Cheaper Costs' },
                                { icon: '🚀', text: 'AI Native' },
                            ].map((item) => (
                                <div key={item.text} className="flex items-center gap-2 text-sm text-slate-400">
                                    <span>{item.icon}</span>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Dashboard mockup */}
                    <DashboardMockup />
                </div>
            </div>
        </section>
    );
}
