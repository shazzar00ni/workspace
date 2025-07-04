import { HeroSection } from "@/components/portfolio/HeroSection"
import { MyWorkSection } from "@/components/portfolio/MyWorkSection"
import { AboutMeSection } from "@/components/portfolio/AboutMeSection"
import { DesignFocusesSection } from "@/components/portfolio/DesignFocusesSection"
import { ProjectGallery } from "@/components/portfolio/ProjectGallery"
import { TestimonialsSection } from "@/components/portfolio/TestimonialsSection"
import { BlogSection } from "@/components/portfolio/BlogSection"
import { ContactSection } from "@/components/portfolio/ContactSection"
import { FinalCTASection } from "@/components/portfolio/FinalCTASection"
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter"

export function Home() {
  console.log('Rendering Home page')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <MyWorkSection />
      <AboutMeSection />
      <DesignFocusesSection />
      <ProjectGallery />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <FinalCTASection />
      <PortfolioFooter />
    </div>
  )
}