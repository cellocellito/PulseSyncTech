import { Mail, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background/50 backdrop-blur-sm">
      <div className="container px-4 mx-auto max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Pulse Sync Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Pulse Sync
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Automatize o futuro da sua empresa com inteligência.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Soluções</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-automation">
                  Automação de Processos
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-integration">
                  Integração de Sistemas
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-consulting">
                  Consultoria n8n
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-about">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-cases">
                  Casos de Sucesso
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@pulsesync.tech"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
                contact@pulsesync.tech
              </a>

              <div className="flex gap-2 pt-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="w-9 h-9 hover:text-primary hover-elevate"
                  data-testid="button-linkedin"
                  asChild
                >
                  <a href="https://linkedin.com/company/pulsesync" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="w-9 h-9 hover:text-primary hover-elevate"
                  data-testid="button-instagram"
                  asChild
                >
                  <a href="https://instagram.com/pulsesync" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="w-9 h-9 hover:text-primary hover-elevate"
                  data-testid="button-twitter"
                  asChild
                >
                  <a href="https://twitter.com/pulsesync" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Pulse Sync. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
