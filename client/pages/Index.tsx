import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Value from "../components/Value";
import UseCases from "../components/UseCases";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Index() {
  useEffect(() => {
    // Set page title and meta description
    document.title = "RedactIQ — AI Screenshot Redaction for Business";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Capture screenshots, automatically remove sensitive data, and extract insights in seconds. Privacy-first, business-ready, with region pinning and team libraries.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Capture screenshots, automatically remove sensitive data, and extract insights in seconds. Privacy-first, business-ready, with region pinning and team libraries.';
      document.head.appendChild(meta);
    }

    // Add Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'RedactIQ — AI Screenshot Redaction for Business';
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Capture screenshots, automatically remove sensitive data, and extract insights in seconds. Privacy-first, business-ready, with region pinning and team libraries.';
      document.head.appendChild(meta);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      meta.content = '/og.png';
      document.head.appendChild(meta);
    }

    // Add smooth scrolling CSS
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Value />
        <UseCases />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
