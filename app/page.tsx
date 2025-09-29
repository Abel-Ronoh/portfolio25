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
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative bg-[#073737] min-h-[100vh] text-white flex flex-col items-center justify-center overflow-hidden">
        <div className="bg-[#FDFDFD] w-11/12 md:w-9/12 p-3 rounded-3xl flex flex-col items-center">
          {/* NAV */}
          <div className="w-full flex items-center justify-between">
            <nav className="flex justify-center items-center gap-4 overflow-x-auto pb-1 no-scrollbar text-black w-full ">
              <button
                aria-current={active === "home"}
                onClick={() => handleNavClick("home")}
                className={`px-2 py-1 text-sm md:text-base focus:outline-none ${
                  active === "home" ? "border-b-2 border-black" : "opacity-80"
                }`}
              >
                HOME
              </button>

              <button
                aria-current={active === "skill"}
                onClick={() => handleNavClick("skill")}
                className={`px-2 py-1 text-sm md:text-base focus:outline-none ${
                  active === "skill" ? "border-b-2 border-black" : "opacity-80"
                }`}
              >
                SKILL
              </button>

              <button
                aria-current={active === "experience"}
                onClick={() => handleNavClick("experience")}
                className={`px-2 py-1 text-sm md:text-base focus:outline-none ${
                  active === "experience" ? "border-b-2 border-black" : "opacity-80"
                }`}
              >
                EXPERIENCE
              </button>
            </nav>

            <div className="flex items-center gap-3 text-black">
              <a
                href="https://www.linkedin.com/in/abel-ronoh-ab718a265/"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-block"
              >
                <button className="bg-transparent border-4 border-[#0A3638] w-[96px] h-[43px] text-[#0A3638] m-1 font-[14px] hover:border-[#577955] hover:bg-[#577955] hover:text-white cursor-pointer ">
                  Linkedin
                </button>
              </a>

              <button
                className="md:hidden p-2"
                aria-label="Toggle menu"
                onClick={() => setMobileMenu((v) => !v)}
              >
                <Menu className="h-6 w-6 text-[#073737]" />
              </button>
            </div>
          </div>

          {/* Mobile menu (simple) */}
          {mobileMenu && (
            <div className="w-full mt-3 flex flex-col items-center gap-2 text-black">
              <button onClick={() => handleNavClick("home")} className="w-full text-left px-4 py-2 text-black">
                HOME
              </button>
              <button onClick={() => handleNavClick("skill")} className="w-full text-left px-4 py-2 text-black">
                SKILL
              </button>
              <button onClick={() => handleNavClick("experience")} className="w-full text-left px-4 py-2">
                EXPERIENCE
              </button>
              <a href="https://www.linkedin.com/in/abel-ronoh-ab718a265/" className="w-full text-left px-4 py-2">
                Linkedin
              </a>
            </div>
          )}

          {/* HORIZONTAL SLIDER (clickable nav + swipe/scroll) */}
          <div
            ref={sliderRef}
            className="relative w-full mt-6 flex overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x -mx-3 md:-mx-0 no-scrollbar"
            style={{ WebkitOverflowScrolling: "touch"  }}
          >
            {/* HOME SLIDE */}
            <div className="min-w-full snap-start flex flex-col md:flex-row items-center p-6 md:p-10">
              <div className="md:w-1/2 mt-6 md:mt-0 px-4 md:px-8">
                <h1 className="text-[14px] md:text-2xl font-bold mb-[7px] text-black ">HELLO</h1>
                <h2 className="text-[28px] md:text-4xl font-light text-black mb-[7px]">
                  I&#39;m <span className="text-[#E1B890] font-semibold">Abel Ronoh.</span>
                </h2>
                <h3 className="text-[24px] md:text-4xl font-bold mb-[7px] text-[#073737]">Software Engineer</h3>

                <p className="text-[13px] md:text-lg text-gray-600 leading-relaxed mb-8">
                  A Software Engineer based on the web. Building full-stack web applications
                  with a focus on the overall architecture and the front-end experience.
                </p>

                <div className="flex gap-3 flex-wrap">
                  <button className="bg-[#0A3638] w-[96px] h-[43px] text-white m-1 font-[14px] hover:bg-[#577955] cursor-pointer ">
                    Let&#39;s Talk
                  </button>
                  <button className="bg-transparent border-4 border-[#0A3638] w-[96px] h-[43px] text-[#0A3638]  m-1 font-[14px] hover:border-[#577955] hover:bg-[#577955] hover:text-white cursor-pointer ">
                    <a href="https://github.com/Abel-Ronoh" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </button>
                </div>
              </div>

              <div className="relative h-[280px] md:h-[400px] md:w-1/2 my-6 md:my-0 flex items-center justify-center">
                <Image src={img} alt="ME" className="h-full object-contain" />
              </div>
            </div>

            {/* SKILLS SLIDE */}
            <div className="min-w-full snap-start flex flex-col items-center justify-center text-black p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-4">My Skills</h2>
              <ul className="list-disc list-inside text-base md:text-lg space-y-2">
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>Node.js / Express</li>
                <li>Firebase / Supabase</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* EXPERIENCE SLIDE */}
            <div className="min-w-full snap-start flex flex-col items-center justify-center text-black p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <p className="text-base md:text-lg max-w-2xl text-center">
                Worked on multiple projects including full-stack apps, Chrome extensions, and
                real-time systems. Built team features like technician tracking, ETL pipelines,
                and low-cost local LLM integrations.
              </p>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => scrollToSlide(0)}
              className={`w-3 h-3 rounded-full transition-colors ${
                active === "home" ? "bg-[#E1B890]" : "bg-gray-300"
              }`}
              aria-label="Go to home slide"
            />
            <button
              onClick={() => scrollToSlide(1)}
              className={`w-3 h-3 rounded-full transition-colors ${
                active === "skill" ? "bg-[#E1B890]" : "bg-gray-300"
              }`}
              aria-label="Go to skills slide"
            />
            <button
              onClick={() => scrollToSlide(2)}
              className={`w-3 h-3 rounded-full transition-colors ${
                active === "experience" ? "bg-[#E1B890]" : "bg-gray-300"
              }`}
              aria-label="Go to experience slide"
            />
          </div>
        </div>

        {/* Bottom Scroll Icon */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={scrollToAbout}>
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Rest of your existing code remains the same */}
      {/* ABOUT / PROFILE SUMMARY */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#073737] text-center">PROFILE SUMMARY</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I am a web developer with 1 year of experience in developing full stack projects using React, Next JS, javascript, html, css, express, firebase, Supabase and sql.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#073737]">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#073737]" />
                    <span>+254-794-140-776</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#073737]" />
                    <span>abellronoh@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-[#073737]" />
                    <a href="http://www.linkedin.com/in/abel-ronoh-ab718a265y" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-[#073737]" />
                    <a href="https://github.com/Abel-Ronoh" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#073737]">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">ZETECH UNIVERSITY</h3>
                    <p className="text-gray-600">Bachelors in Software Engineering</p>
                    <p className="text-sm text-gray-500">2022 - 2025</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">ZOOMCAMP SHORT COURSE</h3>
                    <p className="text-gray-600">Certification on Data Engineering</p>
                    <p className="text-sm text-gray-500">JAN - MAY 2024</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#073737] text-center">WORK EXPERIENCE</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Software Engineer Attachee</CardTitle>
                    <CardDescription>Zetech University</CardDescription>
                  </div>
                  <Badge className="bg-[#073737]">May - Aug 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    developed an AI chat bot that helps users to make career choices and easily assess career options in the university
                  </li>
                  <li>
                    Utilized a locally running LLM for the user responses, that would reduce API cost by 50%.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Hackathon Participant</CardTitle>
                    <CardDescription>Davis & Shirtliff, Nairobi</CardDescription>
                  </div>
                  <Badge className="bg-[#073737]">March 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Collaborated in a cross-functional team to build a geolocation-based service app with real-time
                    technician tracking.
                  </li>
                  <li>
                    Integrated Google Maps API to optimize service provider discovery, reducing user search time by 40%.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>ETL Pipeline for User Analytics</CardTitle>
                    <CardDescription>Data Engineering</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Implemented a data pipeline for logging user interactions using Python and PostgreSQL.</li>
                  <li>
                    Built an Apache Airflow pipeline to automate ingestion and transformation of user activity data into
                    BigQuery.
                  </li>
                  <li>Reduced data processing time by 35% using PySpark for batch processing and partitioning.</li>
                  <li>Tech Stack: Python, GCP, dbt (data transformation), Snowflake (storage).</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ProjectsSectiion sheetUrl="https://docs.google.com/spreadsheets/d/e/2PACX-1vQAwzpnX5iDPFX_MOdHBfW-SbYldk2LBEHg7zTxi5NNFeerkAyS16bvAwsr_76QpnfeeGL5XWgfDHQX/pub?output=csv" />

      {/* Skills Section (full page) */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#073737] text-center">SKILLS</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#073737]">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Data Engineering</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">GCP</Badge>
                        <Badge variant="outline">Snowflake</Badge>
                        <Badge variant="outline">PostgreSQL</Badge>
                        <Badge variant="outline">Kafka (Basics)</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Frontend</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">JavaScript</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">React.js</Badge>
                        <Badge variant="outline">Next.js</Badge>
                        <Badge variant="outline">HTML</Badge>
                        <Badge variant="outline">CSS</Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Backend</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Node.js</Badge>
                        <Badge variant="outline">Python</Badge>
                        <Badge variant="outline">RESTful APIs</Badge>
                        <Badge variant="outline">Java</Badge>
                        <Badge variant="outline">C#</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Databases</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">SQL</Badge>
                        <Badge variant="outline">Firebase</Badge>
                        <Badge variant="outline">Supabase</Badge>
                        <Badge variant="outline">MongoDB</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Git</Badge>
                        <Badge variant="outline">Docker</Badge>
                        <Badge variant="outline">Apache Kafka</Badge>
                        <Badge variant="outline">CI/CD Pipelines</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#073737]">Soft Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Agile Methodology</Badge>
                      <Badge variant="outline">Technical Documentation</Badge>
                      <Badge variant="outline">Cross-functional Collaboration</Badge>
                      <Badge variant="outline">Problem Solving</Badge>
                      <Badge variant="outline">Team Leadership</Badge>
                      <Badge variant="outline">Mentorship</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#073737]">Certifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h3 className="font-semibold">Data Engineering Zoomcamp Certification</h3>
                      <p className="text-sm text-gray-500">DataTalksClub, 2024</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">AWS Cloud Practitioner</h3>
                      <p className="text-sm text-gray-500">In Progress</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-[#073737] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">GET IN TOUCH</h2>
          <div className="max-w-md mx-auto">
            <Card className="bg-white text-gray-800">
              <CardHeader>
                <CardTitle className="text-[#073737]">Contact Me</CardTitle>
                <CardDescription>Feel free to reach out for opportunities or collaborations</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input id="name" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#073737]" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input id="email" type="email" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#073737]" placeholder="your.email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea id="message" rows={4} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#073737]" placeholder="Your message here..."></textarea>
                    </div>
                    <Button className="w-full bg-[#073737] hover:bg-[#052525]">Send Message</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <div className="flex justify-center space-x-6">
              <a href="mailto:abellronoh@gmail.com" className="hover:text-gray-300">
                <Mail className="h-6 w-6" />
              </a>
              <a href="tel:+254794140776" className="hover:text-gray-300">
                <Phone className="h-6 w-6" />
              </a>
              <a href="http://www.linkedin.com/in/abel-ronoh-ab718a265y" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/Abel-Ronoh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Github className="h-6 w-6" />
              </a>
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