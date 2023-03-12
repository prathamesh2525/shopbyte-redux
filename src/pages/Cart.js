import { useSelector } from "react-redux"
import { useTitle } from "../Hooks/useTitle"
import { CartItem } from "../components/CartItem"
// import Image1 from "../assets/images/1001.png"
// import Image2 from "../assets/images/1002.png"

export const Cart = ({ title }) => {
  const products = useSelector((state) => state.cartState.cartList)
  const total = useSelector((state) => state.cartState.total)

  useTitle(title)
  return (
    <main>
      <section className="max-w-7xl mx-auto my-10 ">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-3xl font-bold">
            Cart Items: {products.length} / ${total}
          </p>

          {products.map((product) => (
            <CartItem key={product} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}
