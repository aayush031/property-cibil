"use client"

import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useState } from "react"

export default function Footer() {
    const [email, setEmail] = useState("")

    const handleSubscribe = (e) => {
        e.preventDefault()
        console.log("[v0] Newsletter subscription:", email)
        setEmail("")

    }

    return (
        <footer className="bg-gray-900 text-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-lg">PC</span>
                            </div>
                            <span className="text-xl font-bold">PropertyCibil</span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            India's most comprehensive property verification and credibility platform, helping homebuyers make
                            informed decisions with confidence.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-lg transition-colors duration-200">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-lg transition-colors duration-200">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-lg transition-colors duration-200">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-lg transition-colors duration-200">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                                    Property Verification
                                </a>
                            </li>
                            <li>
                                <a href="/about" class="text-gray-300 hover:text-primary transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                                    Pricing Plans
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                                    Blogs & News
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                                    Disclaimer
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                                    Data Protection
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-gray-300">
                                    F-26, Gautam Marg, Sector 6,
                                    <br />
                                    Vaishali Nagar, Jaipur, Rajasthan 302001
                                    <br />
                                    India
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-gray-300">+91 9001266664</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-gray-300">info@propertycibil.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-gray-300">Mon-Sat: 9:00 AM - 7:00 PM</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h4>
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors duration-200"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 PropertyCibil. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
