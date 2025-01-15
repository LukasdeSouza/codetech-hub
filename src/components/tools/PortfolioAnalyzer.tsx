import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const PortfolioAnalyzer = () => {
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleAnalyze = () => {
    if (!portfolioUrl.includes("http")) {
      toast.error("Por favor, insira uma URL válida");
      return;
    }

    // Mock analysis - in a real app, you'd call an API
    const mockSuggestions = [
      "Adicione mais projetos pessoais para mostrar sua criatividade",
      "Inclua descrições detalhadas de cada projeto",
      "Adicione links para demonstrações ao vivo dos projetos",
      "Melhore a responsividade do site",
      "Adicione uma seção de blog técnico"
    ];

    setSuggestions(mockSuggestions);
    toast.success("Portfólio analisado com sucesso!");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Cole a URL do seu Portfólio
              </label>
              <Input
                placeholder="https://seuportfolio.com"
                value={portfolioUrl}
                onChange={(e) => setPortfolioUrl(e.target.value)}
              />
            </div>
            <Button onClick={handleAnalyze}>Analisar Portfólio</Button>
          </div>
        </CardContent>
      </Card>

      {suggestions.length > 0 && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Sugestões de Melhoria</h3>
            <ul className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};