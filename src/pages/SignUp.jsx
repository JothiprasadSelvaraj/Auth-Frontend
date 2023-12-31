import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import '../styles/SignUP.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../../config/global";
 
const SignUP = () => { 
    const[formdata, setFormData] = useState ({
       name: "", 
       email: "",
       password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formdata, [name]:value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post(`${API_URL}/signUp/verify`,formdata);
            console.log(response);
            if(response.data === true){
                alert("Registration Link Sent To Your Email-Id");
            } else if(response.data === false){
                alert("User already exists ...");
            }
        } catch(error){
            console.error("Error Occured : ",error);
        }
    }

    return (
        <Container>

            <h1>Registeration Form</h1>

            <Form onSubmit={handleSubmit}>

                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formdata.name} onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formdata.email} onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formdata.password} onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">Resgister</Button>

                <p>Already have an account? <Link to="/login">Login</Link></p>

            </Form>

        </Container>
    )
}

export default SignUP