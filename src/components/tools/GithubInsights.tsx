import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const GithubInsights = () => {
  const [githubUrl, setGithubUrl] = useState("");
  const [insights, setInsights] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const shuffleArray = (array: string[]) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  const handleAnalyze = async () => {
    if (
      !githubUrl.includes("github.com") &&
      !githubUrl.includes("repositories")
    ) {
      toast.error("Por favor, insira a URL dos seus repostórios do Github");
      return;
    }

    setLoading(true);
    setInsights([]);

    // Mock insights - em uma aplicação real, você chamaria a API do Github
    const mockInsights = [
      "Você tem uma boa frequência de commits nos últimos meses.",
      "Sugestão: Contribua mais para projetos open source.",
      "Você poderia adicionar mais documentação aos seus projetos.",
      "Seus repositórios têm boa organização de código.",
      "Você pode melhorar seus README para atrair mais atenção.",
      "Adicione badges aos seus projetos para deixá-los mais profissionais.",
      "Considere criar mais projetos com testes automatizados.",
      "Explore mais tecnologias como Docker ou GraphQL.",
      "Tente fazer contribuições para projetos trending na sua stack favorita.",
    ];

    // Simulação de análise com delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setInsights(shuffleArray(mockInsights).slice(0, 5)); // Seleciona 5 insights aleatórios
    setLoading(false);
    toast.success("Perfil do Github analisado com sucesso!");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Cole a URL do seus repositório do Github (ex:
                https://github.com/USERNAME?tab=repositories)
              </label>
              <Input
                placeholder="https://github.com/seuperfil"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
              />
            </div>
            <Button onClick={handleAnalyze} disabled={loading}>
              {loading ? "Analisando..." : "Analisar Github"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {loading && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Analisando...</h3>
            <p>
              Estamos gerando insights para o seu perfil, por favor, aguarde.
            </p>
          </CardContent>
        </Card>
      )}

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
