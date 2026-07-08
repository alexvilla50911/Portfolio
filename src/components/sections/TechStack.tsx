import { TechBadge } from '@/components/TechBadge'
import { techStack } from '@/data/techStack'

function TechStack() {
  return (
    <section id="stack" className="border-t border-zinc-200">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          Stack tecnológico
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          Herramientas que uso a diario para diseñar, construir y operar software.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {techStack.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-zinc-900">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <TechBadge key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { TechStack }
