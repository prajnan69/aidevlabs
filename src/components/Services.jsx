import { Clock, ShieldCheck, Settings, Cpu, RefreshCcw, BarChart3, FileText } from 'lucide-react';

const losCards = [
    {
        icon: Clock,
        iconColor: 'text-cyan-400',
        iconBg: 'bg-cyan-400/10 border-cyan-400/20',
        title: 'AI-Accelerated Speed',
        subtitle: 'LOS — Fast time to market',
        body: "Traditional IT vendors take 18+ months. Our AI-assisted workflow and pre-built FinTech modules cut development time in half—so you launch before the next product cycle.",
    },
    {
        icon: FileText,
        iconColor: 'text-blue-400',
        iconBg: 'bg-blue-400/10 border-blue-400/20',
        title: 'Custom Underwriting Engine',
        subtitle: 'LOS — Intelligent credit decisioning',
        body: "No rigid scorecard templates. We build bureau-integrated underwriting with CIBIL, CRIF Highmark, and Experian India—plus custom rule engines matching your credit policy.",
    },
    {
        icon: ShieldCheck,
        iconColor: 'text-emerald-400',
        iconBg: 'bg-emerald-400/10 border-emerald-400/20',
        title: 'RBI & Regulatory Compliance',
        subtitle: 'LOS — Compliance-ready architecture',
        body: "Built aligned with RBI Master Directions, FAIR Practices Code, KYC/AML norms, and data localisation requirements—so your compliance team signs off without surprises.",
    },
];

const lmsCards = [
    {
        icon: RefreshCcw,
        iconColor: 'text-violet-400',
        iconBg: 'bg-violet-400/10 border-violet-400/20',
        title: 'Full Loan Lifecycle',
        subtitle: 'LMS — Disbursement to closure',
        body: "From disbursement via NEFT/IMPS/UPI to final NOC generation. Automated EMI scheduling, prepayment handling, foreclosure, and loan restructuring—fully auditable.",
    },
    {
        icon: BarChart3,
        iconColor: 'text-amber-400',
        iconBg: 'bg-amber-400/10 border-amber-400/20',
        title: 'Collections & NPA Management',
        subtitle: 'LMS — Risk & recovery',
        body: "Automated delinquency tracking, NPA classification (RBI norms), collections workflows, and regulatory MIS reports. Convert risky accounts into resolved ones faster.",
    },
    {
        icon: Settings,
        iconColor: 'text-pink-400',
        iconBg: 'bg-pink-400/10 border-pink-400/20',
        title: 'Borrower Portal & API Layer',
        subtitle: 'LMS — Customer experience',
        body: "White-label borrower self-service portals for EMI payments, eStatement download, and document upload—plus open REST APIs for CBS/core banking and third-party integrations.",
    },
];

const emsCards = [
    {
        icon: FileText,
        iconColor: 'text-emerald-400',
        iconBg: 'bg-emerald-400/10 border-emerald-400/20',
        title: 'Leaves & Attendance',
        subtitle: 'EMS — Workforce tracking',
        body: "Automated leave application, approval workflows, and attendance tracking. Say goodbye to manual spreadsheets and tracking errors.",
    },
    {
        icon: BarChart3,
        iconColor: 'text-blue-400',
        iconBg: 'bg-blue-400/10 border-blue-400/20',
        title: 'Automated Payroll',
        subtitle: 'EMS — Payslips & settlements',
        body: "One-click payroll generation, automated tax deductions, and instant payslip distribution to employees. Maintain perfect compliance.",
    },
    {
        icon: Settings,
        iconColor: 'text-violet-400',
        iconBg: 'bg-violet-400/10 border-violet-400/20',
        title: 'In-house Management',
        subtitle: 'EMS — Core HR operations',
        body: "Centralized employee directory, performance reviews, and asset management. Everything you need to manage your growing team securely and efficiently.",
    },
];

function CardGrid({ cards }) {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => {
                const Icon = card.icon;
                return (
                    <div key={card.title} className="card-glow rounded-2xl p-6 space-y-4 group">
                        <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl border ${card.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                            <Icon className={`w-5 h-5 ${card.iconColor}`} />
                        </div>
                        <div className="space-y-2">
                            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{card.subtitle}</p>
                            <h3 className="text-lg font-bold text-white">{card.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{card.body}</p>
                        </div>
                        <div className={`h-px w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${card.iconColor === 'text-cyan-400' ? 'from-cyan-400/50 to-transparent' :
                                card.iconColor === 'text-blue-400' ? 'from-blue-400/50 to-transparent' :
                                    card.iconColor === 'text-violet-400' ? 'from-violet-400/50 to-transparent' :
                                        card.iconColor === 'text-emerald-400' ? 'from-emerald-400/50 to-transparent' :
                                            card.iconColor === 'text-amber-400' ? 'from-amber-400/50 to-transparent' :
                                                'from-pink-400/50 to-transparent'
                            }`} />
                    </div>
                );
            })}
        </div>
    );
}

function SectionLabel({ color, label }) {
    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest ${color}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {label}
        </div>
    );
}

export default function Services() {
    return (
        <section id="services" className="relative py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
                {/* Section header */}
                <div className="text-center space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Past Capabilities</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        What we have{' '}
                        <span className="gradient-text">done before.</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        We build robust, scalable applications tailored to custom requirements. From financial engines to internal management tools.
                    </p>
                </div>

                {/* LOS block */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <SectionLabel color="text-cyan-400 border-cyan-400/30 bg-cyan-400/10" label="Loan Origination System (LOS)" />
                        <div className="flex-1 h-px bg-white/5" />
                    </div>
                    <p className="text-sm text-slate-500 max-w-xl">
                        The front door of your lending operation. Capture applications digitally, assess creditworthiness with bureau integrations, and make RBI-compliant decisions—all automated and tailored to your underwriting policy.
                    </p>
                    <CardGrid cards={losCards} />
                </div>

                {/* LMS block */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <SectionLabel color="text-violet-400 border-violet-400/30 bg-violet-400/10" label="Loan Management System (LMS)" />
                        <div className="flex-1 h-px bg-white/5" />
                    </div>
                    <p className="text-sm text-slate-500 max-w-xl">
                        The engine running after sanction. Disburse via UPI/NEFT/IMPS, collect EMIs, track NPA, generate MIS reports, and keep borrowers self-served—from disbursement to NOC.
                    </p>
                    <CardGrid cards={lmsCards} />
                </div>

                {/* EMS block */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <SectionLabel color="text-emerald-400 border-emerald-400/30 bg-emerald-400/10" label="End-to-End Employee Management System" />
                        <div className="flex-1 h-px bg-white/5" />
                    </div>
                    <p className="text-sm text-slate-500 max-w-xl">
                        A centralized platform for managing leaves, processing payroll with automated payslips, and handling comprehensive in-house operations. Built for complete administrative command.
                    </p>
                    <CardGrid cards={emsCards} />
                </div>
            </div>
        </section>
    );
}
