import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { revbayServer } from "../../common/revbay-server";

export default function SignupForm() {
    const [status,setStatus] = useState<number>(0);

    const firstNameInput = useRef<HTMLInputElement>(null);
    const lastNameInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);

    async function createNewUser() {
        console.log(`Name: ${firstNameInput.current?.value} ${lastNameInput.current?.value}`);
        console.log(`Email: ${emailInput.current?.value}`);
        console.log(`Password: ${passwordInput.current?.value}`);

        try {
            const axResp = await revbayServer.post("users", {
                firstName: firstNameInput.current?.value,
                lastName: lastNameInput.current?.value,
                email: emailInput.current?.value,
                password: passwordInput.current?.value,
                userType: "BUYER"
            });

            setStatus(axResp.status);
            console.log(status);
            console.log(axResp.data);

        } catch (error) {
            setStatus(409);
            console.error(error);
        }
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3">
                <Row>
                    <Col>
                        <Form.Control id="firstNameInput" placeholder="First name" ref={firstNameInput} />
                    </Col>
                    <Col>
                        <Form.Control id="lastNameInput" placeholder="Last name" ref={lastNameInput}/>
                    </Col>
                </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control id="emailInput" type="email" placeholder="Enter email" ref={emailInput} />
                    <Form.Text className="text-muted">
                    Already have an account? <Link to="/login">Sign in</Link>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control id="passwordInput" type="password" placeholder="Password" ref={passwordInput} />
                </Form.Group>
                {/* 
                <Form.Group className="mb-3">
                    <Form.Text className="text-muted">
                        Are you signing up as a buyer or a seller? 
                    </Form.Text>
                                        
                    <br/>
                    <ToggleButtonGroup type="radio" name="userType" defaultValue={"buyer"}>
                        <ToggleButton id="buyer" variant="outline-dark" value={"buyer"}>
                            Buyer
                        </ToggleButton>
                        <ToggleButton id="seller" variant="outline-dark" value={"seller"}>
                            Seller
                        </ToggleButton>
                    </ToggleButtonGroup> 
                </Form.Group>
                */}

                <br/>
                <Button variant="dark" onClick={createNewUser}>
                    Create Account
                </Button>
            </Form>

            {status !== 0 ? 
                <p>
                    {
                        status >= 400 ? 
                        "That email is already registered. Please sign in to continue." : 
                        "Account successfully created."
                    }
                </p> : ""
            }
        </>
    );
}