import { Mail } from 'lucide-react'

import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/alexvilla50911', icon: GithubIcon },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alejandro-villarreal-carvajal-b392b0251/',
    icon: LinkedinIcon,
  },
  { label: 'Email', href: 'mailto:alexscript277@gmail.com', icon: Mail },
]

function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-400 sm:flex-row">
        <p>© {new Date().getFullYear()} Alejandro Villarreal. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-zinc-400 transition-colors hover:text-zinc-900"
            >
              <Icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export { Footer }
