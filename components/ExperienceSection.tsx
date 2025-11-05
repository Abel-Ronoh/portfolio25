import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  return (
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
  );
}