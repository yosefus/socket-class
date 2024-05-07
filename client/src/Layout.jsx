import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
   return (
      <div className="layout">
       <nav>
         <NavLink to="/">user</NavLink>
         <NavLink to="/admin">admin</NavLink>
       </nav>
       <Outlet />
     </div>
   )
}
export default Layout