import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import WorkflowVisualization from "@/components/WorkflowVisualization";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <WorkflowVisualization />
      <TestimonialsSection />
      <SuccessStoriesSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
