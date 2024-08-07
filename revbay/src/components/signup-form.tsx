import { Button, Col, Form, Row, Tab, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SignupForm() {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                <Row>
                    <Col>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    Already have an account? <Link to="/login">Sign in</Link>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUserType">
                    <Form.Text className="text-muted">
                        Are you signing up as a buyer or a seller? 
                    </Form.Text>
                    <br/>
                    <ToggleButtonGroup type="radio" name="userType" defaultValue={1}>
                        <ToggleButton variant="outline-dark" id="buyer" value={1}>
                            Buyer
                        </ToggleButton>
                        <ToggleButton variant="outline-dark" id="seller" value={2}>
                            Seller
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Form.Group>
                <br/>
                <Button variant="dark" type="submit">
                    Create Account
                </Button>
            </Form>
        </>
    );
}