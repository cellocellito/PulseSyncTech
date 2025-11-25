import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-chart-2/10 to-chart-3/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_70%)]" />
      
      <div className="container relative z-10 px-4 mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Conecte-se ao
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              futuro agora.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Agende uma demonstração gratuita e descubra como a automação inteligente pode transformar sua empresa.
          </p>
          
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary border-primary-border shadow-[0_0_40px_rgba(0,240,255,0.4)] hover:shadow-[0_0_60px_rgba(0,240,255,0.6)] transition-all duration-300"
            data-testid="button-schedule-demo"
            asChild
          >
            <a href="https://calendly.com/pulsesync" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Agende uma demonstração
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
