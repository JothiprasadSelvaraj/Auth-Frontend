import React from 'react';
import { Container, Button } from 'react-bootstrap';
import "../styles/Home.css";
import axios from "axios";
import API_URL from "../../config/global";
import { useEffect, useState } from 'react';

const Home = () => {

  const [res, setRes] = useState({})

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("UserInfo"))
    if(user && user.token){
      getdata(user.token);
    }
  },[]);

  const getdata = async (token) => {
    try{
      const config = {
        headers: {
          Authorization: token
        }
      }

      const response = await axios.get(`${API_URL}/home`, config);
      console.log(response);
      if(response.data === "Invalid Token"){
        alert("login again");
      } else if(response.data === "Server Busy"){
        alert("unathorised access");
      } else if(response?.status){
        setRes(response.data);
      }
    } catch(error){
      console.log(error);
    }
  }

  return (
    <Container>

        <h1>Welcome to our Website</h1>

        <p>We are here to serve you</p>

        <p>{res.name}</p>

        <Button variant="primary" type="submit">Get started</Button>

    </Container>
  )
}

export default Home
