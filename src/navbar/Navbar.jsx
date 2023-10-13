import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart  } from 'react-icons/fa'; 
 import { AiOutlineHeart} from 'react-icons/ai'

import './nav.css' 
 
function Navbars() {
    const amountItem = useSelector (state => state.product.amountItem);
  const wishlist = useSelector (state => state.wishlist.wishlist); 
  return (
    <Navbar expand="lg" className="naav">
    <Container>
      <div>
        <FaShoppingCart className="me-3 fs-3 menu-icon" />

        <Navbar.Brand>Store</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0  "
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link className="EdittingNavBar" as={Link} to="/">
            Home
          </Nav.Link> 
          <Nav.Link className="EdittingNavBar" as={Link} to="/wishlist">
           Wishlist <AiOutlineHeart />{wishlist}  
          </Nav.Link>
          <Nav.Link className="EdittingNavBar" as={Link} to="/shopping">
          Cart <FaShoppingCart />{amountItem}
           </Nav.Link> 
        
        </Nav>
        <Nav.Link  className="EdittingNavBar" as={Link} to="/contact">
            Contact
          </Nav.Link>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navbars;