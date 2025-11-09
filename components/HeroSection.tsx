import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import img from "../public/img.png";

interface HeroSectionProps {
  active: string;
  sliderRef: React.RefObject<HTMLDivElement | null>;
  scrollToSlide: (index: number) => void;
  slideIndex: Record<string, number>;
}

export default function HeroSection({ active }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#073737] via-[#0A3638] to-[#052525] min-h-screen text-white flex items-center justify-center overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-[#ff850b]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-[#ff850b]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-11/12 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <div className={`flex-1 text-center lg:text-left space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff850b]/30 bg-[#ff850b]/10">
              <div className="w-2 h-2 bg-[#ff850b] rounded-full"></div>
              <span className="text-sm text-gray-300">Available for work</span>
            </div>

            {/* Clean Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                <span className="text-white block">Abel</span>
                <span className="text-[#ff850b] block mt-2">Ronoh</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-400 font-light">
                Full-Stack Developer
              </div>
            </div>

            {/* Simple Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Crafting digital experiences with modern technology and clean design.
            </p>

            {/* Single CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-[#ff850b] hover:bg-orange-600 text-white px-8 py-6 rounded-xl font-medium text-lg transition-colors duration-300"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
            </div>
          </div>

          {/* Profile Image - Minimal */}
          <div className={`flex-1 max-w-md transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image 
                  src={img} 
                  alt="Abel Ronoh" 
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#073737]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            onClick={() => scrollToSection('skills')}
          >
            <ChevronDown className="h-5 w-5 text-gray-400" />
          </Button>
        </div>
      </div>
    </section>
  );
}