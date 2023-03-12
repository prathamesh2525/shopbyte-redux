import React, { useState } from "react"
import Logo from "../assets/logo.png"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

export const Header = () => {
  const cartItem = useSelector((state) => state.cartState.cartList)
  let [active, setActive] = useState(true)
  const ac = "focus:bg-gray-200"
  return (
    <header>
      <nav className="border-b-2 border-gray-200">
        <div className="flex justify-around py-4 ">
          <NavLink onClick={() => setActive(!active)} to={"/"}>
            <div className="flex items-center gap-2 ">
              <img className="w-14" src={Logo} alt="Logo" />
              <h1 className="text-3xl">Shopbyte</h1>
            </div>
          </NavLink>
          <div className="flex items-center ">
            <NavLink className={active ? ac : ""} to={"/"} end>
              <div className="text-xl  hover:bg-gray-200 p-3 rounded">Home</div>
            </NavLink>
            <NavLink className="focus:bg-gray-200" to={"/cart"}>
              <div className="text-xl hover:bg-gray-200 p-3 px-6 rounded">
                Cart
              </div>
            </NavLink>
          </div>

          <div className="flex items-center">
            <NavLink to={"/cart"}>
              <p className="text-xl">Cart: {cartItem.length}</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
