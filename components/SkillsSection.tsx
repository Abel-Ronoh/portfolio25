import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkillsSection() {
  return (
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
  );
}