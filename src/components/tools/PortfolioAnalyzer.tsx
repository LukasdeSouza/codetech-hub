import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const PortfolioAnalyzer = () => {
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = () => {
    if (!portfolioUrl.startsWith("http")) {
      toast.error("Já tá errado, seu portifólio deveria ser HTTPS, não HTTP");
      return;
    }

    setIsLoading(true); // Inicia o "loading"
    setSuggestions([]); // Limpa sugestões anteriores

    // Simula uma análise com delay
    setTimeout(() => {
      const dynamicSuggestions = [
        "Adicione mais projetos pessoais para mostrar sua criatividade.",
        "Inclua descrições detalhadas de cada projeto, destacando desafios e soluções.",
        "Adicione links para demonstrações ao vivo dos projetos ou repositórios no GitHub.",
        "Melhore a responsividade do site para funcionar bem em dispositivos móveis.",
        "Adicione uma seção de blog técnico para compartilhar seu conhecimento.",
        "Certifique-se de que o portfólio tenha um design visual coeso e atraente.",
        "Inclua uma seção 'Sobre mim' com informações profissionais e um toque pessoal.",
        "Adicione depoimentos ou feedback de clientes e colegas.",
        "Garanta que as páginas carreguem rapidamente para uma boa experiência do usuário.",
        "Use SEO básico para melhorar a visibilidade do portfólio em mecanismos de busca."
      ];

      // Embaralha as sugestões
      const shuffledSuggestions = dynamicSuggestions
        .map((item) => ({ text: item, randomOrder: Math.random() }))
        .sort((a, b) => a.randomOrder - b.randomOrder)
        .map(({ text }) => text);

      setSuggestions(shuffledSuggestions.slice(0, 5)); // Exibe apenas 5 sugestões
      setIsLoading(false); // Finaliza o "loading"
      toast.success("Análise concluída com sucesso!");
    }, 2000); // Simula 2 segundos de processamento
  };

  return (
    <div className="space-y-6">
      {/* Card para inserção do URL */}
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

      {/* Simula o carregamento */}
      {isLoading && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Analisando portfólio...</h3>
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
