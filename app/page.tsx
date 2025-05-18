import Link from "next/link"
import { ChevronDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/ui/navbar"
import Image from 'next/image';
import img from '../public/img.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#073737] min-h-[100vh] text-white flex flex-col items-center justify-center">
        <div className=" flex flex-col py-10 items-center justify-center">
          <div className="bg-[#FDFDFD] w-11/12 md:w-9/12  p-1 rounded-3xl flex flex-col items-center">
      <div className='sm:hidden md:flex justify-between  md:w-8/12 text-black items-center'>
        <h1 className="border-b-2 border-black">HOME</h1>
        <h1>SKILL</h1>
        <h1>EXPERIENCE</h1>
        <button className="bg-transparent border-4 border-[#0A3638] w-[96px] h-[43px] text-[#0A3638]  m-1 font-[14px] hover:border-[#577955] hover:bg-[#577955] hover:text-white cursor-pointer ">
          Linkedin
        </button>
      </div>
      <div className='md:flex md:w-50px'>
      <div className="md:w-1/2 mt-12 md:mt-16 px-5">
        <h1 className="text-[14px] md:text-2xl font-bold mb-[7px] text-black ">HELLO</h1>
        <h2 className="text-[32px] md:text-4xl font-light text-black mb-[7px]">I&#39;m <span className="text-[#E1B890] font-semibold">Abel Ronoh.</span></h2>
        <h3 className="text-[32px] md:text-4xl font-bold mb-[7px] text-[#073737]">Software Engineer</h3>
        
        <p className="text-[14px] md:text-lg text-gray-600 leading-relaxed mb-8">
          A Software Engineer based on the web.
          Building full-stack web applications with a
          focus on the overall architecture and the front
        </p>
        
        <button className="bg-[#0A3638] w-[96px] h-[43px] text-white m-1  font-[14px] hover:bg-[#577955] cursor-pointer ">
          Let&#39;s Talk
        </button>
        <button className="bg-transparent border-4 border-[#0A3638] w-[96px] h-[43px] text-[#0A3638]  m-1 font-[14px] hover:border-[#577955] hover:bg-[#577955] hover:text-white cursor-pointer ">
          GitHub
        </button>
      </div>
      <div className="relative h-[400px] md:w-1/2  my-10">
        <Image 
          src={img} 
          alt="ME" 
          
          className="absolute  h-full object-contain z-20  right-0"
        />
      </div>
      </div>
      </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#about">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ChevronDown className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#073737] text-center">PROFILE SUMMARY</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Final-year Software Engineering student with expertise in full-stack development and data pipeline design.
              Certified in Data Engineering (Zoomcamp), with hands-on experience in building scalable ETL workflows,
              cloud-based data solutions, and user-centric applications. Proven collaborator in hackathons, freelance
              projects, and technical mentorship.
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
                    <a
                      href="http://www.linkedin.com/in/abel-ronoh-ab718a265y"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-[#073737]" />
                    <a
                      href="https://github.com/Abel-Ronoh"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
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
                    <CardTitle>Frontend Developer Intern</CardTitle>
                    <CardDescription>Masomotele Computers</CardDescription>
                  </div>
                  <Badge className="bg-[#073737]">May - June 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Revamped UI/UX for a blog platform using React.js, improving user engagement by 25%.</li>
                  <li>
                    Collaborated with backend teams to integrate RESTful APIs and optimize data fetching strategies.
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

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#073737] text-center">PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Smart Study AI</CardTitle>
                <CardDescription>Chrome Extension</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Developed a chrome extension that utilizes AI libraries to generate study summaries and quizzes from
                    PDFs.
                  </li>
                  <li>Integrated Supabase for user authentication and activity tracking.</li>
                </ul>
                <div className="mt-4 flex gap-2">
                  <Badge className="bg-[#073737]">React.js</Badge>
                  <Badge className="bg-[#073737]">Supabase</Badge>
                  <Badge className="bg-[#073737]">AI</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>TechInnovatorsHub</CardTitle>
                <CardDescription>Founder & Lead Organizer</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Founded a 50+ member community; hosted online workshops.</li>
                  <li>Mentored 22 students in JavaScript fundamentals.</li>
                </ul>
                <div className="mt-4 flex gap-2">
                  <Badge className="bg-[#073737]">Community</Badge>
                  <Badge className="bg-[#073737]">Mentorship</Badge>
                  <Badge className="bg-[#073737]">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Contact Section */}
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
                      <input
                        id="name"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#073737]"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#073737]"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#073737]"
                        placeholder="Your message here..."
                      ></textarea>
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
              <a
                href="http://www.linkedin.com/in/abel-ronoh-ab718a265y"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/Abel-Ronoh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
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
  )
}
