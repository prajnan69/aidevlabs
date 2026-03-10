// Placeholder abstract logos for Indian NBFC/bank social proof
function LogoPlaceholder({ index }) {
    const shapes = [
        <svg key={0} viewBox="0 0 110 32" className="h-7 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300 fill-slate-400">
            <polygon points="14,4 24,26 4,26" />
            <text x="32" y="21" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700" fill="currentColor">SHRIRAM FIN</text>
        </svg>,
        <svg key={1} viewBox="0 0 110 32" className="h-7 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300 fill-slate-400">
            <circle cx="13" cy="15" r="10" />
            <circle cx="13" cy="15" r="5" fill="#0f172a" />
            <text x="30" y="21" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700" fill="currentColor">MUTHOOT FIN</text>
        </svg>,
        <svg key={2} viewBox="0 0 100 32" className="h-7 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300 fill-slate-400">
            <rect x="2" y="8" width="13" height="16" rx="3" />
            <rect x="17" y="12" width="7" height="12" rx="2" />
            <text x="30" y="21" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700" fill="currentColor">BAJAJ FINSERV</text>
        </svg>,
        <svg key={3} viewBox="0 0 100 32" className="h-7 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300 fill-slate-400">
            <path d="M11 4 L20 15 L11 26 L2 15 Z" />
            <text x="27" y="21" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700" fill="currentColor">MANAPPURAM</text>
        </svg>,
        <svg key={4} viewBox="0 0 100 32" className="h-7 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300 fill-slate-400">
            <path d="M4 26 L13 6 L22 26 Z" fillOpacity="0.7" />
            <path d="M9 26 L18 6 L27 26 Z" fillOpacity="0.4" />
            <text x="32" y="21" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700" fill="currentColor">CHOLA FIN</text>
        </svg>,
    ];
    return shapes[index];
}

export default function TrustBanner() {
    return (
        <section className="relative py-16 border-y border-white/5 overflow-hidden">
            {/* Subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-950/20 to-transparent pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
                {/* Tagline */}
                <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                    Custom LOS &amp; LMS — engineered for Indian NBFCs, Co-operative Banks &amp; FinTechs.
                </p>

                {/* Logos */}
                <div className="flex items-center justify-center flex-wrap gap-10 lg:gap-16">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <LogoPlaceholder key={i} index={i} />
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-4">
                    {[
                        { value: '2×', label: 'Faster than Legacy Vendors' },
                        { value: '50%', label: 'Lower Cost vs IT Firms' },
                        { value: '100%', label: 'RBI-Compliant Architecture' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="text-2xl lg:text-3xl font-extrabold gradient-text-cyan">{stat.value}</p>
                            <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
