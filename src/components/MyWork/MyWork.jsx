// src/components/MyWork/MyWork.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MyWork = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialProjects = async () => {
      try {
        const response = await fetch(
          `https://pritam-portfolio-api.onrender.com/api/projects?page=1&limit=6`
        );
        const data = await response.json();
        if (data && data.projects) {
          setProjects(data.projects);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchInitialProjects();
  }, []);

  const ProjectLinkWrapper = ({ project, children }) => {
    if (project.liveLink) {
      return (
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <div
        className="cursor-pointer"
        onClick={() =>
          navigate("/not-live", { state: { githubLink: project.githubLink } })
        }
      >
        {children}
      </div>
    );
  };

  return (
    <div
      id="work"
      className="flex flex-col items-center justify-center gap-12 w-full max-w-6xl mx-auto px-4"
    >
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 w-full items-center">
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-5xl font-semibold">
                My Latest Works
              </h1>
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-orange-500 to-fuchsia-500 rounded-full"></div>
            </div>
            <p className="text-lg text-neutral-300 leading-relaxed mt-6">
              Here's a selection of my recent projects. Each one was a unique
              challenge and a great learning experience.
            </p>
            <div className="hidden lg:flex gap-4 mt-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>

          <div className="lg:col-span-2">
            {projects.length > 0 ? (
              <>
                <CarouselContent className="-ml-4">
                  {projects.map((project) => (
                    <CarouselItem
                      key={project._id}
                      className="pl-4 md:basis-1/2 group"
                    >
                      <div className="p-1">
                        <Card className="bg-neutral-900 border-neutral-800 transition-colors duration-300 group-hover:border-purple-500">
                          <CardContent className="flex flex-col gap-4 p-4">
                            <ProjectLinkWrapper project={project}>
                              {/* --- MODIFIED SECTION --- */}
                              <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
                                <img
                                  src={project.imageUrl}
                                  alt={project.title}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                              {/* --- END MODIFIED SECTION --- */}
                            </ProjectLinkWrapper>
                            <h3 className="text-xl font-bold text-white">
                              {project.title}
                            </h3>
                            <p className="text-sm text-neutral-400 flex-grow">
                              {project.description}
                            </p>
                            <div className="flex gap-4">
                              {project.githubLink && (
                                <a
                                  href={project.githubLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-neutral-300 hover:text-purple-400"
                                >
                                  GitHub
                                </a>
                              )}
                              {project.liveLink && (
                                <a
                                  href={project.liveLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-neutral-300 hover:text-orange-400"
                                >
                                  Live Demo
                                </a>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="lg:hidden flex justify-center gap-4 mt-6">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full aspect-video bg-neutral-900 rounded-lg">
                <p className="text-center text-neutral-400 text-xl">
                  Loading projects...
                </p>
              </div>
            )}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MyWork;
