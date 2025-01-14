import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 
              onClick={() => navigate("/")} 
              className="text-xl font-bold text-primary cursor-pointer"
            >
              DevLearn Hub
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/courses")}
            >
              Courses
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/jobs")}
            >
              Jobs
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