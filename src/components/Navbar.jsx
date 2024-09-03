import { Outlet,Link } from "react-router-dom";



const Navbar=()=>{

    return (<>
    <nav >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>)
}

export default Navbar;