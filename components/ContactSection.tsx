import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      // Save to Firestore
      await addDoc(collection(db, "messages"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
        read: false,
        status: "new"
      });

      setSuccess(true);
      // Reset form
      setFormData({ 
        name: "", 
        email: "", 
        subject: "", 
        message: "" 
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#073737] via-[#0A3638] to-[#052525] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-[#ff850b] rounded-full mr-3"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>
            <div className="w-3 h-3 bg-[#ff850b] rounded-full ml-3"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            
            {success && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-200">
                ✅ Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Your Name *
                  </label>
                  <input 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff850b] focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email Address *
                  </label>
                  <input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff850b] focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                    disabled={loading}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff850b] focus:border-transparent transition-all duration-300"
                  placeholder="Project Collaboration"
                  disabled={loading}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Your Message *
                </label>
                <textarea 
                  id="message" 
                  rows={6} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff850b] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                  disabled={loading}
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#ff850b] to-orange-500 hover:from-orange-500 hover:to-[#ff850b] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Mail className="ml-2 h-5 w-5" />
                  </>
                )}
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
                    <a 
                      href="http://www.linkedin.com/in/abel-ronoh-ab718a265" 
                      className="text-white font-semibold hover:text-[#ff850b] transition-colors duration-300" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
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
                    <a 
                      href="https://github.com/Abel-Ronoh" 
                      className="text-white font-semibold hover:text-[#ff850b] transition-colors duration-300" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
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
                I&apos;m currently accepting new projects and opportunities. Let&apos;s discuss how we can work together!
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
            <h3 className="text-2xl font-bold mb-4 text-white">Let&apos;s Build Something Extraordinary</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, need technical consultation, or just want to chat about technology, 
              I&apos;d love to hear from you.
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
  );
}