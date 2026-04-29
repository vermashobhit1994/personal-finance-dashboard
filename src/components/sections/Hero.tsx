import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"

export function Hero() {
  return (
    <section className="py-24 text-center">
      <Container>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Where did your money go?
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          You spend throughout the day… but by the end,
          you don’t remember where it went.
        </p>

        <p className="text-lg text-gray-600 mb-8">
          Track expenses in seconds. See everything clearly.
        </p>

        <Button>
          Start free in 10 seconds
        </Button>
      </Container>
    </section>
  )
}