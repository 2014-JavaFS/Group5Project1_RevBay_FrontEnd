import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MyUserContext } from "../common/userContext";
<Nav.Link as={Link} to="/about">About</Nav.Link>

export default function NavigationBar() {
    const {userIdContext} = useContext(MyUserContext)
    let pathToUserCart = "/cart/" + userIdContext;

    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark" fixed="top">
            <Container>
            <Navbar.Brand href="/">RevBay</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/login">Profile</Nav.Link>
                <Nav.Link as={Link} to="/products">Product</Nav.Link>
                <Nav.Link as={Link} to={pathToUserCart}>Cart</Nav.Link>
                <Nav.Link as={Link} to="/transaction/Checkout">Checkout</Nav.Link>
                <Nav.Link as={Link} to="/transaction/History">History</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        </>
    );
}