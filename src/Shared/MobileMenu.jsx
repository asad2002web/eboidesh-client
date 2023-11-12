import { NavLink } from "react-router-dom"
import { Avatar } from "../assets"

const MobileMenu = ({login}) => {

    return (
        <ul className='items-center space-x-4 flex'>
            <NavLink
                to='/'
                aria-label='Home'
                className={({ isActive }) => (isActive ? 'active bg-[#FFE9C2] px-2 py-1 rounded-md' : 'default px-2 py-1')}
            >
                Home
            </NavLink>
            <NavLink
                to='/all-books'
                aria-label='Home'
                title='Home'
                className={({ isActive }) => (isActive ? 'active bg-[#FFE9C2] px-2 py-1 rounded-md' : 'default px-2 py-1')}
            >
                All Books
            </NavLink>

            {
                login && <> 
                <NavLink
                    to='/payments'
                    aria-label='Home'
                    className={({ isActive }) => (isActive ? 'active bg-[#FFE9C2] px-2 py-1 rounded-md' : 'default px-2 py-1')}
                >
                    Payment
                </NavLink>
                <NavLink
                    to='/login'
                    aria-label='Home'
                    className={({ isActive }) => (isActive ? 'active bg-[#FFE9C2] px-2 py-1 rounded-md' : 'default px-2 py-1')}
                >
                    Login
                </NavLink>
                    <img src={Avatar} className='w-8 cursor-pointer' alt="Avatar" />
                </>
            }
        </ul>
    )
}

export default MobileMenu