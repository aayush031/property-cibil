"use client"

import { CheckCircle, MapPin, Building, Navigation, Users, Camera, RotateCcw } from "lucide-react"

export function FeaturesSection() {
    const features = [
        {
            icon: MapPin,
            title: "Khasra mapping and land boundaries",
            description: "Verified land parcel mapping",
            color: "text-blue-600",
        },
        {
            icon: Building,
            title: "JDA land use classification",
            description: "Residential/commercial/illegal use detection",
            color: "text-green-600",
        },
        {
            icon: Navigation,
            title: "Road intersections over the property",
            description: "Detect if any road intersects the plot",
            color: "text-purple-600",
        },
        {
            icon: Users,
            title: "Society credibility analysis",
            description: "Analysis of society's legal and reputational background",
            color: "text-orange-600",
        },
        {
            icon: Camera,
            title: "Verified on-ground photographs",
            description: "Real-time verified visuals of the property",
            color: "text-red-600",
        },
        {
            icon: RotateCcw,
            title: "360 degree property verification",
            description: "Complete property assessment",
            color: "text-indigo-600",
        },
    ]

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-semibold">What We Check:</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        <span className="highlight">Comprehensive Property Verification</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Our <span className="text-primary font-semibold">AI-powered system</span> conducts thorough checks across
                        multiple parameters to ensure complete property authenticity.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div
                                            className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300`}
                                        >
                                            <span className="text-2xl font-bold text-primary">{index + 1}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center mb-2">
                                            <IconComponent className={`w-5 h-5 mr-2 ${feature.color}`} />
                                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                                {feature.title}
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <div className="bg-green-100 text-green-700 px-6 py-3 rounded-full inline-block mb-6">
                        <span className="font-semibold">India's first 360° Property Verification Platform</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Quick Property Verification</h3>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Get your property verified instantly without creating an account. Our{" "}
                        <span className="highlight">experts will contact you</span> within 24 hours.
                    </p>
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                        Verify Property Now
                    </button>
                </div>
            </div>
        </section>
    )
}
