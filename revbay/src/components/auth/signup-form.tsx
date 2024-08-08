import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { revbayServer } from "../../common/revbay-server";

export default function SignupForm() {
    const [status,setStatus] = useState<number>(0);
    const navigate = useNavigate();

    const firstNameInput = useRef<HTMLInputElement>(null);
    const lastNameInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);

    let accountCreated = false;

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
            accountCreated = true;

        } catch (error) {
            setStatus(409);
            console.error(error);
        }
        
        if(accountCreated)
            navigate("/login");
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