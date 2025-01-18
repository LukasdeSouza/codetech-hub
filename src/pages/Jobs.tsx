import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { JobForm } from "@/components/JobForm";
import { Job, jobScraper } from "@/services/jobScraper";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 5;

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const scrapedJobs = await jobScraper.scrapeJobs();
        setJobs(scrapedJobs);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch jobs. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [toast]);

  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentJobs = jobs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index}>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-48 h-48">
                    <Skeleton className="w-full h-full" />
                  </div>
                  <div className="flex-1 p-6">
                    <Skeleton className="h-6 w-2/3 mb-4" />
                    <Skeleton className="h-4 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-1/3" />
                  </div>
                </div>
              </Card>
            ))
          ) : (
            currentJobs.map((job) => (
              <Card key={job.id} className="hover:bg-accent transition-all">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{job.title}</CardTitle>
                          <p className="text-muted-foreground">{job.company}</p>
                        </div>
                        <Button asChild>
                          <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                            Candidatar-se
                          </a>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>{job.location}</span>
                          <span>{job.type}</span>
                          {job.salaryRange && <span>{job.salaryRange}</span>}
                        </div>
                        <p className="text-sm">{job.description}</p>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {!loading && totalPages > 1 && (
          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index + 1}>
                    <PaginationLink
                      onClick={() => handlePageChange(index + 1)}
                      isActive={currentPage === index + 1}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </main>
    </div>
  );
};

export default Jobs;