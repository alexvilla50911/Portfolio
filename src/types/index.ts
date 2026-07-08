export interface Project {
  name: string
  problem: string
  challenge: string
  technologies: string[]
  liveUrl?: string
  repoUrl?: string
}

export interface TechCategory {
  category: 'Frontend' | 'Backend' | 'DevOps / Herramientas'
  items: string[]
}

export interface TimelineEntry {
  year: string
  title: string
  organization: string
  description: string
  type: 'experience' | 'certification' | 'education'
}
