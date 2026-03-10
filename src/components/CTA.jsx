import { ArrowRight, CalendarCheck } from 'lucide-react';
import { useContactAction } from '../hooks/useContactAction';

export default function CTA({ openModal }) {
    const handleSession = useContactAction(openModal, 'mailto:cprajnan@gmail.com?subject=Architecture%20Mapping%20Session%20Request');
    return (
        <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="relative rounded-3xl overflow-hidden">
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/60 to-slate-900" />

                    {/* Blue glow in center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-blue-600/20 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-48 bg-cyan-500/10 rounded-full blur-2xl" />

                    {/* Border glow */}
                    <div className="absolute inset-0 rounded-3xl border border-blue-500/20" />

                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl" />
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-violet-500/10 to-transparent rounded-3xl" />

                    {/* Scan line effect */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-10"
                        style={{
                            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.03) 2px, rgba(34,211,238,0.03) 4px)`,
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 py-16 px-8 lg:px-16 text-center space-y-8">
                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg mx-auto"
                            style={{ boxShadow: '0 0 40px rgba(34,211,238,0.3)' }}>
                            <CalendarCheck className="w-8 h-8 text-white" />
                        </div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                                Ready to modernize your{' '}
                                <span className="gradient-text">complete lending stack?</span>
                            </h2>
                            <p className="text-lg text-slate-400 max-w-xl mx-auto">
                                Book a free strategy call to map out your custom LOS + LMS architecture.
                                Enterprise builds starting at{' '}
                                <span className="text-white font-semibold">₹8 Lakhs</span>.
                                No fluff—just a technical deep-dive into your full lending workflow.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                id="bottom-cta"
                                href="#"
                                onClick={handleSession}
                                className="btn-primary flex items-center gap-2 text-base"
                            >
                                Book Architecture Mapping Session
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Micro copy */}
                        <p className="text-xs text-slate-500">
                            30-minute call · No sales pressure · Walk away with a preliminary architecture outline
                        </p>

                        {/* Features row */}
                        <div className="flex flex-wrap justify-center gap-6 pt-2">
                            {[
                                '✓ Custom LOS — Application to sanction',
                                '✓ Custom LMS — Disbursement to NOC',
                                '✓ RBI-compliant architecture',
                                '✓ Full source code ownership',
                            ].map((f) => (
                                <span key={f} className="text-sm text-slate-400">{f}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
