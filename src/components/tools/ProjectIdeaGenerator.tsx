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

  const getRandomIdea = () => {
    const ideas = {
      frontend: [
        "Um dashboard para monitoramento de criptomoedas em tempo real",
        "Um clone do Trello com funcionalidades personalizadas",
        "Uma plataforma de portfólio para desenvolvedores",
        "Um editor de código online com temas personalizáveis",
        "Uma aplicação de gerenciamento de tarefas com Kanban"
      ],
      backend: [
        "Uma API RESTful para um sistema de blog",
        "Um microserviço de autenticação com JWT",
        "Um sistema de agendamento com Node.js",
        "Uma API de e-commerce com Express e MongoDB",
        "Um serviço de upload de arquivos com AWS S3"
      ],
      mobile: [
        "Um app de rastreamento de hábitos diários",
        "Um aplicativo de delivery para restaurantes locais",
        "Um app de lista de compras compartilhada",
        "Um aplicativo de meditação e mindfulness",
        "Um app de controle financeiro pessoal"
      ]
    };

    const randomIdea = ideas[selectedArea as keyof typeof ideas][
      Math.floor(Math.random() * 5)
    ];
    setProjectIdea(randomIdea);
    toast.success("Nova ideia gerada!");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Selecione a área
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
                  <SelectItem value="backend">Backend</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={getRandomIdea}>Gerar Ideia de Projeto</Button>
          </div>
        </CardContent>
      </Card>

      {projectIdea && (
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