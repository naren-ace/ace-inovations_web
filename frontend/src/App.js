import "@/App.css";
import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import HomePage from "@/pages/HomePage";
import AceLabsPage from "@/pages/AceLabsPage";
import AceSquadsPage from "@/pages/AceSquadsPage";
import AceStacksPage from "@/pages/AceStacksPage";
import GrowthEngineeringPage from "@/pages/GrowthEngineeringPage";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <LoadingAnimation onComplete={handleComplete} />}
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/labs" element={<AceLabsPage />} />
          <Route path="/squads" element={<AceSquadsPage />} />
          <Route path="/stacks" element={<AceStacksPage />} />
          <Route path="/growth-engineering" element={<GrowthEngineeringPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
