import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const GithubInsights = () => {
  const [githubUrl, setGithubUrl] = useState("");
  const [insights, setInsights] = useState<string[]>([]);

  const handleAnalyze = () => {
    if (!githubUrl.includes("github.com")) {
      toast.error("Por favor, insira uma URL válida do Github");
      return;
    }

    // Mock insights - in a real app, you'd call the Github API
    const mockInsights = [
      "Você tem uma boa frequência de commits nos últimos 3 meses",
      "Seus projetos mais populares são em React e Node.js",
      "Sugestão: Contribua mais para projetos open source",
      "Você poderia adicionar mais documentação aos seus projetos",
      "Seus repositórios têm boa organização de código"
    ];

    setInsights(mockInsights);
    toast.success("Perfil do Github analisado com sucesso!");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Cole a URL do seu perfil do Github
              </label>
              <Input
                placeholder="https://github.com/seuperfil"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
              />
            </div>
            <Button onClick={handleAnalyze}>Analisar Github</Button>
          </div>
        </CardContent>
      </Card>

      {insights.length > 0 && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Insights do Perfil</h3>
            <ul className="space-y-2">
              {insights.map((insight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  {insight}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};