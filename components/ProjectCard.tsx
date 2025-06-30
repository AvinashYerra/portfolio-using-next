type Props = {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank">View Project</a>

      <style jsx>{`
        .card {
          border: 1px solid #ccc;
          padding: 1rem;
          margin-bottom: 1rem;
          border-radius: 8px;
        }
        a {
          color: blue;
        }
      `}</style>
    </div>
  )
}
