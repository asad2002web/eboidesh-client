import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* <div className='h-[calc(100vh-106px)]'> */}
        <Outlet />
      {/* </div> */}
      <Footer />
    </div>
  )
}

export default MainLayout