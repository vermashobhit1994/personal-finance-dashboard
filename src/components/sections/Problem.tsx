import { Container } from "@/components/ui/Container"

export function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Money disappears without notice
        </h2>

        <ul className="space-y-4 text-gray-700 text-center">
          <li>• Small expenses add up</li>
          <li>• You don’t track consistently</li>
          <li>• You feel unsure about spending</li>
        </ul>
      </Container>
    </section>
  )
}