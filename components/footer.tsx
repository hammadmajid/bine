import { Octokit } from "octokit";

async function getLastCommit() {
  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const { data } = await octokit.request(
      "GET /repos/{owner}/{repo}/commits",
      {
        owner: "hammadmajid",
        repo: "bine",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
        per_page: 1,
      }
    );

    if (data.length > 0) {
      const lastCommit = data[0];
      return {
        hash: lastCommit.sha.slice(0, 7), // Short commit hash
        date: new Date(lastCommit.commit.author?.date || "").toLocaleString(),
      };
    }
  } catch (error) {
    console.error("Error fetching commit information:", error);
    return null;
  }
}

export async function Footer() {
  const currentYear = new Date().getFullYear();

  const commitInfo = await getLastCommit();

  return (
    <footer className="p-4 text-center border-t-2 border-light-border">
      <div className="container mx-auto">
        <p className="text-sm text-light-text-secondary">
          © {currentYear} Hammad Majid
        </p>
        {commitInfo && (
          <p className="text-xs text-light-text-secondary mt-2">
            Last built on {commitInfo.hash} at {commitInfo.date}
          </p>
        )}
      </div>
    </footer>
  );
}
