import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { VerificationSection } from "@/components/verification-section"
import { FraudTypesSection } from "@/components/fraud-types-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"


export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <HeroSection />
                <StatsSection />
                <FeaturesSection />
                <VerificationSection />
                <FraudTypesSection />
                <ServicesSection />
            </main>
            <Footer />
        </div>
    )
}
