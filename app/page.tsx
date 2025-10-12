"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Github, Linkedin, Mail, Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import img from "../public/img.png";
import ProjectsSectiion from "../components/ProjectsSection";

export default function Home() {
  const [active, setActive] = useState<"home" | "skill" | "experience">("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const slideIndex: Record<"home" | "skill" | "experience", number> = {
    home: 0,
    skill: 1,
    experience: 2,
  };

  const scrollToSlide = (index: number) => {
    const el = sliderRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  const handleNavClick = (key: "home" | "skill" | "experience") => {
    setMobileMenu(false);
    setActive(key);
    scrollToSlide(slideIndex[key]);
  };

  // Update 'active' based on horizontal scroll position
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    let raf = 0;

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const index = Math.round(el.scrollLeft / el.clientWidth);
        if (index === 0) setActive("home");
        else if (index === 1) setActive("skill");
        else setActive("experience");
      });
    };

    const onResize = () => {
      // keep current active slide visible after a resize
      const idx = slideIndex[active];
      el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [active]);

  const scrollToAbout = () => {
    const node = document.getElementById("about");
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#073737]">
      {/* HERO */}
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
            <span className="bg-gradient-to-r from-[#ff850b] to-orange-400 bg-clip-text text-transparent">
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

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {["React", "Next.js", "TypeScript", "Node.js", "Python", "AI/ML"].map((tech) => (
            <div key={tech} className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#ff850b]/30 transition-all duration-300">
              <span className="text-gray-300 text-sm font-medium">{tech}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
          <Button className="bg-gradient-to-r from-[#ff850b] to-orange-500 hover:from-orange-500 hover:to-[#ff850b] text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            Let's Build Together
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300">
            View My Work
          </Button>
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
    <div className="absolute bottom-[-20px]  left-1/2 transform -translate-x-1/2 animate-bounce">
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


      <ProjectsSectiion sheetUrl="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1dWoKIepAWYUOSFyLSK-UxpS1aXlj5lrpmYw4bJau_rysSOIQtFuYCRkPk_TUyVE_lOqWv01byQGw/pub?gid=622894071&single=true&output=csv" />



     {/* ABOUT / PROFILE SUMMARY */}
<section id="about" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      {/* Header with creative design */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="w-3 h-3 bg-[#ff850b] rounded-full mr-3"></div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#073737] to-[#0A3638] bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-3 h-3 bg-[#ff850b] rounded-full ml-3"></div>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Passionate Software Engineer crafting digital experiences that make a difference
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Profile Card */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#073737] to-[#0A3638] rounded-2xl flex items-center justify-center mr-4">
                <span className="text-white text-2xl font-bold">AR</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Abel Ronoh</h3>
                <p className="text-[#ff850b] font-semibold">Full-Stack Developer & AI Enthusiast</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate software engineer with expertise in building modern web applications 
                that solve real-world problems. My journey combines technical excellence with creative 
                problem-solving to deliver exceptional user experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <div className="text-2xl font-bold text-[#073737]">1+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                  <div className="text-2xl font-bold text-[#073737]">10+</div>
                  <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">What I Bring to the Table</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#ff850b] rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">Clean, maintainable code architecture</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#ff850b] rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">Performance optimization expertise</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#ff850b] rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">AI/ML integration capabilities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#ff850b] rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">Agile development methodology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Info Sidebar */}
        <div className="space-y-6">
          {/* Contact Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-bold text-[#073737] mb-4 flex items-center">
              <div className="w-2 h-2 bg-[#ff850b] rounded-full mr-2"></div>
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center group cursor-pointer">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                  <Phone className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-800">+254-794-140-776</p>
                </div>
              </div>
              <div className="flex items-center group cursor-pointer">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors">
                  <Mail className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-800">abellronoh@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center group cursor-pointer">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                  <Linkedin className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">LinkedIn</p>
                  <a href="http://www.linkedin.com/in/abel-ronoh-ab718a265y" className="font-medium text-gray-800 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    Abel Ronoh
                  </a>
                </div>
              </div>
              <div className="flex items-center group cursor-pointer">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-gray-200 transition-colors">
                  <Github className="h-4 w-4 text-gray-800" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">GitHub</p>
                  <a href="https://github.com/Abel-Ronoh" className="font-medium text-gray-800 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    Abel-Ronoh
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-bold text-[#073737] mb-4 flex items-center">
              <div className="w-2 h-2 bg-[#ff850b] rounded-full mr-2"></div>
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">ZETECH UNIVERSITY</h4>
                <p className="text-gray-600 text-sm">Bachelors in Software Engineering</p>
                <p className="text-xs text-gray-500 mt-1">2022 - 2025</p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800">ZOOMCAMP SHORT COURSE</h4>
                <p className="text-gray-600 text-sm">Certification on Data Engineering</p>
                <p className="text-xs text-gray-500 mt-1">JAN - MAY 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Highlights */}
      <div className="bg-gradient-to-r from-[#073737] to-[#0A3638] rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-6 text-center">Tech Stack Highlights</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
              <span className="text-white font-bold text-lg">JS/TS</span>
            </div>
            <p className="font-medium">JavaScript/TypeScript</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
              <span className="text-white font-bold text-lg">R/N</span>
            </div>
            <p className="font-medium">React/Next.js</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
              <span className="text-white font-bold text-lg">N/E</span>
            </div>
            <p className="font-medium">Node.js/Express</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
              <span className="text-white font-bold text-lg">AI/ML</span>
            </div>
            <p className="font-medium">AI Integration</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Skills Section */}
<section id="skills" className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center mb-4">
        <div className="w-3 h-3 bg-[#ff850b] rounded-full mr-3"></div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#073737] to-[#0A3638] bg-clip-text text-transparent">
          My Digital Toolkit
        </h2>
        <div className="w-3 h-3 bg-[#ff850b] rounded-full ml-3"></div>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Crafting digital experiences with modern tools and proven methodologies
      </p>
    </div>

    <div className="max-w-6xl mx-auto">
      {/* Skills Journey Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Storytelling Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#073737] mb-6">My Development Journey</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-[#073737] to-[#0A3638] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Foundation & Collaboration</h4>
                <p className="text-gray-600">
                  My journey begins with <strong>Open Source Software Configuration</strong> and <strong>Git</strong> - 
                  mastering the art of collaboration and version control. These tools taught me the importance of 
                  clean, maintainable code and effective team workflows.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-[#ff850b] to-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Modern Frontend Architecture</h4>
                <p className="text-gray-600">
                  With <strong>React.js/Next.js</strong> and <strong>Tailwind CSS</strong>, I build responsive, 
                  performant interfaces. From component-driven design to server-side rendering, I create experiences 
                  that are both beautiful and functional.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Data & Deployment Excellence</h4>
                <p className="text-gray-600">
                  Using <strong>PostgreSQL</strong>, <strong>Supabase/Firebase</strong>, and <strong>Docker</strong>, 
                  I ensure robust data management and seamless deployment. Every application deserves a solid foundation 
                  and scalable infrastructure.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Design to Development</h4>
                <p className="text-gray-600">
                  With <strong>Figma</strong>, I bridge the gap between design and implementation. Transforming 
                  creative visions into pixel-perfect, interactive experiences is where art meets engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Skills Map */}
        <div className="bg-gradient-to-br from-[#073737] to-[#0A3638] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Skills Ecosystem</h3>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Development */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors duration-300">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <p className="font-semibold mb-2">Development</p>
              <div className="space-y-1">
                <div className="text-sm text-gray-300">React.js/Next.js</div>
                <div className="text-sm text-gray-300">Tailwind CSS</div>
              </div>
            </div>

            {/* DevOps */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors duration-300">
                <span className="text-white font-bold text-lg">🔧</span>
              </div>
              <p className="font-semibold mb-2">DevOps</p>
              <div className="space-y-1">
                <div className="text-sm text-gray-300">Docker</div>
                <div className="text-sm text-gray-300">Git</div>
              </div>
            </div>

            {/* Database */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors duration-300">
                <span className="text-white font-bold text-lg">💾</span>
              </div>
              <p className="font-semibold mb-2">Database</p>
              <div className="space-y-1">
                <div className="text-sm text-gray-300">PostgreSQL</div>
                <div className="text-sm text-gray-300">Supabase/Firebase</div>
              </div>
            </div>

            {/* Design & Tools */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors duration-300">
                <span className="text-white font-bold text-lg">🎨</span>
              </div>
              <p className="font-semibold mb-2">Design & Tools</p>
              <div className="space-y-1">
                <div className="text-sm text-gray-300">Figma</div>
                <div className="text-sm text-gray-300">Open Source</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Frontend Mastery */}
        <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ff850b] to-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <div>
                <CardTitle className="text-gray-800">Frontend Excellence</CardTitle>
                <CardDescription>Crafting modern user interfaces</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border border-orange-100">
                <span className="font-semibold text-gray-700">React.js/Next.js</span>
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#ff850b] rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg border border-cyan-100">
                <span className="font-semibold text-gray-700">Tailwind CSS</span>
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Backend & Database */}
        <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">💾</span>
              </div>
              <div>
                <CardTitle className="text-gray-800">Data & Backend</CardTitle>
                <CardDescription>Robust data management</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                <span className="font-semibold text-gray-700">PostgreSQL</span>
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border border-orange-100">
                <span className="font-semibold text-gray-700">Supabase/Firebase</span>
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* DevOps & Tools */}
        <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">🔧</span>
              </div>
              <div>
                <CardTitle className="text-gray-800">DevOps & Tools</CardTitle>
                <CardDescription>Efficient development workflow</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                <span className="font-semibold text-gray-700">Docker</span>
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg border border-gray-200">
                <span className="font-semibold text-gray-700">Git</span>
                <div className="w-16 h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-700 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg border border-purple-100">
                <span className="font-semibold text-gray-700">Open Source</span>
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg border border-pink-100">
                <span className="font-semibold text-gray-700">Figma</span>
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-500 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skills Philosophy */}
      <div className="bg-gradient-to-r from-[#073737] to-[#0A3638] rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">My Development Philosophy</h3>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          "I believe in building with purpose. Every line of code, every design decision, and every infrastructure choice 
          serves a greater goal: creating digital solutions that are not just functional, but transformative. From 
          open-source collaboration to production deployment, I ensure that technology serves people and businesses effectively."
        </p>
      </div>
    </div>
  </div>
</section>
{/* Experience Section */}
<section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center mb-4">
        <div className="w-3 h-3 bg-[#ff850b] rounded-full mr-3"></div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#073737] to-[#0A3638] bg-clip-text text-transparent">
          Professional Journey
        </h2>
        <div className="w-3 h-3 bg-[#ff850b] rounded-full ml-3"></div>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Transforming businesses through digital innovation and modern software solutions
      </p>
    </div>

    <div className="max-w-6xl mx-auto">
      {/* Experience Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff850b] to-[#073737] transform md:-translate-x-1/2"></div>

        {/* Experience Items */}
        <div className="space-y-12">
          {/* Cadtech Services - Current Role */}
          <div className="relative group">
            <div className="flex flex-col md:flex-row md:items-center md:gap-12">
              {/* Left Side - Date & Icon */}
              <div className="md:w-1/2 md:text-right md:pr-12 mb-4 md:mb-0">
                <div className="flex md:justify-end items-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">CS</span>
                    </div>
                    <div className="ml-4">
                      <Badge className="bg-green-500 text-white px-3 py-1 text-sm">Aug 2025 - Present</Badge>
                      <p className="text-sm text-gray-500 mt-1">Current Role</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="md:w-1/2 md:pl-12">
                <Card className="group-hover:shadow-2xl group-hover:border-green-500/30 transition-all duration-500 border-0 shadow-lg bg-white relative overflow-hidden">
                  {/* Current Role Indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      Current Role
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-gray-800 group-hover:text-[#073737] transition-colors duration-300">
                          IT/Software Engineering Intern
                        </CardTitle>
                        <CardDescription className="text-[#073737] font-semibold text-base">
                          Cadtech Services
                        </CardDescription>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Lead digital transformation initiatives by <strong>migrating companies from paper-based systems to modern software solutions</strong>, improving operational efficiency
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Develop and implement <strong>custom software systems</strong> tailored to client needs, replacing manual processes with automated digital workflows
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Collaborate with cross-functional teams to <strong>analyze business requirements</strong> and design scalable software architecture for diverse industries
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Provide technical support and training to ensure <strong>smooth transition and adoption</strong> of new digital systems across organizations
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Digital Transformation</Badge>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Custom Software</Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">System Migration</Badge>
                      <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">Business Analysis</Badge>
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Client Training</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Zetech University - Previous Role */}
          <div className="relative group">
            <div className="flex flex-col md:flex-row md:items-center md:gap-12">
              {/* Left Side - Content */}
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <Card className="group-hover:shadow-2xl group-hover:border-[#ff850b]/30 transition-all duration-500 border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div className="w-3 h-3 bg-[#ff850b] rounded-full mt-2"></div>
                      <div>
                        <CardTitle className="text-xl text-gray-800 group-hover:text-[#073737] transition-colors duration-300">
                          Software Engineer Attachée
                        </CardTitle>
                        <CardDescription className="text-[#073737] font-semibold text-base">
                          Zetech University
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#ff850b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Developed an <strong>AI career guidance chatbot</strong> that helps students make informed career choices and assess university program options
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#ff850b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Engineered cost-saving solutions by implementing <strong>locally running LLMs</strong>, reducing API costs by 50% while maintaining response quality
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#ff850b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Collaborated with academic staff to integrate AI tools into the student support ecosystem and improve educational technology infrastructure
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">AI/ML</Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">LLM</Badge>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Python</Badge>
                      <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">Chatbot</Badge>
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Cost Optimization</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Side - Date & Icon */}
              <div className="md:w-1/2 md:pl-12 order-1 md:order-2 mb-4 md:mb-0">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#073737] to-[#0A3638] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">ZU</span>
                    </div>
                    <div className="ml-4">
                      <Badge className="bg-[#073737] text-white px-3 py-1 text-sm">May - Aug 2025</Badge>
                      <p className="text-sm text-gray-500 mt-1">4 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hackathon Experience */}
          <div className="relative group">
            <div className="flex flex-col md:flex-row md:items-center md:gap-12">
              {/* Left Side - Date & Icon */}
              <div className="md:w-1/2 md:text-right md:pr-12 mb-4 md:mb-0">
                <div className="flex md:justify-end items-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#ff850b] to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">DS</span>
                    </div>
                    <div className="ml-4">
                      <Badge className="bg-[#ff850b] text-white px-3 py-1 text-sm">March 2025</Badge>
                      <p className="text-sm text-gray-500 mt-1">Hackathon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="md:w-1/2 md:pl-12">
                <Card className="group-hover:shadow-2xl group-hover:border-[#ff850b]/30 transition-all duration-500 border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-gray-800 group-hover:text-[#073737] transition-colors duration-300">
                          Hackathon Participant
                        </CardTitle>
                        <CardDescription className="text-[#073737] font-semibold text-base">
                          Davis & Shirtliff, Nairobi
                        </CardDescription>
                      </div>
                      <div className="w-3 h-3 bg-[#ff850b] rounded-full mt-2"></div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#ff850b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Collaborated in a <strong>cross-functional team</strong> to build a geolocation-based service app with real-time technician tracking capabilities
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#ff850b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Integrated <strong>Google Maps API</strong> to optimize service provider discovery, reducing user search time by 40% through intelligent location-based matching
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">React</Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Node.js</Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Google Maps API</Badge>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Team Collaboration</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Progress Summary */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#073737] to-[#0A3638] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Career Progression</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ff850b]">Digital Transformation</div>
              <div className="text-gray-300 mt-2">Migrating businesses from paper to digital systems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ff850b]">AI Innovation</div>
              <div className="text-gray-300 mt-2">Building intelligent solutions with modern AI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ff850b]">Full-Stack Development</div>
              <div className="text-gray-300 mt-2">End-to-end software solutions for diverse needs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Contact */}
<section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#073737] via-[#0A3638] to-[#052525] text-white">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center mb-4">
        <div className="w-3 h-3 bg-[#ff850b] rounded-full mr-3"></div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <div className="w-3 h-3 bg-[#ff850b] rounded-full ml-3"></div>
      </div>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Ready to bring your ideas to life? Let's create something amazing together.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Contact Form */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500">
        <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">
                Your Name *
              </label>
              <input 
                id="name" 
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff850b] focus:border-transparent transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email Address *
              </label>
              <input 
                id="email" 
                type="email" 
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff850b] focus:border-transparent transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-300">
              Subject
            </label>
            <input 
              id="subject" 
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff850b] focus:border-transparent transition-all duration-300"
              placeholder="Project Collaboration"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">
              Your Message *
            </label>
            <textarea 
              id="message" 
              rows={6} 
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff850b] focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Tell me about your project or just say hello..."
            ></textarea>
          </div>
          
          <Button className="w-full bg-gradient-to-r from-[#ff850b] to-orange-500 hover:from-orange-500 hover:to-[#ff850b] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            Send Message
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </div>

      {/* Contact Information & Social Links */}
      <div className="space-y-8">
        {/* Quick Contact */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch Directly</h3>
          
          <div className="space-y-6">
            <div className="flex items-center group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Email</p>
                <a href="mailto:abellronoh@gmail.com" className="text-white font-semibold hover:text-[#ff850b] transition-colors duration-300">
                  abellronoh@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Phone</p>
                <a href="tel:+254794140776" className="text-white font-semibold hover:text-[#ff850b] transition-colors duration-300">
                  +254-794-140-776
                </a>
              </div>
            </div>

            <div className="flex items-center group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">LinkedIn</p>
                <a href="http://www.linkedin.com/in/abel-ronoh-ab718a265y" className="text-white font-semibold hover:text-[#ff850b] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  Connect with me
                </a>
              </div>
            </div>

            <div className="flex items-center group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Github className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">GitHub</p>
                <a href="https://github.com/Abel-Ronoh" className="text-white font-semibold hover:text-[#ff850b] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  View my projects
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div className="bg-gradient-to-r from-[#ff850b] to-orange-500 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-lg">Current Availability</h4>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium">Available for work</span>
            </div>
          </div>
          <p className="text-white/90 text-sm">
            I'm currently accepting new projects and opportunities. Let's discuss how we can work together!
          </p>
        </div>

        {/* Response Time */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h4 className="font-bold text-white mb-3">Quick Response</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Email Response</span>
              <span className="text-[#ff850b] font-semibold">Within 24 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Project Discussion</span>
              <span className="text-[#ff850b] font-semibold">1-2 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="text-center mt-16">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-white">Let's Build Something Extraordinary</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Whether you have a project in mind, need technical consultation, or just want to chat about technology, 
          I'd love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-gradient-to-r from-[#ff850b] to-orange-500 hover:from-orange-500 hover:to-[#ff850b] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            Schedule a Call
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
            View My Resume
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-6 bg-[#073737] text-white text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Abel Ronoh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}