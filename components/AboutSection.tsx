import React from "react";
import { Phone, Mail, Linkedin, Github } from "lucide-react";

export default function AboutSection() {
  return (
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
  );
}