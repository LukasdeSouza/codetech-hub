import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const CVGenerator = () => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [time, setTime] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [generatedCV, setGeneratedCV] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!skills.trim()) {
      toast.error("Please enter your skills first");
      return;
    }

    // This is a mock CV generation - in a real app, you'd call an API
    const cv = `

    Olá me chamo ${name} e sou um desenvolvedor de software com foco em programação e desenvolvimento de sistemas personalizados.
    Abaixo se encontra um pouco do meu resumo profissional, das tecnologias que conheço e do tempo de estudo que tenho na área.


RESUMO PROFISSIONAL
Profissional dedicado na área da programação, com diversas habilidades e expertise em em diferentes tecnologias.
Tive a oportunidade de contribuir ativamente em diversos projetos, individualmente e em equipe, como:
${skills}


TECNOLOGIAS
Conheço diversas tecnologias relacionadas a programação e desenvolvimento de software, não só teoricamente mas também de maneira prática 
conforme os exemplos citados anteriormente. Utilizando essas tecnologias já construi aplicações pessoais e empresariais:
${technologies
  .split(",")
  .map((skill) => "• " + skill.trim())
  .join("\n")}

EXPERIÊNCIA PROVISSIONAL EXPERIENCE
Atualmente tenho ${time} de estudo na área de programação com foco em aprimorar meu conhecimento e sempre disposto a aprender.

    `;

    setGeneratedCV(cv);
    toast.success("Currículo Gerado com Sucesso!");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">
                  Seu nome completo:
                </label>
                <Textarea
                  placeholder="Abraham Lincoln"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Quais tecnologias você usa?
              </label>
              <Textarea
                placeholder="Exemplo: C#, SQL, React"
                value={technologies}
                onChange={(e) => setTechnologies(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Quais projetos você já desenvolveu ? Seja sozinho ou em equipe.
              </label>
              <Textarea
                placeholder="Exemplo: calculadora de IMC"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Quando tempo de estudos você já tem ?
              </label>
              <Textarea
                placeholder="Exemplo: 6 meses de estudo"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            <Button onClick={handleGenerate}>Gerar Currículo</Button>
          </div>
        </CardContent>
      </Card>

      {generatedCV && (
        <Card>
          <CardContent className="pt-6">
            <pre className="whitespace-pre-wrap font-mono text-sm">
              {generatedCV}
            </pre>
            <Button
              className="mt-4"
              onClick={() => {
                navigator.clipboard.writeText(generatedCV);
                toast.success("Currículo copiado!");
              }}
            >
              Copiar Resultado
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
