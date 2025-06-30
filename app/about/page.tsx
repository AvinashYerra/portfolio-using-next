
'use client'; 
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <h2>About Me</h2>
        <p>I am a developer passionate about building scalable data and frontend solutions.</p>
      </main>
      <Footer />

      <style jsx>{`
        main {
          padding: 2rem;
        }
        h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  )
}
