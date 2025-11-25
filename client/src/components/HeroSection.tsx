import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-accent/5 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-chart-2/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      <div className="container relative z-10 px-4 mx-auto max-w-6xl text-center">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Automatize o futuro
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              da sua empresa.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Pulse Sync conecta sistemas, elimina tarefas manuais e acelera resultados com automações n8n inteligentes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary border-primary-border shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(0,240,255,0.5)] transition-all duration-300"
              data-testid="button-start-transformation"
              asChild
            >
              <a href="https://calendly.com/pulsesync" target="_blank" rel="noopener noreferrer">
                Inicie sua transformação
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10"
              data-testid="button-learn-more"
              onClick={() => {
                const element = document.querySelector("#services");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
