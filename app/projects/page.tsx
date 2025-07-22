// app/projects/page.tsx
import ProjectCard from '@/components/ProjectCard';

async function getAllRepos() {
  const res = await fetch('https://api.github.com/users/AvinashYerra/repos', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function ProjectsPage() {
  const repos = await getAllRepos();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo: any) => (
          <ProjectCard
            key={repo.id}
            name={repo.name}
            html_url={repo.html_url}
            description={repo.description}
          />
        ))}
      </div>
    </main>
  );
}
