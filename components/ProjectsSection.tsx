// components/ProjectsSection.tsx
"use client"

import React, { useState, useEffect, useMemo, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight, Filter, Calendar, User, Target, X, ChevronLeft, ChevronRight, Loader } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ProjectModal from "./ProjectModal"

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
  thumbnail_url?: string
  featured: boolean
  status: string
  completion_date?: string
  client?: string
  role?: string
  challenges?: string
  results?: string
  impact?: string
  learnings?: string
  long_description?: string
  images?: string[]
  features?: string[]
  problem_statement?: string
  solution?: string
  priority_order?: number
}

// Performance optimizations
const VISIBLE_FEATURED = 4
const VISIBLE_OTHER = 6

export default function ProjectsSection({ sheetUrl }: { sheetUrl: string }) {
  const [projects, setProjects] = useState<Project[]>([])
  const [filter, setFilter] = useState<string>("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showAllFeatured, setShowAllFeatured] = useState(false)

  // Fetch data from Google Sheets
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Check cache first
        const cacheKey = `projects-${btoa(sheetUrl)}`
        const cached = localStorage.getItem(cacheKey)
        const cacheTime = localStorage.getItem(`${cacheKey}-time`)
        
        if (cached && cacheTime && Date.now() - parseInt(cacheTime) < 5 * 60 * 1000) {
          setProjects(JSON.parse(cached))
          return
        }
        
        const csvUrl = sheetUrl.replace('/edit?usp=sharing', '/export?format=csv')
        const response = await fetch(csvUrl)
        
        if (!response.ok) throw new Error(`Failed to fetch projects: ${response.status}`)
        
        const csvText = await response.text()
        const projectsData = parseCSV(csvText)
        
        // Sort by priority_order or completion_date
        projectsData.sort((a, b) => {
          if (a.priority_order && b.priority_order) return a.priority_order - b.priority_order
          if (a.completion_date && b.completion_date) 
            return new Date(b.completion_date).getTime() - new Date(a.completion_date).getTime()
          return 0
        })
        
        setProjects(projectsData)
        
        // Cache the results
        localStorage.setItem(cacheKey, JSON.stringify(projectsData))
        localStorage.setItem(`${cacheKey}-time`, Date.now().toString())
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
            
          case 'priority_order':
            project.priority_order = value ? parseInt(value) : 0
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
        images: project.images || (project.image_url ? [project.image_url] : []),
        priority_order: project.priority_order || 0
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

  // Optimized filtering with useMemo
  const { filteredProjects, featuredProjects, otherProjects } = useMemo(() => {
    const filtered = filter === "all" 
      ? projects 
      : projects.filter(project => project.category === filter)
    
    const featured = filtered.filter(p => p.featured)
    const others = filtered.filter(p => !p.featured)
    
    return {
      filteredProjects: filtered,
      featuredProjects: featured,
      otherProjects: others
    }
  }, [projects, filter])

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "ai-ml", label: "AI/ML", count: projects.filter(p => p.category === "ai-ml").length },
    { id: "web-app", label: "Web Apps", count: projects.filter(p => p.category === "web-app").length },
    { id: "data-engineering", label: "Data Engineering", count: projects.filter(p => p.category === "data-engineering").length },
    { id: "mobile", label: "Mobile", count: projects.filter(p => p.category === "mobile").length },
    { id: "iot", label: "IoT", count: projects.filter(p => p.category === "iot").length }
  ]

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

  const openProjectModal = useCallback((project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeProjectModal = useCallback(() => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }, [])

  const nextImage = useCallback(() => {
    if (selectedProject?.images) {
      setCurrentImageIndex(prev => 
        prev === selectedProject.images!.length - 1 ? 0 : prev + 1
      )
    }
  }, [selectedProject])

  const prevImage = useCallback(() => {
    if (selectedProject?.images) {
      setCurrentImageIndex(prev => 
        prev === 0 ? selectedProject.images!.length - 1 : prev - 1
      )
    }
  }, [selectedProject])

  // Keyboard navigation
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProjectModal()
    }
    
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === 'ArrowLeft') prevImage()
        if (e.key === 'ArrowRight') nextImage()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('keydown', handleArrowKeys)
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleArrowKeys)
    }
  }, [selectedProject, closeProjectModal, prevImage, nextImage])

  // Loading skeleton component
  const ProjectSkeleton = () => (
    <Card className="border-0 shadow-lg bg-white animate-pulse">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-8 w-8 bg-gray-200 rounded-lg"></div>
            <div className="h-8 w-8 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
        <div className="h-8 bg-gray-200 rounded mb-3"></div>
        <div className="flex gap-4">
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-16 bg-gray-200 rounded mb-4"></div>
        <div className="h-12 bg-gray-200 rounded mb-4"></div>
        <div className="flex gap-2 mb-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-6 w-16 bg-gray-200 rounded-full"></div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="h-10 w-32 bg-gray-200 rounded"></div>
          <div className="flex gap-3">
            <div className="h-6 w-16 bg-gray-200 rounded"></div>
            <div className="h-6 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  if (loading) {
    return (
      <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-[#ff850b] rounded-full mr-3"></div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#073737] to-[#0A3638] bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="w-3 h-3 bg-[#ff850b] rounded-full ml-3"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <ProjectSkeleton key={i} />
            ))}
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
            {featuredProjects
              .slice(0, showAllFeatured ? featuredProjects.length : VISIBLE_FEATURED)
              .map((project) => (
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

          {/* Show More/Less Button for Featured */}
          {featuredProjects.length > VISIBLE_FEATURED && (
            <div className="text-center mb-12">
              <Button
                onClick={() => setShowAllFeatured(!showAllFeatured)}
                variant="outline"
                className="border-[#073737] text-[#073737] hover:bg-[#073737] hover:text-white"
              >
                {showAllFeatured ? 'Show Less' : `Show All Featured Projects (${featuredProjects.length})`}
                <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${showAllFeatured ? 'rotate-90' : ''}`} />
              </Button>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">More Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
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
              <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Explore detailed case studies, code implementations, and project outcomes. 
                Let's discuss how we can build something amazing together!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-[#ff850b] hover:bg-[#e67600] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  View Full Portfolio
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#073737]">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          currentImageIndex={currentImageIndex}
          onClose={closeProjectModal}
          onNextImage={nextImage}
          onPrevImage={prevImage}
          onSetImageIndex={setCurrentImageIndex}
          getCategoryColor={getCategoryColor}
          getStatusColor={getStatusColor}
          formatDate={formatDate}
          categories={categories}
        />
      )}
    </>
  )
}