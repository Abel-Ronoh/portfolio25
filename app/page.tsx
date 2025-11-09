"use client"

import React, { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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

  return (
    <div className="min-h-screen bg-[#073737]">
      <HeroSection 
        active={active}
        sliderRef={sliderRef}
        scrollToSlide={scrollToSlide}
        slideIndex={slideIndex}
      />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection sheetUrl="https://docs.google.com/spreadsheets/d/e/2PACX-1vSCD-lTvFPP52zwoJZ-o9m7RXBrVKG5foyOqf603AB1WMlCtKxsLVmS4pNXddldB0wdXgvELhwQNUK_/pub?output=csv" />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}