import Navigation from "@/components/client/Navigation";
import HeroSection from "@/components/client/HeroSection";
import BenefitsSection from "@/components/client/BenefitsSection";
import SuccessStoriesSection from "@/components/client/SuccessStoriesSection";
import WorkflowVisualization from "@/components/client/WorkflowVisualization";
import TestimonialsSection from "@/components/client/TestimonialsSection";
import FinalCTA from "@/components/client/FinalCTA";
import Footer from "@/components/server/Footer";

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

