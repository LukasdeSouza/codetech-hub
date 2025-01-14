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
import { useState } from "react";
import { Navigation } from "@/components/Navigation";

const Tools = () => {
  const [activeTool, setActiveTool] = useState<"cv" | "linkedin" | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Ferramentas do Desenvolvedor</h1>

        {!activeTool ? (
          <div className="grid md:grid-cols-2 gap-6">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Tools;
