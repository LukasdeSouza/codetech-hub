import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MOCK_JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "StartupX",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: 3,
    title: "React Developer",
    company: "DevAgency",
    location: "Remote",
    type: "Contract",
  },
];

const Jobs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Job Opportunities</h1>
        
        <div className="space-y-4">
          {MOCK_JOBS.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <Button>Apply Now</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Jobs;