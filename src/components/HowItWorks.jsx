import { MapPin, Code2, Rocket, ChevronRight } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: MapPin,
        iconColor: 'text-cyan-400',
        gradientFrom: 'from-cyan-500',
        gradientTo: 'to-blue-600',
        title: 'Requirement Mapping',
        subtitle: 'Week 1',
        description:
            'We deep dive into your manual processes and identify bottlenecks. Together, we map out how AI agents and custom software can digitize and automate your workflow.',
        bullets: ['Full system architecture mapping', 'AI integration points identified', 'Workflow optimization plan', 'Project scope, milestones & pricing'],
    },
    {
        number: '02',
        icon: Code2,
        iconColor: 'text-blue-400',
        gradientFrom: 'from-blue-500',
        gradientTo: 'to-violet-600',
        title: 'Rapid AI-Assisted Build',
        subtitle: 'Week 2-4',
        description:
            'We build your solution using our AI-accelerated frameworks. Whether it’s an internal portal, an employee management system, or a customer-facing app, we deliver functional software in record time.',
        bullets: ['Custom AI Agents & Integrations', 'Core application development', 'Rapid prototyping', 'Test-driven, fully documented codebase'],
    },
    {
        number: '03',
        icon: Rocket,
        iconColor: 'text-violet-400',
        gradientFrom: 'from-violet-500',
        gradientTo: 'to-pink-600',
        title: 'Upgradation & Handoff',
        subtitle: 'Week 5',
        description:
            'Launch your platform on scalable cloud infrastructure. You transition from simple digitalization to true upgradation. Full handoff—your team gets source code, documentation, and support.',
        bullets: ['Cloud deployment & optimization', 'True operational upgradation', 'Post-launch support', 'Full source code & knowledge transfer'],
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center space-y-4 mb-20">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">The Process</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        From Digitalization to{' '}
                        <span className="gradient-text">Upgradation</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-xl mx-auto">
                        A proven fast-track methodology for turning any generic team into an enterprise powerhouse.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connector line (desktop) */}
                    <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[calc(100%-12rem)] h-px">
                        <div className="w-full h-full bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-violet-500/30" />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.title} className="relative group">
                                    {i < steps.length - 1 && (
                                        <div className="lg:hidden flex justify-center my-4">
                                            <ChevronRight className="w-5 h-5 text-slate-600 rotate-90" />
                                        </div>
                                    )}

                                    <div className="card-glow rounded-2xl p-7 space-y-5 h-full">
                                        {/* Step number + icon */}
                                        <div className="flex items-center gap-4">
                                            <div className={`relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} shadow-lg`}>
                                                <Icon className="w-7 h-7 text-white" />
                                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} blur-xl opacity-50 group-hover:opacity-80 transition-opacity`} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-mono text-slate-500">{step.number} / 03</p>
                                                <p className="text-xs font-semibold text-slate-400">{step.subtitle}</p>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                            <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                                        </div>

                                        {/* Bullets */}
                                        <ul className="space-y-2">
                                            {step.bullets.map((b) => (
                                                <li key={b} className="flex items-center gap-2.5 text-sm text-slate-300">
                                                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} flex-shrink-0`} />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
