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

export const TechnicalTestGenerator = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("junior");
  const [selectedStack, setSelectedStack] = useState<string>("frontend");
  const [test, setTest] = useState<{
    description: string;
    requirements: string[];
    tips: string[];
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const shuffleArray = <T,>(array: T[]): T[] => {
    return array.sort(() => Math.random() - 0.5);
  };

  const generateTest = () => {
    setLoading(true);

    const tests = {
      junior: {
        frontend: [
          {
            description: "Desenvolva uma aplicação de lista de tarefas (Todo List) com funcionalidades básicas de CRUD.",
            requirements: [
              "Usar React com TypeScript",
              "Implementar adição, edição e remoção de tarefas",
              "Persistir dados no localStorage",
              "Adicionar validações básicas",
            ],
            tips: [
              "Foque na organização do código",
              "Use componentes reutilizáveis",
              "Adicione testes unitários básicos",
            ],
          },
        ],
        backend: [
          {
            description: "Desenvolva uma API RESTful para gerenciar uma lista de tarefas.",
            requirements: [
              "Usar Node.js com Express",
              "Criar rotas de CRUD (Create, Read, Update, Delete)",
              "Implementar autenticação JWT",
              "Adicionar validações para os dados enviados",
            ],
            tips: [
              "Foque na estrutura de pastas e modularidade",
              "Documente a API com Swagger ou outra ferramenta",
            ],
          },
        ],
        fullstack: [
          {
            description: "Desenvolva uma aplicação para gerenciar uma lista de tarefas com frontend e backend.",
            requirements: [
              "Criar um frontend com React",
              "Desenvolver uma API RESTful com Node.js",
              "Adicionar autenticação JWT e proteção de rotas",
              "Persistir dados em um banco de dados",
            ],
            tips: [
              "Divida responsabilidades entre frontend e backend",
              "Implemente boas práticas de segurança",
              "Documente a API e o processo de instalação",
            ],
          },
        ],
        mobile: [
          {
            description: "Desenvolva um aplicativo de lista de tarefas (Todo List) para dispositivos móveis.",
            requirements: [
              "Usar React Native ou Flutter",
              "Implementar adição, edição e remoção de tarefas",
              "Persistir dados localmente usando AsyncStorage ou SQLite",
            ],
            tips: [
              "Foque na interface responsiva e interativa",
              "Garanta a compatibilidade com diferentes dispositivos",
            ],
          },
        ],
      },
      pleno: {
        frontend: [
          {
            description: "Implemente um dashboard para exibir dados de usuários com gráficos e tabelas.",
            requirements: [
              "Usar React com TypeScript",
              "Adicionar biblioteca de gráficos (ex: Chart.js ou Recharts)",
              "Consumir uma API externa para buscar dados em tempo real",
              "Implementar paginação e ordenação em tabelas",
            ],
            tips: [
              "Foque na performance ao manipular grandes volumes de dados",
              "Garanta a responsividade do layout",
              "Adicione animações para melhorar a experiência do usuário",
            ],
          },
        ],
        backend: [
          {
            description: "Desenvolva um sistema de gerenciamento de usuários com autenticação e permissões.",
            requirements: [
              "Usar Node.js com NestJS",
              "Implementar autenticação com JWT e refresh tokens",
              "Criar sistema de permissões (ex: Admin, Usuário Comum)",
              "Adicionar logs de auditoria das ações realizadas",
            ],
            tips: [
              "Garanta a segurança com validação de entradas",
              "Implemente testes automatizados",
              "Documente todas as rotas da API",
            ],
          },
        ],
        // Adicione outros stacks conforme necessário
      },
      senior: {
        frontend: [
          {
            description: "Projete e desenvolva uma aplicação de e-commerce completa.",
            requirements: [
              "Usar Next.js com TypeScript",
              "Implementar carregamento SSR e SSG para otimização",
              "Adicionar integração com gateway de pagamento",
              "Gerenciar estado global com Redux ou Context API",
            ],
            tips: [
              "Foque na experiência do usuário (UX)",
              "Implemente um design acessível e responsivo",
              "Garanta a escalabilidade do código",
            ],
          },
        ],
        backend: [
          {
            description: "Crie uma arquitetura de microsserviços para um sistema de e-commerce.",
            requirements: [
              "Usar Node.js com NestJS e RabbitMQ",
              "Dividir o sistema em serviços de autenticação, catálogo e pedidos",
              "Implementar comunicação assíncrona entre serviços",
              "Adicionar monitoramento e logging centralizado",
            ],
            tips: [
              "Documente claramente a arquitetura proposta",
              "Garanta a resiliência dos serviços",
              "Implemente estratégias de caching para melhorar a performance",
            ],
          },
        ],
        // Outros stacks podem ser adicionados
      },
    };

    const levelTests = tests[selectedLevel as keyof typeof tests];
    const stackTests = levelTests?.[selectedStack as keyof typeof levelTests];

    if (!stackTests || stackTests.length === 0) {
      setLoading(false);
      toast.error("Ainda não há testes técnicos disponíveis para essa combinação.");
      return;
    }

    const randomTest = shuffleArray(stackTests)[0];

    setTimeout(() => {
      setTest(randomTest);
      setLoading(false);
      toast.success("Teste técnico gerado com sucesso!");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Selecione o nível
              </label>
              <Select
                value={selectedLevel}
                onValueChange={(value) => setSelectedLevel(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o nível" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="junior">Júnior</SelectItem>
                  <SelectItem value="pleno">Pleno</SelectItem>
                  <SelectItem value="senior">Sênior</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Selecione a Stack
              </label>
              <Select
                value={selectedStack}
                onValueChange={(value) => setSelectedStack(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a Stack" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="frontend">Frontend</SelectItem>
                  <SelectItem value="backend">Backend</SelectItem>
                  <SelectItem value="fullstack">Fullstack</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={generateTest} disabled={loading}>
              {loading ? "Gerando Teste..." : "Gerar Teste Técnico"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {test && (
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Descrição do Teste</h3>
              <p className="text-lg">{test.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Requisitos</h3>
              <ul className="space-y-2">
                {test.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Dicas</h3>
              <ul className="space-y-2">
                {test.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
