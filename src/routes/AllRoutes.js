import { Route, Routes } from "react-router-dom"
import { Main, Cart } from "../pages"
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main title="Home" />} />
        <Route path="/cart" element={<Cart title="Cart" />} />
      </Routes>
    </div>
  )
}
