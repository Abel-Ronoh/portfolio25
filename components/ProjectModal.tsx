// components/ProjectModal.tsx
"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, Github, ExternalLink, Calendar, User, Target } from "lucide-react"
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
  impact?: string
  learnings?: string
  long_description?: string
  images?: string[]
  features?: string[]
  problem_statement?: string
  solution?: string
}

interface ProjectModalProps {
  project: Project
  currentImageIndex: number
  onClose: () => void
  onNextImage: () => void
  onPrevImage: () => void
  onSetImageIndex: (index: number) => void
  getCategoryColor: (category: string) => string
  getStatusColor: (status: string) => string
  formatDate: (dateString?: string) => string | null
  categories: Array<{ id: string; label: string }>
}

export default function ProjectModal({
  project,
  currentImageIndex,
  onClose,
  onNextImage,
  onPrevImage,
  onSetImageIndex,
  getCategoryColor,
  getStatusColor,
  formatDate,
  categories
}: ProjectModalProps) {
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="relative h-80 md:h-96 bg-gray-100 rounded-t-2xl overflow-hidden">
            <Image
              src={project.images[currentImageIndex] || "/api/placeholder/800/450"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            
            {/* Image Navigation */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={onPrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-700" />
                </button>
                <button
                  onClick={onNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-gray-700" />
                </button>
                
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => onSetImageIndex(index)}
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
            <Badge className={`${getCategoryColor(project.category)} border`}>
              {categories.find(c => c.id === project.category)?.label}
            </Badge>
            <Badge className={`${getStatusColor(project.status)} border`}>
              {project.status}
            </Badge>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {project.title}
          </h2>

          {/* Project Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            {project.completion_date && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-700">
                  Completed: {formatDate(project.completion_date)}
                </span>
              </div>
            )}
            {project.client && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-700">{project.client}</span>
              </div>
            )}
            {project.role && (
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-700">{project.role}</span>
              </div>
            )}
          </div>

          {/* Long Description */}
          <div className="prose prose-gray max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              {project.long_description}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {project.challenges && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Challenges
                </h4>
                <p className="text-red-700 text-sm">{project.challenges}</p>
              </div>
            )}
            {project.solution && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Solution
                </h4>
                <p className="text-blue-700 text-sm">{project.solution}</p>
              </div>
            )}
          </div>

          {/* Results & Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {project.results && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Key Results
                </h4>
                <p className="text-green-700 text-sm">{project.results}</p>
              </div>
            )}
            {project.impact && (
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Impact
                </h4>
                <p className="text-purple-700 text-sm">{project.impact}</p>
              </div>
            )}
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
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
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Learnings */}
          {project.learnings && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                <Target className="h-4 w-4" />
                Key Learnings
              </h4>
              <p className="text-yellow-700 text-sm">{project.learnings}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
            {project.github_url && (
              <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gray-800 hover:bg-gray-900 text-white">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              </a>
            )}
            {project.live_url && project.live_url !== '#' && (
              <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#ff850b] hover:bg-[#e67600] text-white">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </a>
            )}
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}