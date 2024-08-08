import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavigationBar() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark" fixed="top">
            <Container>
            <Navbar.Brand href="/">RevBay</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/login">Profile</Nav.Link>
                <Nav.Link href="/products">Product</Nav.Link>
                <Nav.Link href="/cart">Cart</Nav.Link>
                <Nav.Link href="/transaction/Checkout">Checkout</Nav.Link>
                <Nav.Link href="/transaction/History">History</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        </>
    );
}