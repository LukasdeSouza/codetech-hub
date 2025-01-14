import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Level Up Your Dev Career
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Access premium courses, connect with a thriving community, and find your next job opportunity.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => navigate("/courses")}
              className="bg-primary hover:bg-primary/90"
            >
              Browse Courses
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/jobs")}
            >
              View Jobs
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Premium Courses</h3>
              <p className="text-gray-600">Learn from industry experts with our curated course selection.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Community Hub</h3>
              <p className="text-gray-600">Connect with other developers and grow together.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Job Board</h3>
              <p className="text-gray-600">Find your next opportunity with our exclusive job listings.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;