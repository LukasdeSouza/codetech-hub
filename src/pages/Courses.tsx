import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MOCK_COURSES = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Learn the basics of React development",
    level: "Beginner",
    duration: "6 hours",
  },
  {
    id: 2,
    title: "Advanced TypeScript",
    description: "Master TypeScript and its advanced features",
    level: "Advanced",
    duration: "8 hours",
  },
  {
    id: 3,
    title: "Node.js Backend",
    description: "Build scalable backend services with Node.js",
    level: "Intermediate",
    duration: "10 hours",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Cursos Disponíveis</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_COURSES.map((course) => (
            <Card key={course.id} className="hover:bg-slate-800 transition-all scale-95 hover:scale-100 cursor-pointer">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="text-green-600">{course.level}</span>
                  <span className="text-primary">{course.duration}</span>
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