import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavigationBar() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark" fixed="top">
            <Container>
            <Navbar.Brand href="/">RevBay</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/user-profile">Profile</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        </>
    );
}