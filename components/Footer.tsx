export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Avinash Yerra. All rights reserved.</p>

      <style jsx>{`
        footer {
          text-align: center;
          padding: 1rem;
          margin-top: 2rem;
          background: grey;
        }
      `}</style>
    </footer>
  )
}
