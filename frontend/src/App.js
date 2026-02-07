import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import AceLabsPage from "@/pages/AceLabsPage";
import GrowthEngineeringPage from "@/pages/GrowthEngineeringPage";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/labs" element={<AceLabsPage />} />
        <Route path="/growth-engineering" element={<GrowthEngineeringPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
