'use client';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <style jsx>{`
        nav {
          background-color: #111;
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        li a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        li a:hover {
          color: #00bfff;
        }

        @media (max-width: 600px) {
          ul {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </nav>
  );
}
