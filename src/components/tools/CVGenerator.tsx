import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const CVGenerator = () => {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [projects, setProjects] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [languages, setLanguages] = useState("");
  const [generatedCV, setGeneratedCV] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!name.trim() || !summary.trim()) {
      toast.error("Por favor, preencha seu nome e resumo profissional.");
      return;
    }

    const cv = `
**Nome Completo:** ${name}

**Resumo Profissional:**
${summary}

**Habilidades Técnicas:**
${technologies
  .split(",")
  .map((tech) => "• " + tech.trim())
  .join("\n")}

**Experiência Profissional:**
${experience || "Ainda não possuo experiência profissional formal."}

**Educação:**
${education || "Não especificado."}

**Projetos:**
${projects
  .split(",")
  .map((proj) => "• " + proj.trim())
  .join("\n") || "Nenhum projeto informado."}

**Idiomas:**
${languages || "Não especificado."}

**Informações Adicionais:**
${skills || "Não informado."}
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
                  placeholder="Exemplo: Harry Potter"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="min-h-[50px]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Resumo Profissional:
              </label>
              <Textarea
                placeholder="Exemplo: Desenvolvedor com experiência em..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Habilidades Técnicas (separe por vírgula):
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
                Experiência Profissional:
              </label>
              <Textarea
                placeholder="Exemplo: Desenvolvedor Frontend na Empresa X..."
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Formação Acadêmica:
              </label>
              <Textarea
                placeholder="Exemplo: Bacharel em Ciência da Computação..."
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Projetos Desenvolvidos (separe por vírgula):
              </label>
              <Textarea
                placeholder="Exemplo: Calculadora de IMC, Sistema de Gestão..."
                value={projects}
                onChange={(e) => setProjects(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Idiomas:</label>
              <Textarea
                placeholder="Exemplo: Português (nativo), Inglês (avançado)"
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
                className="min-h-[50px]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Informações Adicionais:
              </label>
              <Textarea
                placeholder="Exemplo: Certificações, cursos, hobbies..."
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="min-h-[50px]"
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
              Copiar Currículo
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
