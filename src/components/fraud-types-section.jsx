"use client"

import { FileText, Building2, Users2 } from "lucide-react"

export function FraudTypesSection() {
    const fraudTypes = [
        {
            icon: FileText,
            title: "Document Forgery",
            description: "Fake sale deeds, forged registry documents, and duplicate property papers",
            percentage: "45% of all fraud cases",
            color: "border-red-500 bg-red-50",
            iconColor: "text-red-600",
            percentageColor: "text-red-600",
        },
        {
            icon: Building2,
            title: "Illegal Constructions",
            description: "Properties built without proper approvals, RERA violations, and unauthorized societies",
            percentage: "30% of all fraud cases",
            color: "border-orange-500 bg-orange-50",
            iconColor: "text-orange-600",
            percentageColor: "text-orange-600",
        },
        {
            icon: Users2,
            title: "Multiple Sales",
            description: "Same property sold to multiple buyers, chain of ownership disputes",
            percentage: "25% of all fraud cases",
            color: "border-purple-500 bg-purple-50",
            iconColor: "text-purple-600",
            percentageColor: "text-purple-600",
        },
    ]

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Fraud Types Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {fraudTypes.map((fraud, index) => {
                        const IconComponent = fraud.icon
                        return (
                            <div
                                key={index}
                                className={`${fraud.color} rounded-xl p-6 border-l-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                            >
                                <div className="flex items-center mb-4">
                                    <IconComponent className={`w-8 h-8 ${fraud.iconColor} mr-3`} />
                                    <h3 className="text-xl font-bold text-foreground">{fraud.title}</h3>
                                </div>
                                <p className="text-muted-foreground mb-4 leading-relaxed">{fraud.description}</p>
                                <div className={`${fraud.percentageColor} font-bold text-lg`}>
                                    <span className="highlight">{fraud.percentage}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Solution Section */}
                <div className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white/20 text-white px-4 py-2 rounded-full inline-block mb-6">
                            <span className="font-semibold">Our Solution</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">How PropertyCibil Protects You</h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            <span className="bg-white/20 px-2 py-1 rounded">Advanced AI technology</span> meets expert verification to
                            give you complete confidence in every property transaction
                        </p>
                        <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                            Start Verification Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
