"use client"

import { useEffect, useState, useRef } from "react"
import { Check } from "lucide-react"

const radius = 80
const circumference = 2 * Math.PI * radius

const CibilScoreSemiCircleMeter = () => {
    const [score, setScore] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const requestRef = useRef()

    useEffect(() => {
        let start = null
        let fastPhase = true

        const animate = (timestamp) => {
            if (!start) start = timestamp
            const elapsed = timestamp - start

            if (fastPhase) {
                const progress = Math.min((elapsed / 2500) * 50, 50)
                const easedProgress = progress * (2 - progress / 50)
                setPercentage(easedProgress)
                setScore((easedProgress / 100) * 780)

                if (progress >= 50) {
                    fastPhase = false
                    start = timestamp
                }
            } else {
                const slowElapsed = timestamp - start
                const progress = Math.min(50 + (slowElapsed / 4500) * 50, 100)
                const remainingProgress = (progress - 50) / 50
                const easedRemaining = remainingProgress * remainingProgress * (3 - 2 * remainingProgress)
                const finalProgress = 50 + easedRemaining * 50

                setPercentage(finalProgress)
                setScore((finalProgress / 100) * 780)

                if (progress >= 100) {
                    return
                }
            }

            requestRef.current = requestAnimationFrame(animate)
        }

        requestRef.current = requestAnimationFrame(animate)

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current)
            }
        }
    }, [])

    const progressRatio = percentage / 100
    const semicircleLength = circumference / 2
    const strokeDashoffset = semicircleLength - semicircleLength * progressRatio

    return (
        <div className="w-full max-w-sm mx-auto">
            <div className="relative  rounded-2xl p-8  border-gray-100">
                <svg
                    className="mx-auto"
                    width={radius * 2 + 20}
                    height={radius + 40}
                    viewBox={`0 0 ${radius * 2 + 20} ${radius + 40}`}
                >
                    <path
                        d={`
              M 10,${radius + 20}
              A ${radius},${radius} 0 0,1 ${radius * 2 + 10},${radius + 20}
            `}
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="12"
                        strokeLinecap="round"
                    />

                    <path
                        d={`
              M 10,${radius + 20}
              A ${radius},${radius} 0 0,1 ${radius * 2 + 10},${radius + 20}
            `}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray={semicircleLength}
                        strokeDashoffset={strokeDashoffset}
                    />

                    <text
                        x="50%"
                        y={radius + 5}
                        textAnchor="middle"
                        fill="#1f2937"
                        fontSize="36"
                        fontWeight="700"
                        alignmentBaseline="middle"
                    >
                        {Math.floor(percentage)}%
                    </text>
                </svg>

                <div className="text-center mt-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-lg font-extrabold text-blue-600">Property</span>
                        <span className="text-lg font-bold text-green-600">Cibil</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">{Math.floor(score)}</span>
                        {percentage >= 100 && score >= 780 && (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <Check className="w-4 h-4 text-white" strokeWidth={3} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CibilScoreSemiCircleMeter
