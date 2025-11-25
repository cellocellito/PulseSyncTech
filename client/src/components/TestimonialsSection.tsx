import { Card, CardContent } from "@/components/ui/card";
import { Quote, Shield, Rocket, Users } from "lucide-react";

const testimonials = [
  {
    quote: "A Pulse Sync reduziu nosso tempo de processamento em 85%. Incrível!",
    author: "Maria Silva",
    role: "CTO, TechCorp Brasil",
    company: "TechCorp",
  },
  {
    quote: "Integramos 15 sistemas diferentes em apenas 2 semanas. Transformador.",
    author: "João Santos",
    role: "Diretor de Operações, LogiFlow",
    company: "LogiFlow",
  },
  {
    quote: "ROI positivo em 3 meses. A equipe da Pulse Sync é excepcional.",
    author: "Ana Costa",
    role: "CEO, StartupX",
    company: "StartupX",
  },
];

const differentiators = [
  {
    icon: Shield,
    title: "Segurança de dados",
    description: "Self-hosted ou cloud, você decide. Controle total sobre seus dados.",
  },
  {
    icon: Rocket,
    title: "Implementação rápida",
    description: "Do planejamento à execução em dias, não meses.",
  },
  {
    icon: Users,
    title: "Suporte especializado",
    description: "Time de experts em n8n 100% em português.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Por que escolher a Pulse Sync?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Junte-se a empresas que já transformaram seus processos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover-elevate active-elevate-2 transition-all duration-300 group"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
              
              <CardContent className="relative p-6 space-y-4">
                <Quote className="w-8 h-8 text-primary/40" />
                
                <p className="text-foreground/90 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-4 border-t border-border/30">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-differentiator-${index}`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
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
