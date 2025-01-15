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
  const [test, setTest] = useState<{
    description: string;
    requirements: string[];
    tips: string[];
  } | null>(null);

  const generateTest = () => {
    // Mock test generation - in a real app, you'd have more tests and possibly an API
    const tests = {
      junior: {
        description:
          "Desenvolva uma aplicação de lista de tarefas (Todo List) com as funcionalidades básicas de CRUD",
        requirements: [
          "Usar React com TypeScript",
          "Implementar adição, edição e remoção de tarefas",
          "Persistir dados no localStorage",
          "Implementar filtros (Todas, Ativas, Concluídas)",
          "Adicionar validações básicas"
        ],
        tips: [
          "Foque na organização do código",
          "Use componentes reutilizáveis",
          "Implemente um bom design responsivo",
          "Adicione testes unitários básicos"
        ]
      },
      pleno: {
        description:
          "Crie uma aplicação de e-commerce simplificada com carrinho de compras",
        requirements: [
          "Usar React com TypeScript e Context API ou Redux",
          "Implementar listagem de produtos com filtros",
          "Criar carrinho de compras persistente",
          "Adicionar autenticação de usuário",
          "Implementar checkout básico"
        ],
        tips: [
          "Use boas práticas de performance",
          "Implemente testes unitários e de integração",
          "Adicione documentação clara",
          "Use TypeScript corretamente"
        ]
      },
      senior: {
        description:
          "Desenvolva um sistema de chat em tempo real com salas temáticas",
        requirements: [
          "Usar React com TypeScript e WebSocket",
          "Implementar autenticação e autorização",
          "Criar salas de chat públicas e privadas",
          "Adicionar funcionalidade de upload de arquivos",
          "Implementar notificações em tempo real"
        ],
        tips: [
          "Foque na escalabilidade do código",
          "Implemente testes end-to-end",
          "Use padrões de projeto adequados",
          "Considere aspectos de segurança"
        ]
      }
    };

    setTest(tests[selectedLevel as keyof typeof tests]);
    toast.success("Teste técnico gerado!");
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
            <Button onClick={generateTest}>Gerar Teste Técnico</Button>
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