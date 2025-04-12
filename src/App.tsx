import { useEffect } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  // Smooth scroll functionality
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === "a") {
        const href = target.getAttribute("href");
        if (href?.startsWith("#")) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 100,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  useEffect(() => {
    // Defer animation initialization to next frame for better performance
    const timeout = setTimeout(() => {
      document.body.classList.add("loaded");
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
