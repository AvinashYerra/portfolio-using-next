'use client';

import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch('https://api.github.com/users/AvinashYerra/repos');
      const data = await res.json();

      // Optional: filter only relevant repos (e.g., by name or topic)
      const filtered = data.filter((repo: Repo) =>
        ['Weather_Data_Pipeline', 'Stock_Market_Data_streaming_using_Kafka'].includes(repo.name)
      );

      setRepos(filtered);
    };

    fetchRepos();
  }, []);

  return (
    <div className="projects-container p-6">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card p-4 border rounded-lg shadow hover:shadow-lg transition">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon text-gray-800 hover:text-black inline-block mb-2"
            >
              <FaGithub size={22} />
            </a>
            <h3 className="project-head text-xl font-semibold">
              {repo.name.replace(/_/g, ' ')}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {repo.description || 'No description provided.'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
