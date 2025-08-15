import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  // Normalize images to always be an array
  let images = [];
  if (Array.isArray(project.images)) {
    images = project.images;
  } else if (typeof project.images === "string" && project.images.trim() !== "") {
    images = project.images.includes(",")
      ? project.images.split(",").map(img => img.trim())
      : [project.images.trim()];
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex z-50">
      {/* Clickable overlay */}
      <div
        className="flex-grow bg-black bg-opacity-70"
        onClick={onClose}
      ></div>

      {/* Sliding content */}
      <div
        className={`w-7/12  bg-white relative overflow-y-auto p-6 transform transition-transform duration-300 ease-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        {/* Project name */}
        <h3 className="text-2xl font-bold">{project.name}</h3>
        <p className="text-gray-500">{project.Type}</p>

        {/* Project images */}
        {images.length > 0 && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project image ${index + 1}`}
                className="w-40 h-auto rounded-lg shadow"
              />
            ))}
          </div>
        )}

        {/* Project description */}
        <p className="text-gray-700 mb-4">{project.Descriptions}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.Tech?.split(",").map((t, idx) => (
            <Badge key={idx} className="bg-[#073737]">
              {t.trim()}
            </Badge>
          ))}
        </div>

        {/* Project link */}
        {project.Link && (
          <a
            href={project.Link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#073737]"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
