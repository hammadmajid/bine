import ProjectsCard from "@/components/project-card";
import type { Project, Result } from "@/lib/types";
import type { Metadata } from "next";
import { Octokit } from "octokit";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of various portfolio projects.",
  alternates: {
    canonical: "/projects",
  },
};

export default async function ProjectsPage() {
  const result = await getProjects();

  if (!result.ok) {
    return <div>Error: {result.error}</div>;
  }

  const filteredRepos = result.value;

  return (
    <main id="main-content" className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Projects</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos.map((project) => (
          <ProjectsCard key={project.name} project={project} />
        ))}
      </section>
    </main>
  );
}

async function getProjects(): Promise<Result<Project[]>> {
  // Only the GitHub repo's containing this topic will be shown
  const TOPIC: string = "portfolio-project";

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  try {
    const response = await octokit.request("GET /users/{username}/repos", {
      username: "hammadmajid",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
      type: "owner",
      sort: "full_name",
      direction: "desc",
    });
    const filteredRepos = response.data
      .filter((repo) => repo.topics?.includes(TOPIC))
      .map((repo) => ({
        name: repo.name,
        github: repo.html_url,
        description: repo.description,
        homepage: repo.homepage,
        topics: repo.topics && repo.topics.filter((topic) => topic !== TOPIC),
      }));

    return { ok: true, value: filteredRepos };
  } catch {
    return { ok: false, error: "Failed to fetch projects from GitHub" };
  }
}
