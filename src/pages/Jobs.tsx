import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { JobForm } from "@/components/JobForm";

const MOCK_JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "StartupX",
    location: "New York, NY",
    type: "Full-time",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "React Developer",
    company: "DevAgency",
    location: "Remote",
    type: "Contract",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
  },
];

const Jobs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Vagas Disponíveis</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Criar Nova Vaga</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Criar uma Nova Vaga</DialogTitle>
              </DialogHeader>
              <JobForm />
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="space-y-4">
          {MOCK_JOBS.map((job) => (
            <Card key={job.id} className="hover:bg-accent transition-all">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-48 h-48">
                  <img 
                    src={job.image} 
                    alt={job.company}
                    className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{job.title}</CardTitle>
                        <p className="text-muted-foreground">{job.company}</p>
                      </div>
                      <Button>Candidatar-se</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{job.location}</span>
                      <span>{job.type}</span>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Jobs;