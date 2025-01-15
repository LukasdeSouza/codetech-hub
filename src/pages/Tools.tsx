import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CVGenerator } from "@/components/tools/CVGenerator";
import { LinkedInAnalyzer } from "@/components/tools/LinkedInAnalyzer";
import { PortfolioAnalyzer } from "@/components/tools/PortfolioAnalyzer";
import { GithubInsights } from "@/components/tools/GithubInsights";
import { ProjectIdeaGenerator } from "@/components/tools/ProjectIdeaGenerator";
import { TechnicalTestGenerator } from "@/components/tools/TechnicalTestGenerator";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";

type ToolType = "cv" | "linkedin" | "portfolio" | "github" | "project" | "test" | null;

const Tools = () => {
  const [activeTool, setActiveTool] = useState<ToolType>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Ferramentas do Desenvolvedor</h1>

        {!activeTool ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              className="hover:border-primary cursor-pointer transition-colors"
              onClick={() => setActiveTool("cv")}
            >
              <CardHeader>
                <CardTitle>Gerador de Currículo</CardTitle>
                <CardDescription>
                  Gere um currículo profissional baseado nas suas habilidades e
                  experiências
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="hover:border-primary cursor-pointer transition-colors"
              onClick={() => setActiveTool("linkedin")}
            >
              <CardHeader>
                <CardTitle>Analisador de Linkedin</CardTitle>
                <CardDescription>
                  Receba sugestões personalizadas para melhorar seu perfil do
                  Linkedin
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="hover:border-primary cursor-pointer transition-colors"
              onClick={() => setActiveTool("portfolio")}
            >
              <CardHeader>
                <CardTitle>Analisador de Portfólio</CardTitle>
                <CardDescription>
                  Receba sugestões para melhorar seu portfólio profissional
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="hover:border-primary cursor-pointer transition-colors"
              onClick={() => setActiveTool("github")}
            >
              <CardHeader>
                <CardTitle>Github Insights</CardTitle>
                <CardDescription>
                  Analise seu perfil do Github e receba insights valiosos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="hover:border-primary cursor-pointer transition-colors"
              onClick={() => setActiveTool("project")}
            >
              <CardHeader>
                <CardTitle>Gerador de Ideias</CardTitle>
                <CardDescription>
                  Receba ideias aleatórias para projetos de programação
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="hover:border-primary cursor-pointer transition-colors"
              onClick={() => setActiveTool("test")}
            >
              <CardHeader>
                <CardTitle>Gerador de Teste Técnico</CardTitle>
                <CardDescription>
                  Gere testes técnicos baseados no seu nível de experiência
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ) : (
          <div className="space-y-4">
            <Button
              variant="outline"
              onClick={() => setActiveTool(null)}
              className="mb-4"
            >
              ← Voltar as ferramentas
            </Button>

            {activeTool === "cv" && <CVGenerator />}
            {activeTool === "linkedin" && <LinkedInAnalyzer />}
            {activeTool === "portfolio" && <PortfolioAnalyzer />}
            {activeTool === "github" && <GithubInsights />}
            {activeTool === "project" && <ProjectIdeaGenerator />}
            {activeTool === "test" && <TechnicalTestGenerator />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tools;