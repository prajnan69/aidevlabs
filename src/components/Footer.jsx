import { Zap, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/5 py-12 lg:py-16">
            {/* Subtle top fade */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg">
                                <Zap className="w-4 h-4 text-white fill-white" size={16} />
                            </div>
                            <span className="text-lg font-bold tracking-tight">
                                <span className="text-white">AIDev</span>
                                <span className="gradient-text-cyan"> Labs</span>
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                            We build custom, AI-accelerated lending software for Indian NBFCs, Co-operative Banks, and FinTech startups who refuse to settle for off-the-shelf core banking solutions.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/20 flex items-center justify-center transition-all duration-200">
                                <Twitter className="w-3.5 h-3.5 text-slate-400 hover:text-cyan-400" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-500/10 border border-white/5 hover:border-blue-500/20 flex items-center justify-center transition-all duration-200">
                                <Linkedin className="w-3.5 h-3.5 text-slate-400 hover:text-blue-400" />
                            </a>
                            <a href="mailto:cprajnan@gmail.com" aria-label="Email" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-violet-500/10 border border-white/5 hover:border-violet-500/20 flex items-center justify-center transition-all duration-200">
                                <Mail className="w-3.5 h-3.5 text-slate-400 hover:text-violet-400" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Services</h4>
                        <ul className="space-y-2.5">
                            {[
                                'Loan Origination Systems (LOS)',
                                'Loan Management Systems (LMS)',
                                'AI Underwriting Engines',
                                'Collections & NPA Workflows',
                                'Borrower Portal Development',
                                'RBI Compliance Consulting',
                            ].map((s) => (
                                <li key={s}>
                                    <a href="#services" className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200">{s}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2.5">
                                <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                                <a href="tel:+918660627034" className="text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200">+91 86606 27034</a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                                <a href="mailto:cprajnan@gmail.com" className="text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200">cprajnan@gmail.com</a>
                            </li>
                        </ul>
                        <div className="pt-1 border-t border-white/5">
                            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-3 mt-3">Legal</h4>
                            <ul className="space-y-2.5">
                                {[
                                    { label: 'Privacy Policy', href: '/privacy' },
                                    { label: 'Terms of Service', href: '/terms' },
                                ].map((l) => (
                                    <li key={l.label}>
                                        <a href={l.href} className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200">{l.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-600">
                        © {year} AIDev Labs. All rights reserved. Made in India 🇮🇳
                    </p>
                    <p className="text-xs text-slate-700">
                        Built with AI. Deployed with care.
                    </p>
                </div>
            </div>
        </footer>
    );
}
