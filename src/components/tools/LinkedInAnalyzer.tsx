import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const LinkedInAnalyzer = () => {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [suggestions, setSuggestions] = useState<{ category: string; suggestion: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = () => {
    if (!linkedinUrl.includes("linkedin.com/in/")) {
      toast.error("Por favor, insira uma URL válida do LinkedIn");
      return;
    }

    setIsLoading(true); // Inicia o "loading"
    setSuggestions([]); // Limpa as sugestões antigas

    // Simula uma análise com delay
    setTimeout(() => {
      const dynamicAnalysis = [
        {
          category: "Foto de Perfil",
          suggestion: "Certifique-se de ter uma foto de perfil profissional, com boa iluminação e um fundo neutro."
        },
        {
          category: "Sobre",
          suggestion:
            "Adicione um resumo atraente na seção 'Sobre', destacando suas habilidades, experiências e objetivos profissionais."
        },
        {
          category: "Experiência",
          suggestion:
            "Garanta que suas experiências tenham descrições detalhadas, incluindo realizações quantificáveis e palavras-chave relacionadas ao seu setor."
        },
        {
          category: "Conexões",
          suggestion: "Expanda sua rede conectando-se com colegas, líderes do setor e pessoas de interesse profissional."
        },
        {
          category: "Certificações",
          suggestion: "Adicione certificações relevantes para destacar suas qualificações extras."
        }
      ];

      // Embaralha as sugestões para parecer dinâmico
      const shuffledSuggestions = dynamicAnalysis
        .map((item) => ({ ...item, randomOrder: Math.random() }))
        .sort((a, b) => a.randomOrder - b.randomOrder)
        .map(({ randomOrder, ...rest }) => rest);

      setSuggestions(shuffledSuggestions);
      setIsLoading(false); // Finaliza o "loading"
      toast.success("Análise concluída com sucesso!");
    }, 2000); // 2 segundos simulando processamento
  };

  return (
    <div className="space-y-6">
      {/* Card para inserção do URL */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Cole a URL do seu LinkedIn
              </label>
              <Input
                placeholder="https://www.linkedin.com/in/seu-perfil"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
              />
            </div>
            <Button onClick={handleAnalyze}>Analisar Perfil</Button>
          </div>
        </CardContent>
      </Card>

      {/* Simula o carregamento */}
      {isLoading && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Analisando perfil...</h3>
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-200 h-10 w-10"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Card para exibir sugestões */}
      {suggestions.length > 0 && !isLoading && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Sugestões de Melhoria</h3>
            <ul className="space-y-4">
              {suggestions.map((item, index) => (
                <li key={index} className="space-y-1">
                  <strong className="text-primary">{item.category}:</strong>
                  <p>{item.suggestion}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
