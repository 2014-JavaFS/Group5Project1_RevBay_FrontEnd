import { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { revbayServer } from "../../common/revbay-server";

export default function LoginForm() {
    const [status,setStatus] = useState<number>(0);
    const emailInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)
    
    async function login() {
        console.log(emailInput.current?.value);
        console.log(passwordInput.current?.value);

        try {
            const axResp = await revbayServer.post(`auth?email=${emailInput.current?.value}&password=${passwordInput.current?.value}`)
            
            console.log(axResp.headers.userid, axResp.headers.usertype)
            console.log(axResp.status)
            setStatus(axResp.status)

        } catch(error) {
            console.error(error);
            console.error("status: " + status);
        }
    }

    return (
        <>
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
                <p>{
                    status >= 400 ? 
                    "Login failed due to invalid credentails" : 
                    "Successfully logged in"
                }</p> :
                ""
            }
            </Form>
        </>
    );
}