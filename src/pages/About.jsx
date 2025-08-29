import React from "react";

export default function About() {
    return (
        <main className="min-h-screen bg-white text-slate-900">

            <section className="flex flex-col items-center justify-center text-center py-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50  text-xs font-semibold text-indigo-700">
                    About PropertyCibil
                </span>
                <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold">
                    India’s Most Trusted Property Verification Platform
                </h1>
                <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600">
                    Buying property in India should be safe, transparent, and worry-free. At PropertyCibil, we’ve been building trust since 2025 by protecting homebuyers and investors against real estate fraud.
                </p>
            </section>


            <section className="flex flex-col items-center text-center py-12 px-4">
                <h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
                <p className="mt-4 max-w-2xl text-slate-700">
                    We aim to create a transparent, secure, and efficient real estate ecosystem in India. By combining legal expertise, advanced technology, and AI-driven fraud detection, we help buyers make informed property decisions.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-6">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 max-w-xs text-left">
                        <h3 className="font-semibold flex items-center gap-2"> Trust & Security</h3>
                        <p className="text-sm text-slate-600 mt-1">
                            Every property undergoes verification checks to ensure authenticity and eliminate fraud risks.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 max-w-xs text-left">
                        <h3 className="font-semibold flex items-center gap-2"> Customer First</h3>
                        <p className="text-sm text-slate-600 mt-1">
                            24/7 support and easy-to-understand reports keep you informed at every step.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 max-w-xs text-left">
                        <h3 className="font-semibold flex items-center gap-2"> Innovation</h3>
                        <p className="text-sm text-slate-600 mt-1">
                            Data-driven insights, smart algorithms, and legal intelligence deliver accurate results—faster.
                        </p>
                    </div>
                </div>
            </section>


            <section className="flex flex-col items-center text-center py-12 px-4 bg-indigo-50">
                <h2 className="text-2xl sm:text-3xl font-bold">Our Impact in Indian Real Estate</h2>
                <div className="mt-6 flex flex-wrap justify-center gap-6">
                    {[
                        { label: "Verified Properties", value: "250+", note: "across multiple cities" },
                        { label: "Frauds Prevented", value: "10+", note: "and counting" },
                        { label: "Active Customers", value: "100+", note: "choosing us for peace of mind" },
                        { label: "City Coverage", value: "2", note: "key Indian cities (expanding fast)" },
                    ].map((item) => (
                        <div key={item.label} className="rounded-2xl border border-slate-200 p-6 shadow-sm text-center">
                            <div className="text-3xl font-extrabold">{item.value}</div>
                            <div className="mt-1 font-semibold">{item.label}</div>
                            <div className="mt-1 text-sm text-slate-500">{item.note}</div>
                        </div>
                    ))}
                </div>
            </section>


            <section className="flex flex-col items-center text-center py-12 px-4">
                <h2 className="text-2xl sm:text-3xl font-bold">Meet Our Leadership Team</h2>
                <div className="mt-6 flex flex-wrap justify-center gap-6">
                    {[
                        { name: "Bhuvnesh Gupta", title: "CEO & Founder", bio: "15+ years in Real Estate expertise" },
                        { name: "Priya Sharma", title: "CTO", bio: "Leading Property Tech innovation with 12+ years in PropTech" },
                        { name: "Amit Patel", title: "Head of Verification", bio: "10+ years in Legal & Compliance services" },
                        { name: "Sneha Reddy", title: "Data Analytics Lead", bio: "8+ years in AI & Data Science" },
                    ].map((p) => (
                        <div key={p.name} className="rounded-2xl border border-slate-200 p-6 shadow-sm max-w-xs text-left">
                            <h3 className="font-semibold">{p.name}</h3>
                            <p className="text-sm text-indigo-700 font-medium">{p.title}</p>
                            <p className="mt-1 text-sm text-slate-600">{p.bio}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section className="flex flex-col items-center justify-center py-16 bg-indigo-50 text-center">
                <h2 className="text-3xl font-bold mb-4">Get in Touch with PropertyCibil</h2>
                <p className="text-slate-700 mb-6 max-w-xl">
                    Looking for property verification in India? Have questions about safe property transactions? We’re here to help you 24/7.
                </p>

                <div className="bg-white border rounded-2xl p-6 shadow-md w-full max-w-md">
                    <h3 className="text-lg font-bold mb-2">Need a report quickly?</h3>
                    <p className="text-sm text-slate-600 mb-4">
                        Start your verification request and get an easy-to-understand report with legal checks, AI-driven fraud detection, and actionable insights.
                    </p>
                    <a
                        href="#/verify"
                        className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
                    >
                        Start Verification
                    </a>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center py-16 bg-indigo-50 text-center space-y-6">
                <h2 className="text-3xl font-bold">Get in Touch with PropertyCibil</h2>
                <p className="text-slate-700 max-w-lg">
                    Looking for property verification in India? Have questions about safe property transactions? We’re here to help you 24/7.
                </p>

                <div className="bg-white border rounded-2xl p-6 shadow-md max-w-md w-full text-left">
                    <p className="mb-2 font-semibold"> Office:</p>
                    <p className="mb-4 text-sm">
                        P3D PROPERTY SOLUTIONS PVT LTD<br />
                        F-26, Gautam Marg, Sector 6, Vaishali Nagar,<br />
                        Jaipur, Rajasthan – 302021
                    </p>

                    <p className="mb-2 font-semibold"> Phone:</p>
                    <p className="mb-4 text-sm">+91 90012 66664 (Available 24/7)</p>

                    <p className="mb-2 font-semibold"> Email:</p>
                    <ul className="mb-4 text-sm list-disc list-inside">
                        <li>info@propertycibil.com</li>
                        <li>support@propertycibil.com</li>
                    </ul>

                    <p className="flex flex-col items-centre justify-center mb-2 font-semibold">🌐 Follow PropertyCibil Online:</p>
                    <div className="flex justify-center gap-4 text-sm">
                        <a href="https://www.instagram.com/propertycibil/" target="_blank" rel="noreferrer" className="text-indigo-700 hover:underline">Instagram</a>
                        <a href="https://www.linkedin.com/company/propertycibil-com/posts/?feedView=all" target="_blank" rel="noreferrer" className="text-indigo-700 hover:underline">LinkedIn</a>
                    </div>
                </div>
            </section>


        </main>
    );
}
