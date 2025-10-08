// components/ProjectsSection.tsx
"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  category: string
  githubUrl?: string
  liveUrl?: string
  image?: string
  featured: boolean
}

export default function ProjectsSection({ sheetUrl }: { sheetUrl: string }) {
  const [projects, setProjects] = useState<Project[]>([])
  const [filter, setFilter] = useState<string>("all")
  const [loading, setLoading] = useState(true)

  // Mock data - replace with your actual data fetching
  useEffect(() => {
    const mockProjects: Project[] = [
      {
        id: "1",
        title: "AI Career Guidance Chatbot",
        description: "An intelligent chatbot that helps students make informed career choices using locally running LLMs to reduce API costs by 50%.",
        technologies: ["Python", "LLM", "React", "FastAPI"],
        category: "ai-ml",
        featured: true,
        githubUrl: "https://github.com/Abel-Ronoh",
        liveUrl: "#"
      },
      {
        id: "2",
        title: "Geolocation Service App",
        description: "Real-time technician tracking app with Google Maps integration, reducing user search time by 40% through optimized service discovery.",
        technologies: ["React", "Node.js", "Google Maps API", "Socket.io"],
        category: "web-app",
        featured: true,
        githubUrl: "https://github.com/Abel-Ronoh",
        liveUrl: "#"
      },
      {
        id: "3",
        title: "ETL Pipeline Analytics",
        description: "Data engineering pipeline for user analytics using Python, PostgreSQL, and Apache Airflow, reducing processing time by 35%.",
        technologies: ["Python", "PostgreSQL", "Apache Airflow", "GCP"],
        category: "data-engineering",
        featured: false,
        githubUrl: "https://github.com/Abel-Ronoh"
      },
      {
        id: "4",
        title: "Full-Stack E-commerce Platform",
        description: "Modern e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
        technologies: ["Next.js", "TypeScript", "Supabase", "Stripe"],
        category: "web-app",
        featured: false,
        githubUrl: "https://github.com/Abel-Ronoh",
        liveUrl: "#"
      },
      {
        id: "5",
        title: "Real-time Collaboration Tool",
        description: "Collaborative workspace with real-time editing, video conferencing, and project management features.",
        technologies: ["React", "WebRTC", "Socket.io", "MongoDB"],
        category: "web-app",
        featured: false,
        githubUrl: "https://github.com/Abel-Ronoh"
      },
      {
        id: "6",
        title: "Smart Home Automation",
        description: "IoT-based home automation system with mobile app control, voice commands, and energy monitoring.",
        technologies: ["Python", "React Native", "MQTT", "Raspberry Pi"],
        category: "iot",
        featured: false,
        githubUrl: "https://github.com/Abel-Ronoh"
      }
    ]
    
    setProjects(mockProjects)
    setLoading(false)
  }, [sheetUrl])

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "ai-ml", label: "AI/ML", count: projects.filter(p => p.category === "ai-ml").length },
    { id: "web-app", label: "Web Apps", count: projects.filter(p => p.category === "web-app").length },
    { id: "data-engineering", label: "Data Engineering", count: projects.filter(p => p.category === "data-engineering").length },
    { id: "iot", label: "IoT", count: projects.filter(p => p.category === "iot").length }
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter(project => project.category === filter)

  const getCategoryColor = (category: string) => {
    const colors = {
      "ai-ml": "bg-purple-100 text-purple-800 border-purple-200",
      "web-app": "bg-blue-100 text-blue-800 border-blue-200",
      "data-engineering": "bg-green-100 text-green-800 border-green-200",
      "iot": "bg-orange-100 text-orange-800 border-orange-200"
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  if (loading) {
    return (
      <section id="projects" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">Loading projects...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-[#ff850b] rounded-full mr-3"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#073737] to-[#0A3638] bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-3 h-3 bg-[#ff850b] rounded-full ml-3"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A collection of my recent work showcasing full-stack development, AI integration, and innovative solutions
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  filter === category.id
                    ? "bg-[#073737] text-white border-[#073737] shadow-lg transform scale-105"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#073737] hover:text-[#073737] hover:shadow-md"
                }`}
              >
                <Filter className="h-4 w-4" />
                <span>{category.label}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  filter === category.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.filter(p => p.featured).map((project) => (
            <Card key={project.id} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-[#073737]/5 to-[#ff850b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge className={`${getCategoryColor(project.category)} border`}>
                    {categories.find(c => c.id === project.category)?.label}
                  </Badge>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
                         className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                         className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-[#073737] transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 mb-6 text-base leading-relaxed">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Button variant="ghost" className="group/btn text-[#073737] hover:text-[#ff850b] hover:bg-transparent p-0">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                  
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#073737] transition-colors">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#073737] transition-colors">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Projects Grid */}
        {filteredProjects.filter(p => !p.featured).length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">More Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.filter(p => !p.featured).map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={`${getCategoryColor(project.category)} border text-xs`}>
                        {categories.find(c => c.id === project.category)?.label}
                      </Badge>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
                             className="p-1 bg-gray-100 rounded hover:bg-gray-200 transition-colors">
                            <Github className="h-3 w-3" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                             className="p-1 bg-gray-100 rounded hover:bg-gray-200 transition-colors">
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-[#073737] transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs border border-gray-200">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs border border-gray-200">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#073737] to-[#0A3638] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together!
            </p>
            <Button className="bg-[#ff850b] hover:bg-[#e67600] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}