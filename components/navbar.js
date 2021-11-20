import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  return ( 
    <div classNameName="div">
      <nav className="navbar navbar-expand-lg fixed-top ">      
          <div className="container-fluid container">
          <Link href='/'>
          <a className="navbar-brand" >Food Make</a>
          </Link> 
          <button classNameName="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <MenuIcon />
          </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href='/blog'>
                  <a className="nav-link">Blog</a>
                  </Link>
                </li>
                <li className="nav-item">          
                  <a className="nav-link">About</a>
                </li>
              </ul>
              
            </div>
          </div>
      </nav>
    </div>
   );
}
 
export default Navbar;