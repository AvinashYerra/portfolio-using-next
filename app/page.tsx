'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SiPython, SiMysql, SiPostgresql, SiCplusplus, SiJavascript, SiApacheairflow, SiApachehadoop, SiSnowflake, SiGit, SiLeetcode, SiGeeksforgeeks, SiCodeforces  } from 'react-icons/si';
import { FaSnowflake, FaFileExcel, FaGithub, FaLinkedin} from 'react-icons/fa'; 
import { VscVscode } from 'react-icons/vsc';
import { FiMail } from 'react-icons/fi';


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <h1>Hi, I'm Avinash</h1>
          {/* <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}>
            This is Roboto font
          </p> */}
        </section>

        {/* Education Section */}
        <section id="education" className="section">
        <h2>Education</h2>

        <div className="education-card">
          <h3>National Institute of Technology, Raipur</h3>
          <p className="degree">B.Tech – Computer Science and Engineering</p>

          <div className="coursework">
          <div className="course-tags">
            <span>Data Structures and Algorithms</span>
            <span>Database Management Systems</span>
            <span>Operating System</span>
            <span>Software Engineering</span>
            <span>Distributed Systems</span>
            <span>Big Data Analytics</span>
          </div>
        </div>
        </div>
        </section>

        {/* Skills Section */}
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
    <h3>Weather Data Streaming</h3>
    <p className="tech">Python, Kafka, PostgreSQL, OpenWeatherMap API</p>
    <p>
      A real-time weather monitoring pipeline fetching and analyzing data from 15+ cities. Streams API data using Kafka and stores it in PostgreSQL for live querying.
    </p>
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
    <p className="tech">Python, AWS EC2, S3, Glue, Athena, Jupyter Notebook</p>
    <p>
      Built a real-time stock market data pipeline on AWS using Kafka for ingestion, S3 for storage, Glue for schema discovery, and Athena for interactive querying.
    </p>
  </div>

  {/* Read More Button */}
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
        ul {
          list-style: disc;
          padding-left: 1.5rem;
        } 
        a {
          color: blue;
          text-decoration: none;
        }
        .education-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 1.5rem;
          background-color: black;
          margin-bottom: 2rem;
        }

        h3 {
          margin-bottom: 0.4rem;
        }

        .degree {
          font-size: 1.05rem;
          font-weight: 500;
          margin-bottom: 0.3rem;
        }

        .meta {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
        }

        .coursework h4 {
          margin-bottom: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
        }

        .course-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .course-tags span {
          background-color: black;
          border: 1px solid white; 
          padding: 0.4rem 0.8rem;
          border-radius: 10px;
          font-size: 0.95rem;
          white-space: nowrap;
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
        h3 {
          margin-bottom: 0.2rem;
        }
        .meta {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 0.5rem;
        }
        .tech {
          font-size: 0.85rem;
          font-style: italic;
          color: #777;
          margin-bottom: 1rem;
        }
        ul {
          padding-left: 1.2rem;
        }
        ul li {
          margin-bottom: 0.5rem;
        }
        .project-card {
          position: relative; /* Needed for absolute GitHub icon */
          border: 1px solid #ddd;
          padding: 1.5rem;
          margin-bottom: 0.5rem;
          border-radius: 10px;
          background-color: black;
        }

        h3 {
          margin-bottom: 0.3rem;
        }

        .tech {
          font-size: 0.9rem;
          color: #777;
          margin-bottom: 0.8rem;
          font-style: italic;
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
        .project-exp{
          font-color :white;        
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
