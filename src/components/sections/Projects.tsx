import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'

function Projects() {
  return (
    <section id="proyectos" className="border-t border-zinc-200">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          Proyectos destacados
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          Una selección de trabajos que muestran cómo abordo problemas de
          ingeniería de principio a fin.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { Projects }
