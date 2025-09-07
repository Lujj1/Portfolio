import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Star, GitFork } from "lucide-react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub repos
    fetch("https://api.github.com/users/Lujj1/repos")
      .then((res) => res.json())
      .then((data) => {
        // Filter out forked repos and sort by stars
        const ownRepos = data
          .filter((repo: any) => !repo.fork)
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6); // Show top 6 projects
        setRepos(ownRepos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repos:", error);
        setLoading(false);
        // Fallback to manual projects if API fails
        setRepos([
          {
            id: 1,
            name: "firstproject",
            description: "My first project exploring web development fundamentals",
            html_url: "https://github.com/Lujj1/firstproject",
            homepage: null,
            stargazers_count: 0,
            forks_count: 0,
            language: "JavaScript",
            topics: [],
          },
          {
            id: 2,
            name: "bridalShop",
            description: "E-commerce platform for a bridal shop with modern UI/UX",
            html_url: "https://github.com/Lujj1/bridalShop",
            homepage: null,
            stargazers_count: 0,
            forks_count: 0,
            language: "JavaScript",
            topics: [],
          },
        ]);
      });
  }, []);

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow text-secondary-foreground",
      TypeScript: "bg-blue-500 text-white",
      Dart: "bg-blue-400 text-white",
      HTML: "bg-orange-500 text-white",
      CSS: "bg-purple-500 text-white",
      Python: "bg-green-500 text-white",
    };
    return colors[language || ""] || "bg-muted text-muted-foreground";
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 shadow-card animate-pulse">
                  <div className="h-6 bg-muted rounded mb-3"></div>
                  <div className="h-4 bg-muted rounded mb-4"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  className="bg-gradient-card rounded-2xl p-6 shadow-card hover-lift group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Code className="w-8 h-8 text-primary" />
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      {repo.stargazers_count > 0 && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      )}
                      {repo.forks_count > 0 && (
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          <span>{repo.forks_count}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {repo.name}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {repo.description || "A project showcasing my development skills"}
                  </p>

                  {repo.language && (
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getLanguageColor(repo.language)}`}>
                        {repo.language}
                      </span>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {repo.homepage && (
                      <Button variant="coral" size="sm" asChild>
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button variant="gradient" size="lg" asChild>
              <a href="https://github.com/Lujj1" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;