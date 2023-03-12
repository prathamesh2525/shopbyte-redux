import { useDispatch, useSelector } from "react-redux"
import { add, remove } from "../store/cartSlice"
import { useEffect, useState } from "react"

export const Card = ({ product }) => {
  const dispatch = useDispatch()
  const cartList = useSelector((state) => state.cartState.cartList)
  const { name, price, image } = product
  const [isInCart, setIsInCart] = useState(false)

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id)
    if (productInCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }, [cartList, product.id])
  return (
    <div className="p-4 bg-slate-50 ">
      <img className="w-80 mb-4" src={image} alt={name} />
      <p>{name}</p>
      <div className="flex justify-around items-center my-3">
        <p>${price}</p>
        <div
          onClick={() =>
            isInCart ? dispatch(remove(product)) : dispatch(add(product))
          }
          className={
            isInCart
              ? "text-white p-2 rounded font-bold bg-red-800 hover:bg-red-900 hover:cursor-pointer"
              : "text-white p-2 rounded font-bold bg-blue-800 hover:bg-blue-900 hover:cursor-pointer"
          }
        >
          {isInCart ? "Remove" : "Add to Cart"}
        </div>
      </div>
    </div>
  )
}
