import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Solution } from "@/components/sections/Solution"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <CTA />
    </main>
  )
}