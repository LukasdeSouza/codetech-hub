import { Navigation } from "@/components/Navigation";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// This would typically come from your API/backend
const MOCK_COURSES = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Learn the basics of React development",
    level: "Beginner",
    duration: "6 hours",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
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
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
    videos: [],
  },
  {
    id: 3,
    title: "Node.js Backend",
    description: "Build scalable backend services with Node.js",
    level: "Intermediate",
    duration: "10 hours",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
    videos: [],
  },
];

const Certificate = ({
  course,
  userName,
}: {
  course: any;
  userName: string;
}) => {
  return (
    <div id="certificate" className="hidden">
      <div
        className="bg-white p-12 text-center"
        style={{ width: "800px", height: "600px" }}
      >
        <h1 className="text-6xl font-bold mb-8">Certificado de Conclusão</h1>
        <p className="text-xl mb-8">Este certificado confirma que o aluno</p>
        <p className="text-3xl text-slate-500 font-bold mb-8">{userName}</p>
        <p className="text-xl mb-8">
          completou com sucesso as horas de aluno do curso de
        </p>
        <p className="text-3xl text-primary font-bold mb-8">{course.title}</p>
        <div className="flex flex-row gap-4">
          <p className="text-sm text-slate-500">
            Data: {new Date().toLocaleDateString()}
          </p>
          <p className="text-sm text-slate-500">
            Emitido por Codetech-Hub: www.codetech.software{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = MOCK_COURSES.find((c) => c.id === Number(id));
  const userName = localStorage.getItem("userName") || "Student Name"; // You should get this from your auth context

  const downloadCertificate = async () => {
    const certificateElement = document.getElementById("certificate");
    if (!certificateElement) return;

    try {
      certificateElement.style.display = "block";
      const canvas = await html2canvas(certificateElement);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", [594, 420]);
      pdf.addImage(imgData, "PNG", 0, 0, 594, 420);
      pdf.save(`${course?.title}-CodetechHub.pdf`);

      certificateElement.style.display = "none";
    } catch (error) {
      console.error("Error generating certificate:", error);
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center">
            Curso não encontrado
          </h1>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <div className="flex gap-4 text-sm mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                {course.level}
              </span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                {course.duration}
              </span>
            </div>
            <p className="text-muted-foreground text-lg">
              {course.description}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Conteúdo do Curso</h2>
              <Button onClick={downloadCertificate} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Baixar Certificado
              </Button>
            </div>
            {course.videos.map((video) => (
              <Card key={video.id}>
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {video.description}
                  </p>
                  <div className="aspect-video w-full">
                    <iframe
                      src={`${video.videoUrl}?controls=0`}
                      title={video.title}
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Certificate course={course} userName={userName} />
      </main>
    </div>
  );
};

export default CourseDetail;
