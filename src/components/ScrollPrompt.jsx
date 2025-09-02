import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react"; // arrow icon

export const ScrollPrompt = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight, // scrolls one screen down
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer transition-all duration-500 ${
        hidden ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      }`}
      onClick={scrollToNext}
    >
      {/* Text above arrow */}
      <p className="text-gray-700 text-lg font-medium">Contact</p>

      {/* Arrow */}
      <ChevronDown size={40} className="animate-bounce text-gray-800" />
    </div>
  );
}