import type { Project } from "@/lib/types";
import Link from "next/link";
import { Github, Globe } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectsCard({ project }: ProjectCardProps) {
  return (
    <div className="shadow-xl space-y-2 hover:shadow-2xl hover:tra transition-all rounded-md p-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="font-semibold text-lg">{project.name}</h2>
        <div className="flex flex-row gap-1">
          <a href={project.github} className="w-max hover:fill-light-accent">
            <Github />
          </a>
          {project.homepage && (
            <Link
              href={project.homepage}
              className="w-max hover:fill-light-accent"
            >
              <Globe />
            </Link>
          )}
        </div>
      </div>
      <p>{project.description}</p>
      <ul className="flex gap-2">
        {project.topics &&
          project.topics.map((tag) => (
            <li key={tag}>
              <Link
                href={`/projects/?${tag}`}
                className="text-light-accent hover:text-light-accent-hover"
              >
                {tag}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
