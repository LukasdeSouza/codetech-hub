import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex flex-row gap-1 items-baseline">
              <h1 
                onClick={() => navigate("/")} 
                className="text-xl font-semibold text-foreground cursor-pointer"
              >
                CodeHub
              </h1>
              <small className="text-xs">by Codetech</small>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/courses")}
              className="text-foreground hover:text-foreground/80"
            >
              Cursos
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/jobs")}
              className="text-foreground hover:text-foreground/80"
            >
              Emprego
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/chat")}
              className="text-foreground hover:text-foreground/80"
            >
              Chat e Comunidade
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/tools")}
              className="text-foreground hover:text-foreground/80"
            >
              Ferramentas
            </Button>
            <Button 
              variant="default"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};