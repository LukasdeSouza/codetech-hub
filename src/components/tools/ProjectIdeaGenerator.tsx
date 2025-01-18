import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export const ProjectIdeaGenerator = () => {
  const [selectedArea, setSelectedArea] = useState<string>("frontend");
  const [projectIdea, setProjectIdea] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRandomIdea = () => {
    setIsLoading(true); // Ativa o loading

    setTimeout(() => {
      const ideas = {
        frontend: [
          "Um dashboard para monitoramento de criptomoedas em tempo real",
          "Um clone do Trello com funcionalidades personalizadas",
          "Uma plataforma de portfólio para desenvolvedores",
          "Um editor de código online com temas personalizáveis",
          "Uma aplicação de gerenciamento de tarefas com Kanban",
          "Um site de comparação de preços para e-commerce",
          "Uma aplicação para rastreamento de saúde e exercícios",
          "Uma plataforma interativa de quiz com gamificação",
          "Um sistema de votação em tempo real para eventos ao vivo",
          "Um aplicativo de visualização de dados com gráficos dinâmicos",
        ],
        backend: [
          "Uma API RESTful para um sistema de blog",
          "Um microserviço de autenticação com JWT",
          "Um sistema de agendamento com Node.js",
          "Uma API de e-commerce com Express e MongoDB",
          "Um serviço de upload de arquivos com AWS S3",
          "Um sistema de notificações em tempo real com WebSockets",
          "Um serviço de análise de logs para aplicações web",
          "Uma API de gerenciamento de inventário com PostgreSQL",
          "Um sistema de gerenciamento de usuários com permissões hierárquicas",
          "Um serviço para envio de e-mails em massa utilizando Amazon SES",
        ],
        mobile: [
          "Um app de rastreamento de hábitos diários",
          "Um aplicativo de delivery para restaurantes locais",
          "Um app de lista de compras compartilhada",
          "Um aplicativo de meditação e mindfulness",
          "Um app de controle financeiro pessoal",
          "Um aplicativo de planejamento de viagens com mapas interativos",
          "Um app de receitas com busca por ingredientes",
          "Um aplicativo para treinos personalizados com cronômetro integrado",
          "Um app para reserva de coworking spaces",
          "Um aplicativo para rastrear leitura de livros e metas",
        ],
        fullstack: [
          "Uma plataforma de cursos online com suporte a videoaulas e quizzes",
          "Um sistema de gerenciamento de eventos com RSVP",
          "Um aplicativo de chat com autenticação e envio de arquivos",
          "Uma aplicação para agendamento de consultas médicas",
          "Um marketplace de produtos artesanais",
          "Uma plataforma de crowdfunding para projetos sociais",
          "Um sistema de gerenciamento de biblioteca com empréstimos e devoluções",
          "Uma aplicação de networking para profissionais com recomendações baseadas em interesses",
          "Um sistema de rastreamento de encomendas com integração de APIs de transporte",
          "Uma plataforma de desafios de programação com rankings e badges",
        ],
        devops: [
          "Um pipeline de CI/CD com integração ao GitHub Actions",
          "Uma infraestrutura como código (IaC) com Terraform para provisionar servidores em AWS",
          "Um sistema de monitoramento de servidores com Prometheus e Grafana",
          "Um ambiente Dockerizado para desenvolvimento colaborativo",
          "Um sistema de logging centralizado com ELK Stack (Elasticsearch, Logstash, Kibana)",
          "Uma solução de backup automatizado para bancos de dados em nuvem",
          "Um cluster Kubernetes para gerenciar microsserviços",
          "Uma ferramenta de análise de custos em nuvem para otimização de recursos",
          "Um sistema de balanceamento de carga com Nginx e HAProxy",
          "Um ambiente de testes automatizados para aplicações web utilizando Jenkins",
        ],
      };

      const randomIdea = ideas[selectedArea as keyof typeof ideas][
        Math.floor(Math.random() * 10)
      ];
      setProjectIdea(randomIdea);
      toast.success("Nova ideia gerada!");
      setIsLoading(false); // Desativa o loading
    }, 2000); // Simula um delay de 2 segundos
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Selecione a área do projeto:
              </label>
              <Select
                value={selectedArea}
                onValueChange={(value) => setSelectedArea(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a área" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="frontend">Frontend</SelectItem>
                  <SelectItem value="fullstack">Fullstack</SelectItem>
                  <SelectItem value="backend">Backend</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                  <SelectItem value="devops">Devops</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={getRandomIdea} disabled={isLoading}>
              {isLoading ? "Gerando..." : "Gerar Ideia de Projeto"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {projectIdea && !isLoading && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Sua Ideia de Projeto</h3>
            <p className="text-lg">{projectIdea}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
