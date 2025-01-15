import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CourseForm } from "@/components/CourseForm";
import { VideoForm } from "@/components/VideoForm";
import { PlusCircle, Video } from "lucide-react";

const MOCK_COURSES = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Learn the basics of React development",
    level: "Beginner",
    duration: "6 hours",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
    videos: [
      {
        id: 1,
        title: "Introduction to React",
        description: "Basic concepts and setup",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: 2,
        title: "Components and Props",
        description: "Understanding React components",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  },
  {
    id: 2,
    title: "Advanced TypeScript",
    description: "Master TypeScript and its advanced features",
    level: "Advanced",
    duration: "8 hours",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
    videos: [],
  },
  {
    id: 3,
    title: "Node.js Backend",
    description: "Build scalable backend services with Node.js",
    level: "Intermediate",
    duration: "10 hours",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
    videos: [],
  },
];

const isAdmin = true; // This should come from your auth context

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Cursos Disponíveis</h1>
          {isAdmin && (
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Novo Curso
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Criar Novo Curso</DialogTitle>
                </DialogHeader>
                <CourseForm />
              </DialogContent>
            </Dialog>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_COURSES.map((course) => (
            <Card key={course.id} className="hover:bg-accent transition-all scale-95 hover:scale-100 cursor-pointer overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-green-500">{course.level}</span>
                  <span className="text-primary">{course.duration}</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Vídeos do Curso</h3>
                    {isAdmin && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Video className="mr-2 h-4 w-4" />
                            Adicionar Vídeo
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Adicionar Novo Vídeo</DialogTitle>
                          </DialogHeader>
                          <VideoForm />
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    {course.videos.map((video) => (
                      <div key={video.id} className="p-4 rounded-lg bg-card border">
                        <h4 className="font-medium mb-1">{video.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {video.description}
                        </p>
                        <div className="aspect-video w-full">
                          <iframe
                            src={video.videoUrl}
                            title={video.title}
                            className="w-full h-full rounded-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;
