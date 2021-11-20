import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  return ( 
    <div className="div">
      <nav class="navbar navbar-expand-lg fixed-top ">      
          <div class="container-fluid container">
          <Link href='/'>
          <a class="navbar-brand" >Food Make</a>
          </Link> 
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <MenuIcon />
          </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <Link href='/blog'>
                  <a class="nav-link">Blog</a>
                  </Link>
                </li>
                <li class="nav-item">          
                  <a class="nav-link">About</a>
                </li>
              </ul>
              
            </div>
          </div>
      </nav>
    </div>
   );
}
 
export default Navbar;