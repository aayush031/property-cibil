"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(false)
    const [animatedStats, setAnimatedStats] = useState({
        amount: 0,
        percentage: 0,
        time: 0,
    })

    useEffect(() => {
        setIsVisible(true)

        const animateCounter = (target, key, duration = 2000) => {
            const start = 0
            const startTime = Date.now()

            const updateCounter = () => {
                const elapsed = Date.now() - startTime
                const progress = Math.min(elapsed / duration, 1)
                const easeOutQuart = 1 - Math.pow(1 - progress, 4)

                const current = Math.floor(start + (target - start) * easeOutQuart)

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

        setTimeout(() => animateCounter(50000, "amount", 2500), 500)
        setTimeout(() => animateCounter(40, "percentage", 2000), 800)
        setTimeout(() => animateCounter(90, "time", 1800), 1100)
    }, [])

    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div
                    className={`text-center mb-8 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                >
                    <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium hover:scale-110 transition-transform duration-300 animate-pulse-slow"
                    >
                        <Shield className="w-4 h-4 mr-2 animate-spin-slow" />
                        Trusted by 1,000+ Property Buyers
                    </Badge>
                </div>

                <div
                    className={`text-center max-w-4xl mx-auto mb-12 transition-all duration-1200 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Stop Property Fraud{" "}
                        <span className="text-primary relative animate-gradient-text">
                            Before It Happens
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full animate-expand"></div>
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        India's only{" "}
                        <span className="highlight animate-highlight-pulse">AI-powered property verification portal</span>. Get
                        instant credibility scores, detect fraudulent listings, and make safe property investments with confidence.
                    </p>

                    {/* New Section - Add your content here */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg border border-blue-200/50 max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-bold text-xl">✓</span>
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2">Instant Verification</h3>
                                <p className="text-gray-600 text-sm">Get property credibility scores in under 3 minutes</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-bold text-xl">🛡️</span>
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2">Fraud Detection</h3>
                                <p className="text-gray-600 text-sm">Advanced AI algorithms detect fraudulent listings</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-bold text-xl">📊</span>
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2">Smart Analytics</h3>
                                <p className="text-gray-600 text-sm">Comprehensive property analysis and risk assessment</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto transition-all duration-1500 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-1 group animate-card-float">
                        <div className="text-3xl font-bold text-red-600 mb-2 group-hover:animate-bounce">
                            ₹{animatedStats.amount.toLocaleString()} Cr
                        </div>
                        <div className="text-sm text-muted-foreground group-hover:text-red-600 transition-colors">
                            Lost annually to real estate fraud in India
                        </div>
                        <div className="absolute inset-0 bg-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-rotate-1 group animate-card-float"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:animate-pulse">
                            {animatedStats.percentage}%
                        </div>
                        <div className="text-sm text-muted-foreground group-hover:text-orange-600 transition-colors">
                            Of property disputes involve <span className="warning-highlight animate-blink">document fraud</span>
                        </div>
                        <div className="absolute inset-0 bg-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-1 group animate-card-float"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <div className="text-3xl font-bold text-green-600 mb-2 flex items-center justify-center group-hover:animate-bounce">
                            <Clock className="w-8 h-8 mr-2 animate-tick" />
                            {animatedStats.time} mins
                        </div>
                        <div className="text-sm text-muted-foreground group-hover:text-green-600 transition-colors">
                            Average time to verify property authenticity
                        </div>
                        <div className="absolute inset-0 bg-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>

                <div
                    className={`text-center transition-all duration-1800 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                >
                    <div className="mb-6">
                        <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 border-green-200 px-4 py-2 mb-4 hover:scale-105 transition-transform duration-300 animate-shimmer"
                        >
                            <TrendingUp className="w-4 h-4 mr-2 animate-bounce-slow" />
                            Introducing Property CIBIL – India's First Real-Time Property Risk Report!
                        </Badge>
                    </div>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Before buying or investing, instantly receive a{" "}
                        <span className="highlight animate-highlight-pulse">complete credibility analysis</span> of any property
                        within Jaipur's JDA limits.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 animate-button-glow"
                            onMouseEnter={(e) => {
                                e.target.style.boxShadow = "0 20px 40px rgba(59, 130, 246, 0.4)"
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            Verify Property Now
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg transition-all duration-300 bg-transparent hover:scale-105 hover:border-primary/80"
                        >
                            Free Expert Consultation
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
