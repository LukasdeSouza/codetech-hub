import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 
              onClick={() => navigate("/")} 
              className="text-xl font-bold text-foreground cursor-pointer"
            >
              DevLearn Hub
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/courses")}
              className="text-foreground hover:text-foreground/80"
            >
              Courses
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/jobs")}
              className="text-foreground hover:text-foreground/80"
            >
              Jobs
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/chat")}
              className="text-foreground hover:text-foreground/80"
            >
              Chat
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