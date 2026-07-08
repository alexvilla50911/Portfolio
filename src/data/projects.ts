import type { Project } from '@/types'

export const projects: Project[] = [
  {
    name: 'Adquiere.co',
    problem:
      'Liderar y escalar el desarrollo frontend de la plataforma de adquiere.co, manteniendo consistencia y calidad de código conforme el equipo y el producto crecen.',
    challenge:
      'Establecer una arquitectura frontend mantenible con Vue y TypeScript, integrada con servicios backend en NestJS y SQL, apoyada en pair programming para mantener buenas prácticas dentro del equipo.',
    technologies: ['Vue', 'TypeScript', 'Tailwind CSS', 'NestJS', 'SQL'],
    liveUrl: 'https://adquiere.co',
  },
  {
    name: 'Sistema de Inventario para Pezas y Maquinaria',
    problem:
      'Reemplazar el control manual de inventario de piezas y maquinaria por un sistema centralizado, con generación de reportes en PDF.',
    challenge:
      'Modelar el inventario y su generación de documentos con una base de datos en Supabase, manteniendo la interfaz simple para usuarios sin perfil técnico.',
    technologies: ['Vue', 'TypeScript', 'Supabase'],
  },
  {
    name: 'Sistema Interno para Taller Mecánico de Bicicletas',
    problem:
      'Digitalizar la gestión de inventario de un taller mecánico, dándole al equipo acceso tanto desde escritorio como desde una app móvil.',
    challenge:
      'Sincronizar el inventario en tiempo real entre el sistema web y la app móvil, ambos consumiendo la misma base de datos en Supabase.',
    technologies: ['Vue', 'Tailwind CSS', 'TypeScript', 'Supabase', 'Android Studio'],
  },
  {
    name: 'Orthotrauma de México',
    problem:
      'Sitio web institucional para Orthotrauma de México. Actualmente en proceso de rediseño y actualización.',
    challenge:
      'Migrar el sitio existente a una versión actualizada sin perder el posicionamiento y la información institucional ya indexada.',
    technologies: ['Vue', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://orthotraumademexico.com',
  },
  {
    name: 'RemindUp',
    problem:
      'Reemplazar la app nativa de recordatorios de macOS por una propia, más simple y a mi gusto.',
    challenge:
      'Construir una app de escritorio ligera con Electron, integrando notificaciones nativas de macOS y un bot de Telegram para avisos desde el celular.',
    technologies: ['Electron', 'JavaScript', 'Node.js'],
    repoUrl: 'https://github.com/alexvilla50911/Remind-Up',
  },
  {
    name: 'Muralea.com',
    problem:
      'Construir desde cero, como co-fundador, una plataforma digital propia: producto, contenido y posicionamiento en buscadores.',
    challenge:
      'Diseñar la arquitectura frontend con Vue y TypeScript mientras se integraban los servicios backend en NestJS, aplicando SEO técnico para maximizar la indexación orgánica del sitio.',
    technologies: ['Vue', 'TypeScript', 'Tailwind CSS', 'NestJS'],
    liveUrl: 'https://muralea.com',
  },
]
