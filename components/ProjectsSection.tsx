// components/ProjectsSection.tsx
"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight, Filter, Calendar, User, Target, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Project {
  id: string
  title: string
  description: string
  short_description: string
  technologies: string[]
  category: string
  github_url?: string
  live_url?: string
  image_url?: string
  featured: boolean
  status: string
  completion_date?: string
  client?: string
  role?: string
  challenges?: string
  results?: string
  long_description?: string
  images?: string[]
  features?: string[]
  problem_statement?: string
  solution?: string
  impact?: string
  learnings?: string
}

export default function ProjectsSection({ sheetUrl }: { sheetUrl: string }) {
  const [projects, setProjects] = useState<Project[]>([])
  const [filter, setFilter] = useState<string>("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Fetch data from Google Sheets
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const csvUrl = sheetUrl.replace('/edit?usp=sharing', '/export?format=csv')
        const response = await fetch(csvUrl)
        
        if (!response.ok) throw new Error(`Failed to fetch projects: ${response.status}`)
        
        const csvText = await response.text()
        const projectsData = parseCSV(csvText)
        setProjects(projectsData)
      } catch (err) {
        console.error('Error fetching projects:', err)
        setError('Failed to load projects. Showing demo projects instead.')
        setProjects(getDemoProjects())
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [sheetUrl])

  // Enhanced demo data with more details
  const getDemoProjects = (): Project[] => [
    {
      id: "1",
      title: "AI Career Guidance Chatbot",
      description: "An intelligent chatbot that helps students make informed career choices.",
      short_description: "AI-powered career guidance platform with cost-efficient LLMs",
      long_description: "Developed a comprehensive AI-powered career guidance system that leverages locally running Large Language Models to provide personalized career advice to university students. The system analyzes student interests, skills, and market trends to suggest optimal career paths and educational opportunities.",
      technologies: ["Python", "LLM", "React", "FastAPI", "PostgreSQL", "Docker"],
      category: "ai-ml",
      featured: true,
      status: "completed",
      completion_date: "2024-08-01",
      client: "Zetech University",
      role: "Full-stack Developer & AI Engineer",
      challenges: "High API costs from cloud-based LLM services were making the solution unsustainable for educational institutions with limited budgets.",
      solution: "Implemented locally running open-source LLMs with optimized inference and caching mechanisms to reduce external API dependencies.",
      results: "Reduced API costs by 50% while maintaining 95% response quality. Improved student career decision accuracy by 40% based on follow-up surveys.",
      impact: "Enabled the university to provide personalized career guidance to 2,000+ students without significant infrastructure costs.",
      learnings: "Learned to optimize AI model inference speeds and implement efficient caching strategies for real-time applications.",
      features: [
        "Personalized career recommendations",
        "Real-time chat interface",
        "Career path visualization",
        "Skill gap analysis",
        "Market trend integration"
      ],
      images: [
        "/api/placeholder/800/450?text=Career+Chatbot+Dashboard",
        "/api/placeholder/800/450?text=AI+Recommendation+Engine",
        "/api/placeholder/800/450?text=Student+Analytics+Panel"
      ],
      github_url: "https://github.com/Abel-Ronoh",
      live_url: "#"
    },
    {
      id: "2",
      title: "Geolocation Service App",
      description: "Real-time technician tracking app with Google Maps integration.",
      short_description: "Real-time service provider tracking platform",
      long_description: "Built a comprehensive service marketplace that connects users with nearby technicians and service providers. The platform features real-time tracking, appointment scheduling, and secure payment processing.",
      technologies: ["React", "Node.js", "Google Maps API", "Socket.io", "MongoDB", "Express"],
      category: "web-app",
      featured: true,
      status: "completed",
      completion_date: "2024-06-15",
      client: "Davis & Shirtliff Hackathon",
      role: "Full-stack Developer",
      challenges: "Users were spending excessive time searching for reliable service providers in their area with no transparency in availability or location.",
      solution: "Developed a real-time tracking system with optimized search algorithms and provider verification mechanisms.",
      results: "Reduced user search time by 40% and increased successful service matches by 65% through intelligent location-based matching.",
      impact: "Connected 500+ users with verified service providers within their localities, improving service accessibility.",
      learnings: "Gained expertise in real-time data synchronization and map integration optimization for mobile applications.",
      features: [
        "Real-time technician tracking",
        "Advanced search filters",
        "Rating and review system",
        "In-app messaging",
        "Secure payment processing"
      ],
      images: [
        "/api/placeholder/800/450?text=Service+Provider+Map",
        "/api/placeholder/800/450?text=Booking+Interface",
        "/api/placeholder/800/450?text=Real-time+Tracking"
      ],
      github_url: "https://github.com/Abel-Ronoh",
      live_url: "#"
    }
  ]

  const parseCSV = (csvText: string): Project[] => {
    const lines = csvText.split('\n').filter(line => line.trim())
    if (lines.length <= 1) return getDemoProjects()
    
    const headers = lines[0].split(',').map(header => header.trim().toLowerCase())
    
    return lines.slice(1).map((line, index) => {
      const values = parseCSVLine(line)
      const project: any = { id: `project-${index + 1}` }
      
      headers.forEach((header, i) => {
        const value = values[i]?.trim() || ''
        
        switch (header) {
          case 'title':
          case 'description':
          case 'short_description':
          case 'long_description':
          case 'category':
          case 'client':
          case 'role':
          case 'challenges':
          case 'solution':
          case 'results':
          case 'impact':
          case 'learnings':
          case 'github_url':
          case 'live_url':
          case 'image_url':
            project[header] = value
            break
            
          case 'technologies':
          case 'features':
          case 'images':
            project[header] = value ? value.split(',').map((item: string) => item.trim()) : []
            break
            
          case 'featured':
            project.featured = value.toLowerCase() === 'true' || value === '1'
            break
            
          case 'status':
            project.status = value || 'completed'
            break
            
          case 'completion_date':
            project.completion_date = value
            break
        }
      })
      
      return {
        id: project.id,
        title: project.title || 'Untitled Project',
        description: project.description || 'No description available.',
        short_description: project.short_description || project.description?.split('.')[0] || 'Project description',
        long_description: project.long_description || project.description,
        technologies: project.technologies || [],
        category: project.category || 'web-app',
        github_url: project.github_url,
        live_url: project.live_url,
        image_url: project.image_url,
        featured: project.featured || false,
        status: project.status || 'completed',
        completion_date: project.completion_date,
        client: project.client,
        role: project.role,
        challenges: project.challenges,
        solution: project.solution,
        results: project.results,
        impact: project.impact,
        learnings: project.learnings,
        features: project.features || [],
        images: project.images || (project.image_url ? [project.image_url] : [])
      } as Project
    })
  }

  const parseCSVLine = (line: string): string[] => {
    const result: string[] = []
    let current = ''
    let inQuotes = false
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i]
      
      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === ',' && !inQuotes) {
        result.push(current)
        current = ''
      } else {
        current += char
      }
    }
    
    result.push(current)
    return result
  }

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "ai-ml", label: "AI/ML", count: projects.filter(p => p.category === "ai-ml").length },
    { id: "web-app", label: "Web Apps", count: projects.filter(p => p.category === "web-app").length },
    { id: "data-engineering", label: "Data Engineering", count: projects.filter(p => p.category === "data-engineering").length },
    { id: "mobile", label: "Mobile", count: projects.filter(p => p.category === "mobile").length },
    { id: "iot", label: "IoT", count: projects.filter(p => p.category === "iot").length }
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter(project => project.category === filter)

  const getCategoryColor = (category: string) => {
    const colors = {
      "ai-ml": "bg-purple-100 text-purple-800 border-purple-200",
      "web-app": "bg-blue-100 text-blue-800 border-blue-200",
      "data-engineering": "bg-green-100 text-green-800 border-green-200",
      "mobile": "bg-indigo-100 text-indigo-800 border-indigo-200",
      "iot": "bg-orange-100 text-orange-800 border-orange-200"
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  const getStatusColor = (status: string) => {
    const colors = {
      "completed": "bg-green-100 text-green-800 border-green-200",
      "in-progress": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "planned": "bg-gray-100 text-gray-800 border-gray-200"
    }
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return null
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    })
  }

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images!.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images!.length - 1 : prev - 1
      )
    }
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProjectModal()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  if (loading) {
    return (
      <section id="projects" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse text-gray-600">Loading projects...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
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
              Click on any project to explore detailed case studies, technical implementations, and outcomes
            </p>

            {error && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto mb-6">
                <p className="text-yellow-800 text-sm">{error}</p>
              </div>
            )}

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
              <Card 
                key={project.id} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer transform hover:scale-[1.02]"
                onClick={() => openProjectModal(project)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#073737]/5 to-[#ff850b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-2 flex-wrap">
                      <Badge className={`${getCategoryColor(project.category)} border`}>
                        {categories.find(c => c.id === project.category)?.label}
                      </Badge>
                      <Badge className={`${getStatusColor(project.status)} border text-xs`}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github_url && (
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer" 
                           className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                           onClick={(e) => e.stopPropagation()}>
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.live_url && project.live_url !== '#' && (
                        <a href={project.live_url} target="_blank" rel="noopener noreferrer"
                           className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                           onClick={(e) => e.stopPropagation()}>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-[#073737] transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  
                  {/* Project Meta Info */}
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                    {project.completion_date && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(project.completion_date)}
                      </div>
                    )}
                    {project.client && (
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {project.client}
                      </div>
                    )}
                    {project.role && (
                      <div className="flex items-center gap-1">
                        <Target className="h-4 w-4" />
                        {project.role}
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 mb-6 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Key Results */}
                  {project.results && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Key Results
                      </h4>
                      <p className="text-green-700 text-sm">{project.results}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm border border-gray-200">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <Button variant="ghost" className="group/btn text-[#073737] hover:text-[#ff850b] hover:bg-transparent p-0">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                    
                    <div className="flex gap-3">
                      {project.github_url && (
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#073737] transition-colors"
                           onClick={(e) => e.stopPropagation()}>
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      )}
                      {project.live_url && project.live_url !== '#' && (
                        <a href={project.live_url} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#073737] transition-colors"
                           onClick={(e) => e.stopPropagation()}>
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
                  <Card 
                    key={project.id} 
                    className="group hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white cursor-pointer transform hover:scale-105"
                    onClick={() => openProjectModal(project)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex gap-1 flex-wrap">
                          <Badge className={`${getCategoryColor(project.category)} border text-xs`}>
                            {categories.find(c => c.id === project.category)?.label}
                          </Badge>
                        </div>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.github_url && (
                            <a href={project.github_url} target="_blank" rel="noopener noreferrer" 
                               className="p-1 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                               onClick={(e) => e.stopPropagation()}>
                              <Github className="h-3 w-3" />
                            </a>
                          )}
                          {project.live_url && project.live_url !== '#' && (
                            <a href={project.live_url} target="_blank" rel="noopener noreferrer"
                               className="p-1 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                               onClick={(e) => e.stopPropagation()}>
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
                        {project.short_description || project.description}
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

                      {/* Project meta for small cards */}
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        {project.completion_date && (
                          <span>{formatDate(project.completion_date)}</span>
                        )}
                        {project.status && (
                          <Badge className={`${getStatusColor(project.status)} border text-xs`}>
                            {project.status}
                          </Badge>
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div 
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>

            {/* Image Gallery */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="relative h-80 md:h-96 bg-gray-100 rounded-t-2xl overflow-hidden">
                <Image
                  src={selectedProject.images[currentImageIndex] || "/api/placeholder/800/450"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                
                {/* Image Navigation */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5 text-gray-700" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                    >
                      <ChevronRight className="h-5 w-5 text-gray-700" />
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Project Content */}
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={`${getCategoryColor(selectedProject.category)} border`}>
                  {categories.find(c => c.id === selectedProject.category)?.label}
                </Badge>
                <Badge className={`${getStatusColor(selectedProject.status)} border`}>
                  {selectedProject.status}
                </Badge>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedProject.title}
              </h2>

              {/* Project Meta */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                {selectedProject.completion_date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      Completed: {formatDate(selectedProject.completion_date)}
                    </span>
                  </div>
                )}
                {selectedProject.client && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{selectedProject.client}</span>
                  </div>
                )}
                {selectedProject.role && (
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{selectedProject.role}</span>
                  </div>
                )}
              </div>

              {/* Long Description */}
              <div className="prose prose-gray max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.long_description}
                </p>
              </div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {selectedProject.challenges && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Challenges
                    </h4>
                    <p className="text-red-700 text-sm">{selectedProject.challenges}</p>
                  </div>
                )}
                {selectedProject.solution && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Solution
                    </h4>
                    <p className="text-blue-700 text-sm">{selectedProject.solution}</p>
                  </div>
                )}
              </div>

              {/* Results & Impact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {selectedProject.results && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Key Results
                    </h4>
                    <p className="text-green-700 text-sm">{selectedProject.results}</p>
                  </div>
                )}
                {selectedProject.impact && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Impact
                    </h4>
                    <p className="text-purple-700 text-sm">{selectedProject.impact}</p>
                  </div>
                )}
              </div>

              {/* Features */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#ff850b] rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learnings */}
              {selectedProject.learnings && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
                  <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Key Learnings
                  </h4>
                  <p className="text-yellow-700 text-sm">{selectedProject.learnings}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                {selectedProject.github_url && (
                  <a href={selectedProject.github_url} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gray-800 hover:bg-gray-900 text-white">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                )}
                {selectedProject.live_url && selectedProject.live_url !== '#' && (
                  <a href={selectedProject.live_url} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#ff850b] hover:bg-[#e67600] text-white">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                )}
                <Button variant="outline" onClick={closeProjectModal}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}