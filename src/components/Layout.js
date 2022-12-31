import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Layout = () => {
  return (
    <>
    <nav>
        <Link to="/dash/areas">Areas</Link>
    </nav>
    <Outlet />
    </>
  )
}
export default Layout