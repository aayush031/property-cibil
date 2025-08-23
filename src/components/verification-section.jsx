"use client"

import { Clock, Database, AlertTriangle, Users } from "lucide-react"

export function VerificationSection() {
    const features = [
        {
            icon: Clock,
            title: "Instant Verification",
            description:
                "Get property credibility scores in under 3 minutes using our advanced technology-powered verification engine",
            color: "bg-blue-500",
        },
        {
            icon: Database,
            title: "Government Database Access",
            description: "Direct integration with registry offices, RERA database, and court records across 15+ states",
            color: "bg-green-500",
        },
        {
            icon: AlertTriangle,
            title: "Real-time Fraud Alerts",
            description: "Immediate warnings for disputed properties, ongoing legal cases, and known fraud patterns",
            color: "bg-red-500",
        },
        {
            icon: Users,
            title: "Expert Verification Team",
            description: "Manual verification by legal experts and property consultants for complex cases",
            color: "bg-purple-500",
        },
    ]

    const process = [
        {
            step: "1",
            title: "Property Search",
            description: "Enter property details or registry number",
            color: "bg-green-500",
        },
        {
            step: "2",
            title: "Smart Analysis",
            description: "Cross-check with 12+ government databases",
            color: "bg-green-500",
        },
        {
            step: "3",
            title: "Expert Review",
            description: "Manual verification for complex cases",
            color: "bg-green-500",
        },
        {
            step: "4",
            title: "Credibility Score",
            description: "Get comprehensive verification report",
            color: "bg-green-500",
        },
    ]

    return (
        <section className="py-20 bg-gradient-to-br from-primary via-blue-700 to-blue-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Features */}
                    <div className="space-y-8">
                        <div className="text-center lg:text-left">
                            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                                🏢 Comprehensive Property Intelligence
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Advanced Property
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                                    Verification System
                                </span>
                            </h2>
                            <p className="text-blue-100 text-xl leading-relaxed">
                                Everything you need to make{" "}
                                <span className="text-yellow-300 font-semibold">informed property decisions</span>, all in one
                                intelligent platform
                            </p>
                        </div>

                        <div className="space-y-6">
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon
                                return (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-6 group p-4 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div
                                            className={`${feature.color} p-4 rounded-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                                        >
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-blue-100 leading-relaxed text-lg">{feature.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Side - Process */}
                    <div className="relative">
                        <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                            <div className="text-center mb-10">
                                <div className="inline-block bg-gradient-to-r from-green-400 to-blue-400 px-6 py-3 rounded-full text-white font-bold text-lg mb-4">
                                    ⚡ Verification Process
                                </div>
                                <h3 className="text-2xl font-bold">
                                    Get Results in <span className="text-yellow-300">3 Minutes</span>
                                </h3>
                            </div>

                            <div className="space-y-8">
                                {process.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-6 group relative"
                                        style={{ animationDelay: `${index * 0.2}s` }}
                                    >
                                        <div className="relative">
                                            <div
                                                className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-all duration-300 shadow-lg bg-gradient-to-br from-green-400 to-green-600`}
                                            >
                                                {item.step}
                                            </div>
                                            {index < process.length - 1 && (
                                                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-green-400 to-transparent"></div>
                                            )}
                                        </div>
                                        <div className="flex-1 bg-white/10 rounded-xl p-4 group-hover:bg-white/20 transition-all duration-300">
                                            <h4 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-blue-100 text-lg">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-8">
                                <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
                                    Start Verification Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
