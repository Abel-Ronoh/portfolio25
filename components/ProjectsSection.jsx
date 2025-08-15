'use client';
import { useState, useEffect } from "react";
import Papa from "papaparse";
import ProjectModal from "./ProjectModal";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection({ sheetUrl }) {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // Fetch and parse CSV from Google Sheets
  useEffect(() => {
    if (!sheetUrl) return;

    fetch(sheetUrl)
      .then(res => res.text())
      .then(csvText => {
        const parsed = Papa.parse(csvText, {
          header: true,       // Treat first row as header
          skipEmptyLines: true, // Ignore empty rows
        });
        setProjects(parsed.data);
      })
      .catch(err => console.error("Error fetching projects:", err));
  }, [sheetUrl]);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-[#073737] text-center">PROJECTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <Card
              key={i}
              onClick={() => setSelectedProject(p)}
              className="cursor-pointer hover:shadow-lg transition"
            >
              <CardHeader>
                <CardTitle>{p.name}</CardTitle>
                <CardDescription>{p.Type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  {p.Descriptions?.length > 80
                    ? `${p.Descriptions.slice(0, 80)}...see more`
                    : p.Descriptions}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.Tech?.split(",").map((t, idx) => (
                    <Badge key={idx} className="bg-[#073737]">
                      {t.trim()}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
