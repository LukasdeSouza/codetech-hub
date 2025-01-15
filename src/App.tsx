import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import { Navigation } from "@/components/Navigation";
import { Dialog } from "@/components/ui/dialog";
import { CourseForm } from "@/components/CourseForm";
import { VideoForm } from "@/components/VideoForm";
import { PlusCircle, Video } from "lucide-react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
