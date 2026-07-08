import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
      <p className="text-sm font-medium text-accent">Software Engineer</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
        Escribo software funcional en el stack que el problema pida.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-500">
        Ingeniero en Desarrollo de Software. Lidero el frontend de
        adquiere.co con Vue y TypeScript, pero no me quedo ahí — cuando el
        proyecto necesita backend, base de datos o una app móvil, también lo
        construyo. He entregado sistemas completos con NestJS, Supabase y
        SQL, de principio a fin.
      </p>
      <div className="mt-8 flex items-center gap-3">
        <Button asChild>
          <a href="#proyectos">Ver proyectos</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#trayectoria" className="inline-flex items-center gap-2">
            Descargar CV
            <ArrowUpRight size={16} strokeWidth={1.75} />
          </a>
        </Button>
      </div>
    </section>
  )
}

export { Hero }
