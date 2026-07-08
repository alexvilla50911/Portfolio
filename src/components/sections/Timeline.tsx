import { Download } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { timeline } from '@/data/timeline'

const TYPE_LABEL: Record<(typeof timeline)[number]['type'], string> = {
  experience: 'Experiencia',
  certification: 'Certificación',
  education: 'Educación',
}

function Timeline() {
  return (
    <section id="trayectoria" className="border-t border-zinc-200">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              Trayectoria y certificaciones
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              Crecimiento profesional continuo, en orden cronológico.
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="/cv.pdf" download className="inline-flex items-center gap-2">
              <Download size={16} strokeWidth={1.75} />
              Descargar CV
            </a>
          </Button>
        </div>

        <ol className="mt-10 space-y-8 border-l border-zinc-200 pl-6">
          {timeline.map((entry) => (
            <li key={`${entry.year}-${entry.title}`} className="relative">
              <span className="absolute -left-[29px] top-1 h-2 w-2 rounded-full bg-zinc-300" />
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                {entry.year} · {TYPE_LABEL[entry.type]}
              </p>
              <h3 className="mt-1 text-base font-semibold text-zinc-900">{entry.title}</h3>
              <p className="text-sm text-zinc-500">{entry.organization}</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">{entry.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export { Timeline }
