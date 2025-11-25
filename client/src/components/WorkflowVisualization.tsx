import { useState } from "react";
import { Database, Mail, Webhook, Sparkles, GitBranch, MessageSquare, Calendar, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface Node {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  x: number;
  y: number;
  color: string;
  colorValue: string;
}

type WorkflowType = "chatbot" | "calendar" | "leads";

const workflowData: Record<WorkflowType, { nodes: Node[], connections: { from: number, to: number }[] }> = {
  chatbot: {
    nodes: [
      { id: 1, icon: MessageSquare, label: "Mensagem Recebida", x: 100, y: 250, color: "primary", colorValue: "hsl(var(--primary))" },
      { id: 2, icon: Sparkles, label: "Análise IA", x: 300, y: 150, color: "chart-3", colorValue: "hsl(var(--chart-3))" },
      { id: 3, icon: Database, label: "Buscar Contexto", x: 300, y: 350, color: "chart-2", colorValue: "hsl(var(--chart-2))" },
      { id: 4, icon: GitBranch, label: "Gerar Resposta", x: 500, y: 250, color: "chart-4", colorValue: "hsl(var(--chart-4))" },
      { id: 5, icon: ArrowRight, label: "Enviar Resposta", x: 700, y: 250, color: "primary", colorValue: "hsl(var(--primary))" },
    ],
    connections: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 3, to: 4 },
      { from: 4, to: 5 },
    ]
  },
  calendar: {
    nodes: [
      { id: 1, icon: Calendar, label: "Novo Agendamento", x: 100, y: 250, color: "primary", colorValue: "hsl(var(--primary))" },
      { id: 2, icon: Users, label: "Verificar Disponibilidade", x: 300, y: 150, color: "chart-2", colorValue: "hsl(var(--chart-2))" },
      { id: 3, icon: Sparkles, label: "Validar Regras", x: 300, y: 350, color: "chart-3", colorValue: "hsl(var(--chart-3))" },
      { id: 4, icon: Mail, label: "Enviar Convite", x: 500, y: 250, color: "chart-4", colorValue: "hsl(var(--chart-4))" },
      { id: 5, icon: Database, label: "Salvar no CRM", x: 700, y: 250, color: "primary", colorValue: "hsl(var(--primary))" },
    ],
    connections: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 3, to: 4 },
      { from: 4, to: 5 },
    ]
  },
  leads: {
    nodes: [
      { id: 1, icon: Webhook, label: "Novo Lead", x: 100, y: 250, color: "primary", colorValue: "hsl(var(--primary))" },
      { id: 2, icon: Sparkles, label: "Enriquecer Dados", x: 300, y: 150, color: "chart-3", colorValue: "hsl(var(--chart-3))" },
      { id: 3, icon: Database, label: "Verificar Duplicidade", x: 300, y: 350, color: "chart-2", colorValue: "hsl(var(--chart-2))" },
      { id: 4, icon: GitBranch, label: "Score Lead", x: 500, y: 250, color: "chart-4", colorValue: "hsl(var(--chart-4))" },
      { id: 5, icon: Mail, label: "Notificar Vendas", x: 700, y: 250, color: "primary", colorValue: "hsl(var(--primary))" },
    ],
    connections: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 3, to: 4 },
      { from: 4, to: 5 },
    ]
  }
};

// Generate curved bezier paths for connections
const generatePath = (from: Node, to: Node): { path: string; length: number } => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;

  // Create curved path with control points
  const cp1x = from.x + dx * 0.4;
  const cp1y = from.y;
  const cp2x = to.x - dx * 0.4;
  const cp2y = to.y;

  const path = `M ${from.x} ${from.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${to.x} ${to.y}`;

  // Approximate path length for animation
  const length = Math.sqrt(dx * dx + dy * dy) * 1.2;

  return { path, length };
};

export default function WorkflowVisualization() {
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowType>("chatbot");
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const currentNodes = workflowData[activeWorkflow].nodes;
  const currentConnections = workflowData[activeWorkflow].connections.map(conn => {
    const fromNode = currentNodes.find(n => n.id === conn.from)!;
    const toNode = currentNodes.find(n => n.id === conn.to)!;
    const { path, length } = generatePath(fromNode, toNode);
    return { ...conn, path, length };
  });

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      primary: "hsl(var(--primary))",
      "chart-2": "hsl(var(--chart-2))",
      "chart-3": "hsl(var(--chart-3))",
      "chart-4": "hsl(var(--chart-4))",
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section id="workflow" className="py-24 relative bg-gradient-to-b from-accent/5 to-background">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Automação visual e inteligente
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crie fluxos de trabalho complexos com interface visual do n8n
          </p>
        </div>

        {/* Workflow Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeWorkflow === "chatbot" ? "default" : "outline"}
            onClick={() => setActiveWorkflow("chatbot")}
            className="min-w-[140px]"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Chatbot IA
          </Button>
          <Button
            variant={activeWorkflow === "calendar" ? "default" : "outline"}
            onClick={() => setActiveWorkflow("calendar")}
            className="min-w-[140px]"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Agendamento
          </Button>
          <Button
            variant={activeWorkflow === "leads" ? "default" : "outline"}
            onClick={() => setActiveWorkflow("leads")}
            className="min-w-[140px]"
          >
            <Users className="w-4 h-4 mr-2" />
            Gestão de Leads
          </Button>
        </div>

        <div className="relative h-[500px] bg-gradient-to-br from-background via-background/95 to-accent/10 rounded-2xl border border-border/30 backdrop-blur-sm overflow-hidden shadow-2xl">
          {/* Background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeWorkflow}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* SVG for connections */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="hsl(var(--chart-2))" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {currentConnections.map((conn, idx) => (
                  <g key={`${activeWorkflow}-conn-${idx}`}>
                    {/* Base connection path */}
                    <path
                      d={conn.path}
                      fill="none"
                      stroke="url(#connectionGradient)"
                      strokeWidth="3"
                      strokeDasharray="8 4"
                      opacity="0.4"
                      className="animate-pulse-glow"
                      style={{ animationDelay: `${idx * 200}ms` }}
                    />

                    {/* Animated data flow */}
                    <circle
                      r="4"
                      fill="hsl(var(--primary))"
                      opacity="0.8"
                      filter="url(#glow)"
                    >
                      <animateMotion
                        dur={`${2 + idx * 0.3}s`}
                        repeatCount="indefinite"
                        path={conn.path}
                      />
                    </circle>
                  </g>
                ))}
              </svg>

              {/* Nodes */}
              {currentNodes.map((node) => {
                const Icon = node.icon;
                const isHovered = hoveredNode === node.id;
                const colorValue = getColorClass(node.color);

                return (
                  <div
                    key={`${activeWorkflow}-node-${node.id}`}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300"
                    style={{
                      left: `${node.x}px`,
                      top: `${node.y}px`,
                      zIndex: isHovered ? 20 : 10
                    }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Node container with gradient background */}
                    <div
                      className={`
                        relative w-20 h-20 rounded-2xl flex items-center justify-center
                        transition-all duration-300 backdrop-blur-sm
                        ${isHovered ? 'scale-125 shadow-[0_0_50px_rgba(0,240,255,0.6)]' : 'scale-100 shadow-[0_0_20px_rgba(0,240,255,0.3)]'}
                      `}
                      style={{
                        background: isHovered
                          ? `linear-gradient(135deg, ${colorValue}40, ${colorValue}20)`
                          : `linear-gradient(135deg, ${colorValue}25, ${colorValue}10)`,
                        border: `2px solid ${colorValue}${isHovered ? 'CC' : '80'}`,
                        boxShadow: isHovered
                          ? `0 0 50px ${colorValue}80, inset 0 0 20px ${colorValue}20`
                          : `0 0 20px ${colorValue}50, inset 0 0 10px ${colorValue}10`
                      }}
                    >
                      {/* Icon */}
                      <Icon
                        className={`w-9 h-9 transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
                        style={{ color: colorValue }}
                      />

                      {/* Pulse ring on hover */}
                      {isHovered && (
                        <div
                          className="absolute inset-0 rounded-2xl animate-ping"
                          style={{
                            border: `2px solid ${colorValue}`,
                            opacity: 0.3
                          }}
                        />
                      )}
                    </div>

                    {/* Label */}
                    <div
                      className={`
                        absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap 
                        text-sm font-semibold transition-all duration-300
                        ${isHovered ? 'opacity-100 scale-110' : 'opacity-70 scale-100'}
                      `}
                      style={{ color: colorValue }}
                    >
                      {node.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Visualize e gerencie automações complexas com a interface drag-and-drop do n8n.
            Conecte aplicações, adicione lógica condicional e integre IA em minutos.
          </p>
        </div>
      </div>
    </section>
  );
}
