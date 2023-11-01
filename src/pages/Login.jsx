import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import '../styles/Login.css';
import axios from "axios";
import API_URL from "../../config/global";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const[formdata, setFormData] = useState ({
        email: "",
        password: ""
     })

     const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formdata, [name]:value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post(`${API_URL}/login`,formdata);
        console.log(response);
        if(response.data === "Invalid Username Or Password"){
            alert("Invalid Username Or Password");
        } else if(response.data === "Server Busy"){
            alert("Server Busy")
        } else if(response?.status){
            localStorage.setItem("UserInfo",JSON.stringify(response.data));
            navigate("/home");
        }
    }

  return (
    
    <Container>

            <h1>Login Form</h1>

            <Form onSubmit={handleSubmit}>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formdata.email} onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formdata.password} onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">Login</Button>

            </Form>

        </Container>

  )
}

export default Login
