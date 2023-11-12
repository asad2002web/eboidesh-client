import { Avatar, Logo } from '../assets'
import { Link, NavLink } from 'react-router-dom'
import Header from './Header'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {

  const [login, setLogin] = useState(true)

  return (
    <>
      <Header />
      <div className='Container flex justify-between items-center py-2'>

        <Link to='/' className='flex items-center'>
          <img className='w-10' src={Logo} alt="logo" />
          <h4 className='text-3xl font-bold'>E-Boi<span className='text-[#8e8bf5]'>Desh</span></h4>
        </Link>

        <div className='hidden md:block'>
          <ul className='items-center hidden space-x-8 lg:flex'>

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
              login && <> <NavLink
                to='/payments'
                aria-label='Home'
                className={({ isActive }) => (isActive ? 'active bg-[#FFE9C2] px-2 py-1 rounded-md' : 'default px-2 py-1')}
              >
                Payment
              </NavLink>
                <img src={Avatar} className='w-8 cursor-pointer' alt="Avatar" />
              </>
            }
          </ul>
        </div>
      </div>

      <div className='bg-[#8e8bf5] fixed z-10 bottom-0 flex items-center w-full Container h-[50px] md:hidden'>
        <MobileMenu login={login}/>
      </div>
    </>
  )
}

export default Navbar