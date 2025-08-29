"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Search, Phone, FileText, Info, DollarSign } from "lucide-react"
import { Link } from "react-router-dom" 

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Blog", icon: FileText, path: "/blog" },
        { name: "Search", icon: Search, path: "/search" },
        { name: "Complaint", icon: Phone, path: "/complaint" },
        { name: "About", icon: Info, path: "/about" }, 
        { name: "Pricing", icon: DollarSign, path: "/pricing" },
    ]

    return (
        <nav
            className={`backdrop-blur-md border-b border-blue-200/30 sticky top-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/95 shadow-xl shadow-blue-500/10 border-blue-300/50"
                    : "bg-gradient-to-r from-white/90 via-blue-50/80 to-white/90"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                <div className="flex justify-between items-center h-18">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
                        <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-blue-500/30 overflow-hidden">
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
                    </Link>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => {
                            const IconComponent = item.icon
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path} 
                                    className="relative px-4 py-2 text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium group rounded-lg hover:bg-blue-50/80 flex items-center space-x-2"
                                >
                                    <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                                    <span className="transition-transform duration-300 group-hover:-translate-y-0.5">{item.name}</span>
                                </Link>
                            )
                        })}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <Button
                            variant="ghost"
                            className="text-gray-700 hover:text-blue-700 hover:bg-blue-50/80 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 rounded-lg px-6"
                        >
                            Sign In
                        </Button>
                        <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg rounded-lg px-6 py-2.5 hover:scale-105 transition-transform duration-300">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsOpen(!isOpen)}
                            className="hover:bg-blue-50/80 hover:text-blue-700 transition-all duration-300 rounded-lg"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden border-t border-blue-200/30 bg-gradient-to-b from-white/95 to-blue-50/80 backdrop-blur-md transition-all duration-500 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="px-2 pt-4 pb-6 space-y-2">
                        {navItems.map((item) => {
                            const IconComponent = item.icon
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)} 
                                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50/80 rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
                                >
                                    <IconComponent className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            )
                        })}
                        <div className="flex flex-col space-y-3 px-4 pt-6 border-t border-blue-200/30 mt-4">
                            <Button variant="ghost" className="justify-start rounded-lg hover:bg-blue-50/80 hover:text-blue-700">
                                Sign In
                            </Button>
                            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:scale-105 transition-transform duration-200">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
