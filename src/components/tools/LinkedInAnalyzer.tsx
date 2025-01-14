import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const LinkedInAnalyzer = () => {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleAnalyze = () => {
    if (!linkedinUrl.includes("linkedin.com")) {
      toast.error("Please enter a valid LinkedIn URL");
      return;
    }

    // This is mock analysis - in a real app, you'd call an API
    const mockSuggestions = [
      "Add more keywords related to your industry",
      "Include quantifiable achievements in your experience",
      "Update your profile picture to a professional headshot",
      "Add relevant certifications to your profile",
      "Expand your network by connecting with industry professionals"
    ];

    setSuggestions(mockSuggestions);
    toast.success("Profile analyzed successfully!");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Cole a URL do seu Linkedin
              </label>
              <Input
                placeholder="https://www.linkedin.com/in/yourprofile"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
              />
            </div>
            <Button onClick={handleAnalyze}>Analisar Perfil</Button>
          </div>
        </CardContent>
      </Card>

      {suggestions.length > 0 && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Sugestões de Melhoria</h3>
            <ul className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};