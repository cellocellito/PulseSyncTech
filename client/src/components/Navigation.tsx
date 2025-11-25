import { useState, useEffect } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "#home" },
  { label: "Serviços", href: "#services" },
  { label: "Sobre Nós", href: "#about" },
  { label: "Contato", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const isMobile = useIsMobile();

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <div className="rounded-2xl border border-border/50 bg-background/80 backdrop-blur-md shadow-lg">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2 group"
          >
            <img
              src={logo}
              alt="Pulse Sync Logo"
              className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              Pulse Sync
            </span>
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-2 text-muted-foreground hover:text-foreground"
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Button
                      key={link.href}
                      variant="ghost"
                      className="justify-start text-lg text-muted-foreground hover:text-foreground hover:bg-primary/10"
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.label}
                    </Button>
                  ))}
                  <Button
                    variant="ghost"
                    className="justify-start text-lg text-muted-foreground hover:text-foreground hover:bg-primary/10"
                    onClick={toggleTheme}
                  >
                    {theme === "light" ? (
                      <>
                        <Moon className="h-5 w-5 mr-2" /> Modo Escuro
                      </>
                    ) : (
                      <>
                        <Sun className="h-5 w-5 mr-2" /> Modo Claro
                      </>
                    )}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
}

