import { MdAccountCircle, MdCall, MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="hidden lg:block">
    <div className="Container py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-semibold">
            <p>Free Shipping on Orders Above 500TK </p>
            <p className="flex items-center gap-2">
                <MdCall className="text-[#8e8bf5]"/>
                <span>+880 1740 147 917</span>
            </p>
        </div>
        <div>
            <ul className="flex items-center gap-4 font-semibold">
                <NavLink to="/login" className="flex items-center gap-1 group cursor-pointer">
                    <MdAccountCircle className="text-lg group-hover:text-[#8e8bf5] transition-all "/>
                    <span>My Account</span>
                </NavLink>
                <NavLink to="/wishlist" className="flex items-center gap-1">
                    <MdFavorite className="text-red-600 text-lg"/>
                    <span>Wishlist</span>
                </NavLink>
            </ul>
        </div>
    </div>
    <hr className="w-full"/>
    </div>
  )
}

export default Header