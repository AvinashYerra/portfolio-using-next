'use client'; 
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <h2>Contact</h2>
        <p>Reach out to me at <a href="mailto:your@email.com">your@email.com</a></p>
      </main>
      <Footer />

      <style jsx>{`
        main {
          padding: 2rem;
        }
        a {
          color: blue;
        }
      `}</style>
    </>
  )
}
