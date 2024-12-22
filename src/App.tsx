import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MobileWorkoutPlan from "./pages/MobileWorkoutPlan";
import WorkoutLibrary from "./pages/WorkoutLibrary";
import { featuredWorkouts } from "./data/workouts";
import Progress from "./pages/Progress";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/fit-track">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/workout-plan" element={<MobileWorkoutPlan />} />
          <Route
            path="/workout-library"
            element={<WorkoutLibrary workouts={featuredWorkouts} />}
          />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;