import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"

export function CTA() {
  return (
    <section className="py-24 text-center bg-black text-white">
      <Container>
        <h2 className="text-3xl font-semibold mb-4">
          Start taking control today
        </h2>

        <p className="mb-8 text-gray-300">
          No setup. No complexity.
        </p>

        <Button variant="secondary">
          Get Started
        </Button>
      </Container>
    </section>
  )
}