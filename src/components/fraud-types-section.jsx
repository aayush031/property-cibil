"use client"

import { FileText, Building2, Users2 } from "lucide-react"

export function FraudTypesSection() {
    const fraudTypes = [
        {
            icon: FileText,
            title: "Document Forgery",
            description: "Fake sale deeds, forged registry documents, and duplicate property papers",
            percentage: "45% of all fraud cases",
            color: "from-red-50 to-red-100 border-red-500/60",
            iconColor: "text-red-600",
            percentageColor: "text-red-700",
        },
        {
            icon: Building2,
            title: "Illegal Constructions",
            description: "Properties built without proper approvals, RERA violations, and unauthorized societies",
            percentage: "30% of all fraud cases",
            color: "from-orange-50 to-orange-100 border-orange-500/60",
            iconColor: "text-orange-600",
            percentageColor: "text-orange-700",
        },
        {
            icon: Users2,
            title: "Multiple Sales",
            description: "Same property sold to multiple buyers, chain of ownership disputes",
            percentage: "25% of all fraud cases",
            color: "from-purple-50 to-purple-100 border-purple-500/60",
            iconColor: "text-purple-600",
            percentageColor: "text-purple-700",
        },
    ]

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 overflow-hidden">

            {/* Background Accent */}
            <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-br from-blue-300 via-purple-200 to-pink-200"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Fraud Type Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                    {fraudTypes.map((fraud, index) => {
                        const IconComponent = fraud.icon
                        return (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${fraud.color} rounded-2xl border shadow-md backdrop-blur-sm p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03]`}
                            >
                                <div className="flex items-center mb-5">
                                    <div className={`p-3 rounded-xl bg-white/70 shadow-inner ${fraud.iconColor}`}>
                                        <IconComponent className="w-7 h-7" />
                                    </div>
                                    <h3 className="ml-4 text-xl font-extrabold text-gray-800">{fraud.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                                    {fraud.description}
                                </p>
                                <div className={`font-bold text-lg ${fraud.percentageColor}`}>
                                    <span className="px-3 py-1 rounded-lg bg-white/70 shadow-sm">{fraud.percentage}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Solution Section */}
                <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl shadow-xl p-10 md:p-14 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-block px-5 py-2 mb-6 bg-white/20 rounded-full text-sm font-semibold tracking-wide uppercase">
                            Our Solution
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-6 leading-snug">
                            How PropertyCibil Protects You
                        </h2>
                        <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                            <span className="bg-white/20 px-2 py-1 rounded-md shadow-sm">Advanced AI technology</span>{" "}
                            meets expert verification to give you{" "}
                            <span className="underline underline-offset-4 decoration-yellow-300">complete confidence</span>{" "}
                            in every property transaction.
                        </p>
                        <button className="group bg-white text-blue-700 font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                            Start Verification Now
                            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}
