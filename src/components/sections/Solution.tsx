import { Container } from "@/components/ui/Container"

export function Solution() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Simple tracking. Real clarity.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-medium mb-2">Fast input</h3>
            <p className="text-gray-600">
              Add expenses in seconds
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Clear insights</h3>
            <p className="text-gray-600">
              Understand your spending instantly
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-2">No complexity</h3>
            <p className="text-gray-600">
              No setup, no learning curve
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}