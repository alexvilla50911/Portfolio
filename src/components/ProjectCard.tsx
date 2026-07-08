import { ArrowUpRight } from 'lucide-react'

import { TechBadge } from '@/components/TechBadge'
import { GithubIcon } from '@/components/icons/BrandIcons'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Project } from '@/types'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
            Problema resuelto
          </p>
          <CardDescription className="mt-1">{project.problem}</CardDescription>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
            Reto técnico
          </p>
          <CardDescription className="mt-1">{project.challenge}</CardDescription>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </CardContent>
      {(project.liveUrl || project.repoUrl) && (
        <CardFooter>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Ver proyecto
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Código
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  )
}

export { ProjectCard }
