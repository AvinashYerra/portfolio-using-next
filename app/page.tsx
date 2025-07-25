'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SiPython, SiMysql, SiPostgresql, SiCplusplus, SiJavascript, SiApacheairflow, SiApachehadoop, SiSnowflake, SiGit, SiLeetcode, SiGeeksforgeeks, SiCodeforces  } from 'react-icons/si';
import { FaSnowflake, FaFileExcel, FaGithub, FaLinkedin} from 'react-icons/fa'; 
import { VscVscode } from 'react-icons/vsc';
import { FiMail } from 'react-icons/fi';
import ProjectCard from '@/components/ProjectCard';
import '@/styles/globals.css';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="hero">
          <h1>Hi, I'm Avinash</h1>
        </section>
        <section id="about" className="about">
          <p>I am a full time Data Engineer and a part time Web developer.</p>
          <p>I mainly focus on building scalable and data driven solutions.</p>
          <p>I've participated in many hackathons online and developed few MVPs</p>
        </section>

        <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills">
          <div className="skill"><SiPython size={40} /><span>Python</span></div>
          <div className="skill"><SiMysql size={40} /><span>SQL</span></div>
          <div className="skill"><SiCplusplus size={40} /><span>C++</span></div>
          <div className="skill"><SiJavascript size={40} /><span>JavaScript</span></div>
          <div className="skill"><SiApachehadoop size={40} /><span>Hadoop</span></div>
          <div className="skill"><SiApacheairflow size={40} /><span>Airflow</span></div>
          <div className="skill"><FaSnowflake size={40} /><span>Snowpark</span></div>
          <div className="skill"><SiPostgresql size={40} /><span>PostgreSQL</span></div>
          <div className="skill"><SiGit size={40} /><span>Git</span></div>
          <div className="skill"><SiSnowflake size={40} /><span>Snowflake</span></div>
          <div className="skill"><FaFileExcel size={40} /><span>Excel</span></div>
          <div className="skill"><VscVscode size={40} /><span>VsCode</span></div>
        </div>
        </section>




        <section id="education" className="section">
        <h2>Education</h2>

        <div className="education-card">
          <h3>National Institute of Technology, Raipur</h3>
          <p className="degree">B.Tech – Computer Science and Engineering</p>
        </div>
        </section>



        {/* Experience Section */}
        <section id="experience" className="section">
      <h2>Breaking Prod Here</h2>

      {/* Full-Time Role */}
      <div className="experience-card">
        <h3>ZS Associates</h3>
        <p><strong>Business Technology Solutions Associate</strong></p>
        <p className="tech">Technologies: Python, SQL, Airflow, Git, Snowpark, Excel</p>
        <ul>
          <li>Analysis</li>
          <li>Built Pipelines</li>
        </ul>
      </div>

      {/* Internship */}
      <div className="experience-card">
        <h3>ZS Associates</h3>
        <p><strong>Business Technology Solutions Associate Intern</strong></p>
        <p className="tech">Technologies: Python, SQL, Airflow, Git, Snowflake, Excel</p>
        <ul>
          <li>Analysis</li>
          <li>Built Pipelines</li>
        </ul>
      </div>
    </section>

  <section id="projects" className="section">
  <h2>Projects</h2>

  {/* Project 1 */}
  <div className="project-card">
    <a
      href="https://github.com/AvinashYerra/Weather_Data_Pipeline"
      target="_blank"
      rel="noopener noreferrer"
      className="github-icon"
    >
      <FaGithub size={22} />
    </a>
    <h3 className='project-head'>Weather Data Streaming</h3>
  </div>

  {/* Project 2 */}
  <div className="project-card">
    <a
      href="hhttps://github.com/AvinashYerra/Stock_Market_Data_streaming_using_Kafka"
      target="_blank"
      rel="noopener noreferrer"
      className="github-icon"
    >
      <FaGithub size={22} />
    </a>
    <h3>Real Time Data Streaming</h3>
  </div>

  <Link
    href="/projects"
    className="inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
  >
    Explore More
  </Link>
  <div className="github-link">
    <a href="https://github.com/avinashyerra" target="_blank" rel="noopener noreferrer">
      Explore more on GitHub →
    </a>
  </div>
  </section>

        {/* Contact Section */}
        <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="contact-icons">
          <a href="mailto:avinashyerra123@gmail.com" target="_blank" rel="noopener noreferrer">
            <FiMail size={28} />
          </a>
          <a href="https://github.com/avinashyerra" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/avinash-yerra" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
          <a href="https://leetcode.com/u/avinashyerra/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode size={28} />
          </a>
          <a href="https://www.geeksforgeeks.org/user/avinashyerra123/" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks size={28} />
          </a>
          <a href="https://codeforces.com/profile/avinashyerra" target="_blank" rel="noopener noreferrer">
            <SiCodeforces size={28} />
          </a>

        </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        main {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }
        .hero {
          text-align: center;
          margin-bottom: 3rem;
        }
        .hero h1 {
          font-size: 2.8rem;
        }
        .hero p {
          color: #555;
        }
        .section { 
          margin-bottom: 2rem;
        }
        .section h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .about{
          margin: 2rem;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 3rem;
          width: 100%;
          height: 23vh;
        }
        .education-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 1.5rem;
          margin: 0 auto;
          width: fit-content;
        }
        .degree {
          font-size: 1.05rem;
          font-weight: 500;
          margin-bottom: 0.3rem;
        }

        ul {
          list-style: disc;
          padding-left: 1.5rem;
        }

        li {
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
        }
        .skills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }
        .skill {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90px;
        }
        span {
          margin-top: 0.5rem;
          font-size: 0.9rem;
          text-align: center;
        }

        .experience-card {
          border: 1px solid #ddd;
          padding: 1.5rem;
          margin-bottom: 0.5rem;
          border-radius: 10px;
          background: black;
        }
        .tech {
          font-size: 0.85rem;
          font-style: italic;
          color: #777;
          margin-bottom: 1rem;
        }

        .project-card {
          position: relative; /* Needed for absolute GitHub icon */
          border: 1px solid #ddd;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          border-radius: 10px;
          background-color: black;
        }

        h3 {
          margin: 0.3rem;
        }


        .github-icon {
          position: absolute;
          top: 1rem;
          right: 1rem;
          color: white !important;
          text-decoration: none;
        }

        .github-icon:hover {
          color: #555;
        }

        .github-link {
          text-align: center;
          margin-top: 2rem;
        }

        .github-link a {
          background-color: #000;
          color: #fff;
          padding: 0.6rem 1.2rem;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          transition: background-color 0.2s ease;
        }

        .github-link a:hover {
          background-color: #333;
        }
        
        .contact-icons {
          display: flex;
          gap: 1.5rem;
          margin-top: 1rem;
          align-items: center;
          justify-content: center;
        }

        .contact-icons a {
          color: white;
          transition: color 0.2s ease;
        }

        .contact-icons a:hover {
          color: black; 
        }


      `}</style>

    </>
  );
}
