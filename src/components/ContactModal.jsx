import { useEffect, useRef } from 'react';
import { X, Phone, Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const PHONE = '+91 86606 27034';
const EMAIL = 'cprajnan@gmail.com';

function CopyButton({ text }) {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    return (
        <button
            onClick={handleCopy}
            className="ml-auto p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-all duration-200"
            title="Copy"
        >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
    );
}

export default function ContactModal({ isOpen, onClose }) {
    const ref = useRef(null);

    // Close on outside click
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose(); };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [isOpen, onClose]);

    // Close on Escape
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal card */}
            <div
                ref={ref}
                className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl overflow-hidden"
                style={{ boxShadow: '0 0 60px rgba(34,211,238,0.15), 0 25px 50px rgba(0,0,0,0.5)' }}
            >
                {/* Top glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4">
                    <div>
                        <h3 className="text-base font-bold text-white">Get in Touch</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Reach out to book your free session</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Divider */}
                <div className="mx-6 h-px bg-white/5" />

                {/* Contact rows */}
                <div className="px-6 py-5 space-y-3">
                    {/* Phone */}
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-all duration-200 group">
                        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-slate-500 mb-0.5">Phone / WhatsApp</p>
                            <a
                                href="tel:+918660627034"
                                className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors duration-200"
                            >
                                {PHONE}
                            </a>
                        </div>
                        <CopyButton text={PHONE.replace(/\s/g, '')} />
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/20 transition-all duration-200 group">
                        <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-4 h-4 text-violet-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-slate-500 mb-0.5">Email</p>
                            <a
                                href="mailto:cprajnan@gmail.com?subject=Architecture%20Mapping%20Session%20Request&body=Hi%2C%20I%27d%20like%20to%20book%20an%20Architecture%20Mapping%20Session%20for%20my%20LOS%2FLMS%20project."
                                className="text-sm font-semibold text-white hover:text-violet-400 transition-colors duration-200 break-all"
                            >
                                {EMAIL}
                            </a>
                        </div>
                        <CopyButton text={EMAIL} />
                    </div>
                </div>

                {/* Footer note */}
                <div className="px-6 pb-6">
                    <p className="text-xs text-center text-slate-600">
                        30-min free strategy call · No obligation
                    </p>
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
            </div>
        </div>
    );
}
