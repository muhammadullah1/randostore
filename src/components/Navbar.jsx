import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";
import { useItems } from '../Hooks/FetchItemsContext'; 

const Navbarr = () => {
  const itemsList = useItems();
  const { cart } = itemsList;
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar-main'>
      <Container>
        <Navbar.Brand><Link to="allitems">Rando Store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="allitems">AllItems</Link></Nav.Link>
            <Nav.Link><Link to="checkeditems">CheckedItems</Link></Nav.Link>
            <Nav.Link><Link to="additem">AddItem</Link></Nav.Link>
            <Nav.Link className='btn btn-outline-secondary px-3 mx-5 rounded-0'><Link to="checkeditems">Cart <Badge bg="text-white">{cart.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr; 