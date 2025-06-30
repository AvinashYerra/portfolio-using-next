'use client'; 
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  return (
    <>
      <Navbar />
      <main>
        <h2>Projects</h2>
        <ProjectCard
          title="GitLab AI Code Reviewer"
          description="CI/CD component to auto-review MRs using Gemini API."
          link="https://github.com/your-repo"
        />
        {/* Add more ProjectCards as needed */}
      </main>
      <Footer />

      <style jsx>{`
        main {
          padding: 2rem;
        }
        h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </>
  )
}
