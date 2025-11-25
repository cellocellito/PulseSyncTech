import { Zap, Target, Network, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Zap,
    title: "Velocidade",
    description: "Automatize processos em minutos, não em meses. Reduza o tempo de execução em até 90%.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Target,
    title: "Eficiência",
    description: "Elimine erros humanos e tarefas repetitivas. Foque no que realmente importa.",
    gradient: "from-chart-2/20 to-chart-2/5",
  },
  {
    icon: Network,
    title: "Integração",
    description: "Conecte mais de 400+ aplicações sem código. Sincronize dados em tempo real.",
    gradient: "from-chart-3/20 to-chart-3/5",
  },
  {
    icon: Sparkles,
    title: "Precisão",
    description: "Fluxos de trabalho inteligentes com IA. Decisões baseadas em dados confiáveis.",
    gradient: "from-chart-4/20 to-chart-4/5",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Transforme seu negócio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Potencie sua empresa com automações inteligentes que entregam resultados reais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-benefit-${index}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardContent className="relative p-6 space-y-4">
                  <div className="w-12 h-12 rounded-md bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary animate-pulse-glow" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
