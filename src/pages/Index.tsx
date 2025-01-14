import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-10000 mb-6">
            Evolua sua Carreira como Dev
          </h1>
          <p className="text-xl font-light text-gray-100 mb-8">
            acesse ferramentas, se conecte com uma comunidade engajada, e ache sua próxima vaga.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => navigate("/courses")}
              className="bg-primary hover:bg-primary/90"
            >
              Ver cursos
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/jobs")}
            >
              Ver vagas
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black border border-slate-600 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Conteúdo Premium</h3>
              <p className="text-gray-300 font-light">aprenda SQL, React, Javascript, Node e mais.</p>
            </div>
            <div className="p-6 bg-black border border-slate-600 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hub da Comunidade</h3>
              <p className="text-gray-300 font-light">Se conecte com outros desenvolvedor com o mesmo objetivo.</p>
            </div>
            <div className="p-6 bg-black border border-slate-600 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Quadro de Vagas</h3>
              <p className="text-gray-300 font-light">Achei sua próxima oportunidade com nossa listagem de emprego.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;