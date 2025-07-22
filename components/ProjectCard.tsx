'use client'; // 👈 This is required

import { FaGithub } from 'react-icons/fa';

type ProjectProps = {
  name: string;
  html_url: string;
  description: string;
};

export default function ProjectCard({ name, html_url, description }: ProjectProps) {
  return (
    <div className="project-card">
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="github-icon"
      >
        <FaGithub size={22} />
      </a>
      <h3>{name.replace(/_/g, ' ')}</h3>
      <p>{description || 'No description provided.'}</p>

      <style jsx>{`
        .project-card {
          border: 1px solid #ddd;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border-radius: 10px;
          background-color: black;
          color: white;
          transition: box-shadow 0.3s ease;
        }
        .project-card:hover {
          box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
        }
        .github-icon {
          color: white;
          margin-bottom: 0.5rem;
          display: inline-block;
        }
        h3 {
          font-size: 1.2rem;
          margin: 0.3rem 0;
        }
        p {
          font-size: 0.9rem;
          color: #ccc;
        }
      `}</style>
    </div>
  );
}
