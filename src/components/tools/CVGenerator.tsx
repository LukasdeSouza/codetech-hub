import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const CVGenerator = () => {
  const [skills, setSkills] = useState("");
  const [generatedCV, setGeneratedCV] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!skills.trim()) {
      toast.error("Please enter your skills first");
      return;
    }

    // This is a mock CV generation - in a real app, you'd call an API
    const cv = `
PROFESSIONAL SUMMARY
A dedicated professional with expertise in:
${skills}

TECHNICAL SKILLS
${skills.split(",").map(skill => "• " + skill.trim()).join("\n")}

PROFESSIONAL EXPERIENCE
[Previous work experience would be generated based on skills]

EDUCATION
[Education details would be added here]
    `;

    setGeneratedCV(cv);
    toast.success("CV generated successfully!");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Enter your skills and experience
              </label>
              <Textarea
                placeholder="Example: 2 years React JS, AWS knowledge, NodeJs, SQL..."
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            <Button onClick={handleGenerate}>Generate CV</Button>
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
                toast.success("CV copied to clipboard!");
              }}
            >
              Copy to Clipboard
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};