"use client"

import { AlertTriangle } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function StatsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const [animatedStats, setAnimatedStats] = useState({
        percentage: 0,
        cases: 0,
        amount: 0,
        increase: 0,
    })
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    setTimeout(() => animateCounter(25, "percentage", 2000), 200)
                    setTimeout(() => animateCounter(15000, "cases", 2500), 400)
                    setTimeout(() => animateCounter(8.5, "amount", 2200), 600)
                    setTimeout(() => animateCounter(72, "increase", 1800), 800)
                }
            },
            { threshold: 0.3 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const animateCounter = (target, key, duration = 2000) => {
        const start = 0
        const startTime = Date.now()

        const updateCounter = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOutCubic = 1 - Math.pow(1 - progress, 3)

            let current
            if (key === "amount") {
                current = Number.parseFloat((start + (target - start) * easeOutCubic).toFixed(1))
            } else {
                current = Math.floor(start + (target - start) * easeOutCubic)
            }

            setAnimatedStats((prev) => ({
                ...prev,
                [key]: current,
            }))

            if (progress < 1) {
                requestAnimationFrame(updateCounter)
            }
        }

        requestAnimationFrame(updateCounter)
    }

    return (
        <section ref={sectionRef} className="py-16 bg-gradient-to-r from-red-50 to-orange-50 relative overflow-hidden">
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-red-300/30 rounded-full animate-float-reverse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${4 + Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div
                    className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                >
                    <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4 hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                        <AlertTriangle className="w-5 h-5 mr-2 animate-shake" />
                        <span className="font-semibold">Critical Problem in Indian Real Estate</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        The Hidden Crisis: <span className="text-red-600 animate-text-glow">Property Fraud in India</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Every year, thousands of families lose their life savings to property fraud. Here's the
                        <span className="warning-highlight animate-highlight-pulse">shocking reality</span> of India's real estate
                        market.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                        className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-1 border-l-4 border-red-500 group animate-card-slide-up ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                            }`}
                        style={{ transitionDelay: "200ms" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "linear-gradient(135deg, #ffffff 0%, #fef2f2 100%)"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#ffffff"
                        }}
                    >
                        <div className="text-4xl font-bold text-red-600 mb-2 group-hover:animate-bounce">
                            {animatedStats.percentage}%
                        </div>
                        <div className="text-sm font-medium text-foreground mb-2 group-hover:text-red-700 transition-colors">
                            Of property transactions involve <span className="highlight animate-blink">some form of fraud</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Source: CREDAI-PWC Report 2023</div>
                        <div className="absolute inset-0 bg-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div
                        className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-rotate-1 border-l-4 border-orange-500 group animate-card-slide-up ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                            }`}
                        style={{ transitionDelay: "400ms" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "linear-gradient(135deg, #ffffff 0%, #fff7ed 100%)"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#ffffff"
                        }}
                    >
                        <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:animate-pulse">
                            {animatedStats.cases.toLocaleString()}+
                        </div>
                        <div className="text-sm font-medium text-foreground mb-2 group-hover:text-orange-700 transition-colors">
                            <span className="warning-highlight animate-blink">Property fraud cases</span> reported annually
                        </div>
                        <div className="text-xs text-muted-foreground">Source: National Crime Records Bureau</div>
                        <div className="absolute inset-0 bg-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div
                        className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-1 border-l-4 border-purple-500 group animate-card-slide-up ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                            }`}
                        style={{ transitionDelay: "600ms" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#ffffff"
                        }}
                    >
                        <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:animate-bounce">
                            ₹{animatedStats.amount}L
                        </div>
                        <div className="text-sm font-medium text-foreground mb-2 group-hover:text-purple-700 transition-colors">
                            <span className="highlight animate-blink">Average loss per fraud victim</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Source: Economic Offences Wing</div>
                        <div className="absolute inset-0 bg-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div
                        className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-rotate-1 border-l-4 border-blue-500 group animate-card-slide-up ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                            }`}
                        style={{ transitionDelay: "800ms" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#ffffff"
                        }}
                    >
                        <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:animate-bounce">
                            {animatedStats.increase}%
                        </div>
                        <div className="text-sm font-medium text-foreground mb-2 group-hover:text-blue-700 transition-colors">
                            <span className="warning-highlight animate-blink">Increase in property disputes</span> since 2020
                        </div>
                        <div className="text-xs text-muted-foreground">Source: Delhi High Court Records</div>
                        <div className="absolute inset-0 bg-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
