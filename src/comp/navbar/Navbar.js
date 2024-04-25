import { Link,NavLink, Outlet } from 'react-router-dom'

import './Navbar.css'
import 'animate.css';
                     
const Navbar = () => {
  return (
    <>
    <nav className="navbar" >
      <div className="container">
        <div className="logo">
        <h1 class="animate__animated animate__bounce" ><Link to="/"><img src="https://yt3.googleusercontent.com/uiFj7wHnDE-2Ezn93eQ8lNM8PFKK2_NJnkOIS4Q9lJ0IOId4INAmelmuqBUaU4SsWsBTSrrgoRU=s900-c-k-c0x00ffffff-no-rj" style={{height:50, width:55}}/></Link></h1>
         
        </div>
        <div className="nav-elements">
          <ul>
          
           <li>
              <Link to="/"><h5>Home</h5></Link>
            </li>
          
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet/></>
  )
}

export default Navbar