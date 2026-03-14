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
                                Have a custom requirement?{' '}
                                <span className="gradient-text">Let's make it happen.</span>
                            </h2>
                            <p className="text-lg text-slate-400 max-w-xl mx-auto">
                                Whatever your workflow needs, from AI-powered processors to internal management tools.
                                Tell us the problem, and we'll build the solution faster, better, and cheaper.
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
                                Get on a Call
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Micro copy */}
                        <p className="text-xs text-slate-500">
                            30-minute call · Discuss your custom needs · Walk away with a roadmap
                        </p>

                        {/* Features row */}
                        <div className="flex flex-wrap justify-center gap-6 pt-2">
                            {[
                                '✓ End-to-End Development',
                                '✓ AI Agent Integration',
                                '✓ Tailored to Your Needs',
                                '✓ Full Source Code Ownership',
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
