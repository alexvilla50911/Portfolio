import { Badge } from '@/components/ui/badge'
import { DEFAULT_TECH_COLOR, techColors } from '@/data/techColors'

function TechBadge({ name }: { name: string }) {
  return (
    <Badge className="gap-1.5">
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: techColors[name] ?? DEFAULT_TECH_COLOR }}
      />
      {name}
    </Badge>
  )
}

export { TechBadge }
