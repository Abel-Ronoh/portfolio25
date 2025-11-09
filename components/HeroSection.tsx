import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Code, Sparkles, Coffee } from "lucide-react";
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
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ["Full-Stack Developer", "Problem Solver", "UI/UX Enthusiast"];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#073737] via-[#0A3638] to-[#052525] min-h-screen text-white flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with subtle animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-[#ff850b]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-[#ff850b]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-11/12 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div className={`flex-1 text-center lg:text-left space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Enhanced Badge with animation */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#ff850b]/30 bg-[#ff850b]/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300 group">
              <div className="relative">
                <div className="w-2 h-2 bg-[#ff850b] rounded-full animate-ping absolute"></div>
                <div className="w-2 h-2 bg-[#ff850b] rounded-full relative"></div>
              </div>
              <span className="text-sm text-gray-300 font-medium">Open to new opportunities</span>
              <Sparkles className="w-4 h-4 text-[#ff850b] animate-pulse" />
            </div>

            {/* Enhanced Headline with subtle animation */}
            <div className="space-y-6">
              <div className="overflow-hidden">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                  <span className="text-white block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Abel
                  </span>
                  <span className="text-[#ff850b] block mt-2 bg-gradient-to-r from-[#ff850b] to-orange-400 bg-clip-text text-transparent animate-gradient">
                    Ronoh
                  </span>
                </h1>
              </div>
              
              {/* Animated Role Text */}
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <div className="text-xl md:text-2xl text-gray-400 font-light transition-all duration-500">
                  <span className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-[#ff850b]" />
                    <span>{roles[currentRole]}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              I create <span className="text-[#ff850b] font-semibold">digital solutions</span> that combine 
              modern technology with thoughtful design. Passionate about building 
              <span className="text-[#ff850b] font-semibold"> scalable applications</span> and 
              <span className="text-[#ff850b] font-semibold"> intuitive user experiences</span>.
            </p>

            {/* Enhanced CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  className="bg-[#ff850b] hover:bg-orange-600 text-white px-8 py-6 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl shadow-[#ff850b]/25"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-6 rounded-xl font-medium text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </div>

              {/* Quick Stats - Minimal */}
              <div className="flex justify-center lg:justify-start gap-8 pt-4">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-[#ff850b]">2+</div>
                  <div className="text-xs text-gray-400 font-medium">Years Coding</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-[#ff850b]">15+</div>
                  <div className="text-xs text-gray-400 font-medium">Projects</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <Coffee className="w-6 h-6 text-[#ff850b] mx-auto mb-1" />
                  <div className="text-xs text-gray-400 font-medium">Coffee Lover</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className={`flex-1 max-w-md transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Subtle glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ff850b] to-orange-400 rounded-3xl blur-xl opacity-10 animate-pulse-slow"></div>
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-4 hover:scale-105 transition-transform duration-500 group">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image 
                    src={img} 
                    alt="Abel Ronoh - Full Stack Developer" 
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#073737]/40 via-transparent to-transparent rounded-2xl"></div>
                  
                  {/* Floating tech badge */}
                  <div className="absolute top-4 right-4 bg-[#ff850b]/90 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    React • Next.js
                  </div>
                </div>
              </div>

              {/* Subtle floating elements */}
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#ff850b]/20 rounded-full blur-md animate-float"></div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 rounded-full blur-md animate-float-delayed"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm text-gray-400 font-medium tracking-wide">Explore More</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 animate-bounce-slow"
              onClick={() => scrollToSection('skills')}
            >
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}