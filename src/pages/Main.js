import { useTitle } from "../Hooks/useTitle"
import { products } from "../components/"
import { Card } from "../components/Card"

export const Main = ({ title }) => {
  useTitle(title)
  return (
    <main className="other: h-[130vh] semi:h-[90vh]">
      <section className="max-w-7xl mx-auto  h-screen my-12">
        <div className="flex flex-wrap flex-start gap-16 px-8 justify-center">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}
