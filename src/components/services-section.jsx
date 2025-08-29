"use client"

import { Search, FileCheck, TrendingUp, AlertTriangle, Users, Shield } from "lucide-react"

export default function ServicesSection() {
    const services = [
        {
            icon: Search,
            title: "Smart Property Search",
            description:
                "Technology-powered search across 5M+ properties with intelligent filters for location, price, legal status, and credibility scores.",
            features: ["Registry number search", "Society verification", "Owner history"],
            color: "bg-blue-500",
            featureColors: ["text-blue-600", "text-blue-600", "text-blue-600"],
        },
        {
            icon: FileCheck,
            title: "Document Verification",
            description:
                "Professional verification of sale deeds, registry documents, NOCs, and society approvals by certified experts.",
            features: ["Registry verification", "RERA compliance", "Legal clearance"],
            color: "bg-green-500",
            featureColors: ["text-green-600", "text-green-600", "text-green-600"],
        },
        {
            icon: TrendingUp,
            title: "Smart Credibility Scoring",
            description:
                "Proprietary algorithm analyzing 50+ factors including legal status, ownership chain, and market reputation.",
            features: ["Real-time scoring", "Risk assessment", "Market analysis"],
            color: "bg-purple-500",
            featureColors: ["text-purple-600", "text-purple-600", "text-purple-600"],
        },
        {
            icon: AlertTriangle,
            title: "Fraud Detection Engine",
            description:
                "Advanced algorithms detecting patterns of fraud, ongoing disputes, and legal complications in real-time.",
            features: ["Dispute alerts", "Court case tracking", "Fraud patterns"],
            color: "bg-red-500",
            featureColors: ["text-red-600", "text-red-600", "text-red-600"],
        },
        {
            icon: Users,
            title: "Expert Consultation",
            description:
                "Access to property lawyers, chartered accountants, and verification experts for personalized guidance.",
            features: ["Legal consultation", "Due diligence", "Expert opinions"],
            color: "bg-yellow-500",
            featureColors: ["text-yellow-600", "text-yellow-600", "text-yellow-600"],
        },
        {
            icon: Shield,
            title: "Premium Analytics",
            description:
                "Detailed verification reports with ownership history, legal timeline, market analysis, and investment recommendations.",
            features: ["Ownership chain", "Market trends", "ROI analysis"],
            color: "bg-indigo-500",
            featureColors: ["text-indigo-600", "text-indigo-600", "text-indigo-600"],
        },
    ]

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-block bg-primary/10 px-6 py-3 rounded-full text-primary font-semibold mb-6">
                        🚀 Complete Property Intelligence Platform
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                        <span className="block">Everything You Need for</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                            Smart Property Decisions
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Comprehensive property intelligence backed by{" "}
                        <span className="text-primary font-semibold">advanced technology</span>
                        and expert verification for complete peace of mind.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => {
                        const IconComponent = service.icon
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 group relative overflow-hidden"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Icon and Title */}
                                <div className="flex items-center mb-6 relative z-10">
                                    <div
                                        className={`${service.color} p-4 rounded-xl mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                                    >
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground mb-8 leading-relaxed text-lg relative z-10">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-3 relative z-10">
                                    {service.features.map((feature, featureIndex) => (
                                        <div
                                            key={featureIndex}
                                            className="flex items-center group-hover:translate-x-1 transition-transform duration-300"
                                        >
                                            <div className="w-3 h-3 bg-gradient-to-r from-primary to-blue-500 rounded-full mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                                            <span className={`font-medium ${service.featureColors[featureIndex]} text-lg`}>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="text-center mt-20">
                    <div className="bg-blue-700 text-white rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Property Investment?</h3>
                            <p className="text-blue-100 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                                Join thousands of smart property buyers who trust PropertyCibil for
                                <span className="px-3 rounded-lg font-bold text-red-900">
                                    fraud-free property transactions
                                </span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button className="border-2 border-white text-primary hover:bg-gray-100 hover:text-yellow-500 hover:rounded-2xl px-10 py-5 rounded-xl text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    🚀 Start Free Verification
                                </button>
                                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-5 rounded-xl text-xl  hover:text-yellow-500 hover:rounded-2xl font-bold transition-all duration-300 transform hover:scale-105">
                                    💬 Talk to Expert
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
