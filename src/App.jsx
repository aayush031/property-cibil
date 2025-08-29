import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import FeaturesSection from "@/components/features-section"
import VerificationSection from "@/components/verification-section"
import FraudTypesSection from "@/components/fraud-types-section"
import ServicesSection from "@/components/services-section"
import Footer from "@/components/footer"
import About from "@/pages/About"

export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-background">
                <Navbar />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <main>
                                <HeroSection />
                                <StatsSection />
                                <FeaturesSection />
                                <VerificationSection />
                                <FraudTypesSection />
                                <ServicesSection />
                            </main>
                        }
                    />

                    {/* About page  */}
                    <Route path="/about" element={<About />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    )
}
