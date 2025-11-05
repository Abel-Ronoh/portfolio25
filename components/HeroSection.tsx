import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import img from "../public/img.png";

interface HeroSectionProps {
  active: "home" | "skill" | "experience";
  sliderRef: React.RefObject<HTMLDivElement | null>;
  scrollToSlide: (index: number) => void;
  slideIndex: Record<"home" | "skill" | "experience", number>;
}

export default function HeroSection({ active, sliderRef, scrollToSlide, slideIndex }: HeroSectionProps) {
  const scrollToAbout = () => {
    const node = document.getElementById("about");
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-gradient-to-br from-[#073737] via-[#0A3638] to-[#052525] min-h-[100vh] text-white flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ff850b]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ff850b]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff850b]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-11/12 md:w-10/12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text & Info */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-[#ff850b] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for new opportunities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Hello, I'm
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#ff850b] to-orange-400 md:text-7xl bg-clip-text text-transparent">
                  Abel Ronoh
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 font-light">
                Full-Stack Developer & AI Enthusiast
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              I craft <span className="text-[#ff850b] font-semibold">digital experiences</span> that blend 
              cutting-edge technology with elegant design. Specializing in full-stack development, 
              AI integration, and scalable solutions that drive real impact.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#ff850b]">1+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#ff850b]">10+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#ff850b]">5+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile & Visual Elements */}
          <div className="relative">
            {/* Profile Image Container */}
            <div className="relative mx-auto lg:mx-0 max-w-md">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ff850b] to-orange-500 rounded-3xl blur-xl opacity-20"></div>
              
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
                  <Image 
                    src={img} 
                    alt="Abel Ronoh - Software Engineer" 
                    fill
                    className="object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#073737]/80 to-transparent rounded-2xl"></div>
                </div>
                
                {/* Floating Info Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">14+</div>
                    <div className="text-xs text-gray-300">Months Exp</div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-[#ff850b]/20 backdrop-blur-sm rounded-xl p-4 border border-[#ff850b]/30 shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">AI</div>
                    <div className="text-xs text-gray-300">Specialist</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 -left-10 w-24 h-24 bg-[#ff850b]/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-20 -right-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float-delayed"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400">Explore More</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              onClick={scrollToAbout}
            >
              <ChevronDown className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={() => {
            const currentIndex = slideIndex[active];
            const prevIndex = currentIndex === 0 ? 2 : currentIndex - 1;
            scrollToSlide(prevIndex);
          }}
          className="group p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <div className="flex items-center">
            <div className="w-6 h-6 border-l-2 border-t-2 border-white transform -rotate-45 group-hover:border-[#ff850b] transition-colors duration-300"></div>
            <div className="ml-2 w-12 h-0.5 bg-white group-hover:bg-[#ff850b] transition-colors duration-300"></div>
          </div>
        </button>
      </div>

      <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={() => {
            const currentIndex = slideIndex[active];
            const nextIndex = currentIndex === 2 ? 0 : currentIndex + 1;
            scrollToSlide(nextIndex);
          }}
          className="group p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <div className="flex items-center">
            <div className="mr-2 w-12 h-0.5 bg-white group-hover:bg-[#ff850b] transition-colors duration-300"></div>
            <div className="w-6 h-6 border-r-2 border-t-2 border-white transform rotate-45 group-hover:border-[#ff850b] transition-colors duration-300"></div>
          </div>
        </button>
      </div>
    </section>
  );
}