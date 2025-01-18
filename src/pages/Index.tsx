import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import { AdBanner } from "@/components/AdBanner";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-10000 mb-6">
            uma mão na roda para desenvolvedores
          </h1>
          <p className="text-xl font-light text-gray-100 mb-8">
            acesse ferramentas e melhore seus estudos.
          </p>
          
          {/* Ad Banner placed between content */}
          {/* <AdBanner slot="YOUR-AD-SLOT-ID" /> */}
          
          <div className="flex justify-center gap-4">
            <Button 
              size="lg"
              variant="outline"
              // onClick={() => navigate("/jobs")}
            >
             é tudo de graça
            </Button>
            <Button 
              size="lg"
              onClick={() => navigate("/courses")}
              className="bg-primary hover:bg-primary/90"
            >
              Ver Ferramentas
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black border border-slate-600 rounded-lg shadow-sm hover:scale-95 transition-all ease-in-out duration-300">
              <h3 className="text-xl font-semibold mb-2">Análise de Currículo automática</h3>
              <p className="text-gray-300 font-light">só copiar, colar e receber sua análise, tudo grátis.</p>
            </div>
            <div className="p-6 bg-black border border-slate-600 rounded-lg shadow-sm hover:scale-95 transition-all ease-in-out duration-300">
              <h3 className="text-xl font-semibold mb-2">Análise de Linkedin e Github</h3>
              <p className="text-gray-300 font-light">só enviar o link e receber a análise</p>
            </div>
            <div className="p-6 bg-black border border-slate-600 rounded-lg shadow-sm hover:scale-95 transition-all ease-in-out duration-300">
              <h3 className="text-xl font-semibold mb-2">Gerador de idéias para projetos</h3>
              <p className="text-gray-300 font-light">sem idéia de que projeto fazer? nós te ajudamos</p>
            </div>
            <div className="p-6 bg-black border border-slate-600 rounded-lg shadow-sm hover:scale-95 transition-all ease-in-out duration-300">
              <h3 className="text-xl font-semibold mb-2">Criador de teste técnicos</h3>
              <p className="text-gray-300 font-light">pra você se preparar sem sofrer</p>
            </div>
            {/* <div className="p-6 bg-black border border-slate-600 rounded-lg shadow-sm">
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
            </div> */}
          </div>
          
          {/* Another Ad Banner at the bottom */}
          <AdBanner slot="YOUR-SECOND-AD-SLOT-ID" format="horizontal" />
        </div>
      </main>
    </div>
  );
};

export default Index;