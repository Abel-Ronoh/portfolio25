import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { LinkIcon, ArrowLeft } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showBackground, setShowBackground] = useState(true);

  // Normalize images into an array
  const images = project.images
    ? Array.isArray(project.images)
      ? project.images
      : project.images.split(",").map((img) => img.trim())
    : [];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);

    // Disable background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto"; // Restore scrolling
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowBackground(false);
      onClose();
    }, 1000);
  };

  return (
    <div
      className={`fixed inset-0 flex z-50 transition-opacity duration-900 ${
        showBackground ? "bg-black bg-opacity-50 opacity-100" : "opacity-0"
      }`}
    >
      {/* Overlay */}
      <div className="flex-grow" onClick={handleClose}></div>

      {/* Content */}
      <div
        className={`w-8/12 bg-white relative transform transition-transform duration-500 ease-out flex flex-col ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Fixed Navbar */}
        <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10 shadow-sm">
          {/* Back button */}
          <button
            onClick={handleClose}
            className="flex items-center text-gray-700 hover:text-black"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          {/* Project Link */}
          {project.Link && (
            <a
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#073737] underline"
            >
              <LinkIcon className="w-4 h-4 mr-1" /> View Project
            </a>
          )}
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto p-8 flex-1">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold">{project.name}</h2>
            <p className="text-gray-500">{project.Type}</p>
          </div>

          {/* Summary */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Summary</h3>
            <p className="text-gray-700 whitespace-pre-line">
              {project.Descriptions}
            </p>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">
              Skills and Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.Tech?.split(",").map((t, idx) => (
                <Badge key={idx} className="bg-[#073737] text-white">
                  {t.trim()}
                </Badge>
              ))}
            </div>
          </div>

          {/* Images */}
          {images.length > 0 && (
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="w-full rounded-lg shadow"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
