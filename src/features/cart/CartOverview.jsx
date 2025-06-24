import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotalPrice, getTotalCartQuantity } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getCartTotalPrice);

  if (!totalCartQuantity) return null;
  
  return (
    <div
      className="flex items-center justify-between space-x-4
     bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 sm:text-base"
    >
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
