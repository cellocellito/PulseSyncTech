// Conteúdo final e simplificado para: server/index.ts

import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes.js";

const app = express();
createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Registra as rotas da API (que começarão com /api)
registerRoutes(app);

// Tratamento de erro
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Exporta o app para a Vercel
export default app;
