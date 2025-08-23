"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Search, Phone, FileText, Info, DollarSign } from "lucide-react"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Blog", icon: FileText },
        { name: "Search", icon: Search },
        { name: "Complaint", icon: Phone },
        { name: "About", icon: Info },
        { name: "Pricing", icon: DollarSign },
    ]

    return (
        <nav
            className={`backdrop-blur-md border-b border-blue-200/30 sticky top-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/95 shadow-xl shadow-blue-500/10 border-blue-300/50"
                    : "bg-gradient-to-r from-white/90 via-blue-50/80 to-white/90"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-18">
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-blue-500/30 overflow-hidden ">
                            <Shield className="w-6 h-6 text-white z-10 transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300">
                                PropertyCibil
                            </span>
                            <span className="text-xs text-blue-600/70 font-medium -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Trusted Verification
                            </span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item, index) => {
                            const IconComponent = item.icon
                            return (
                                <a
                                    key={item.name}
                                    href="#"
                                    className="relative px-4 py-2 text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium group rounded-lg hover:bg-blue-50/80 flex items-center space-x-2"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                                    <span className="transition-transform duration-300 group-hover:-translate-y-0.5">{item.name}</span>
                                    <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300 group-hover:w-8 transform -translate-x-1/2"></span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-700/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
                                </a>
                            )
                        })}
                    </div>

                    <div className="hidden md:flex items-center space-x-3">
                        <Button
                            variant="ghost"
                            className="text-gray-700 hover:text-blue-700 hover:bg-blue-50/80 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 relative overflow-hidden group border border-transparent hover:border-blue-200/50 rounded-lg px-6"
                        >
                            <span className="relative z-10 font-medium">Sign In</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-700/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
                        </Button>
                        <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group rounded-lg px-6 py-2.5">
                            <span className="relative z-10 font-semibold">Get Started</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Button>
                    </div>

                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsOpen(!isOpen)}
                            className="hover:bg-blue-50/80 hover:text-blue-700 transition-all duration-300 hover:scale-110 rounded-lg border border-transparent hover:border-blue-200/50"
                        >
                            <div className={`transition-transform duration-500 ${isOpen ? "rotate-180 scale-110" : "rotate-0"}`}>
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </div>
                        </Button>
                    </div>
                </div>

                <div
                    className={`md:hidden border-t border-blue-200/30 bg-gradient-to-b from-white/95 to-blue-50/80 backdrop-blur-md transition-all duration-500 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="px-2 pt-4 pb-6 space-y-2">
                        {navItems.map((item, index) => {
                            const IconComponent = item.icon
                            return (
                                <a
                                    key={item.name}
                                    href="#"
                                    className={`flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50/80 rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:scale-105 border border-transparent hover:border-blue-200/50 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                                        }`}
                                    style={{
                                        transitionDelay: isOpen ? `${index * 80}ms` : "0ms",
                                    }}
                                >
                                    <IconComponent className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
                                    <span className="font-medium">{item.name}</span>
                                </a>
                            )
                        })}
                        <div
                            className={`flex flex-col space-y-3 px-4 pt-6 border-t border-blue-200/30 mt-4 transition-all duration-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                }`}
                            style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}
                        >
                            <Button
                                variant="ghost"
                                className="justify-start hover:scale-105 transition-transform duration-200 hover:bg-blue-50/80 hover:text-blue-700 rounded-lg border border-transparent hover:border-blue-200/50"
                            >
                                <span className="font-medium">Sign In</span>
                            </Button>
                            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl rounded-lg">
                                <span className="font-semibold">Get Started</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
