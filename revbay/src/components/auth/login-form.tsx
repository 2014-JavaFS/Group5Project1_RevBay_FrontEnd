import { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { revbayServer } from "../../common/revbay-server";

export default function LoginForm() {
    let userId = 0; 
    let isLoggedIn = false;

    const [status, setStatus] = useState<number>(0);
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    
    async function login() {
        console.log(emailInput.current?.value);
        console.log(passwordInput.current?.value);

        try {
            const axResp = await revbayServer.post(`auth?email=${emailInput.current?.value}&password=${passwordInput.current?.value}`);
            
            console.log(axResp.headers.userid, axResp.headers.usertype);
            userId = axResp.headers.userid

            console.log(axResp.status);
            setStatus(axResp.status);
            isLoggedIn = true;

        } catch(error) {
            setStatus(401);
            console.error(error);
        }

        if (isLoggedIn)
            navigate(`/user/${userId}`);
    }

    return (
        <>
            {!isLoggedIn ? 
            <Form>
            <Form.Group className="mb-3">
                <Form.Control id="emailInput" type="email" placeholder="Enter email" ref={emailInput}/>
                <Form.Text className="text-muted">
                    Sign in or <Link to="/signup">create an account</Link> 
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control id="passwordInput" type="password" placeholder="Password" ref={passwordInput} />
            </Form.Group>

            <Button variant="dark" onClick={login}>
                Submit
            </Button>

            {status !== 0 ? 
                <p>
                    {
                        status >= 400 ? 
                        "Invalid credentials. Please try again" : 
                        "Successfully logged in"
                    }
                </p> : ""
            }
        </Form>
            :
            ""
            }
            
        </>
    );
}