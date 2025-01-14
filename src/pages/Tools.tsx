import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CVGenerator } from "@/components/tools/CVGenerator";
import { LinkedInAnalyzer } from "@/components/tools/LinkedInAnalyzer";
import { useState } from "react";

const Tools = () => {
  const [activeTool, setActiveTool] = useState<"cv" | "linkedin" | null>(null);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Career Tools</h1>
      
      {!activeTool ? (
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:border-primary cursor-pointer transition-colors" 
                onClick={() => setActiveTool("cv")}>
            <CardHeader>
              <CardTitle>CV Generator</CardTitle>
              <CardDescription>
                Generate a professional CV based on your skills and experience
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:border-primary cursor-pointer transition-colors"
                onClick={() => setActiveTool("linkedin")}>
            <CardHeader>
              <CardTitle>LinkedIn Profile Analyzer</CardTitle>
              <CardDescription>
                Get personalized suggestions to improve your LinkedIn profile
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      ) : (
        <div className="space-y-4">
          <Button 
            variant="outline" 
            onClick={() => setActiveTool(null)}
            className="mb-4"
          >
            ← Back to Tools
          </Button>
          
          {activeTool === "cv" && <CVGenerator />}
          {activeTool === "linkedin" && <LinkedInAnalyzer />}
        </div>
      )}
    </div>
  );
};

export default Tools;