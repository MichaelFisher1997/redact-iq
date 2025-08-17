import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showDevDialog, setShowDevDialog] = useState(false);

  useEffect(() => {
    const hasSeenDialog = localStorage.getItem("redactiq-dev-notice");
    if (!hasSeenDialog) {
      setShowDevDialog(true);
    }
  }, []);

  const handleCloseDialog = () => {
    localStorage.setItem("redactiq-dev-notice", "true");
    setShowDevDialog(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AlertDialog open={showDevDialog} onOpenChange={setShowDevDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>🚧 In Development</AlertDialogTitle>
                <AlertDialogDescription>
                  This site is currently under development. Some features may not be fully functional yet.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogAction onClick={handleCloseDialog}>
                Got it
              </AlertDialogAction>
            </AlertDialogContent>
          </AlertDialog>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
