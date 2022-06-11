import React, { useState ,useEffect} from "react";
import { Button, Form } from "react-bootstrap";
import "../Project/allcssproject/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const[data,setData]=useState([])

  let navigate = useNavigate();

  const apidata = async () => {
    const response = await axios.get("http://localhost:3000/reistration");
   setData(response.data)
  };
  useEffect(() => {
    apidata();
  }, []);
  const logindata = () => {
    const temp = data.filter(
      (it, i) => it.UserName === user && it.ZipName === password
      
    );
    console.log("check",temp)
    temp.length > 0 ? navigate("/Contact") : alert("un credential");
  };
  return (
    <div className="main">
      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter UseName"
            id="id"
            onChange={(e) => setUser(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group className="mb-6" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Enter Password"
            id="pass"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button id="butn" variant="primary" type="submit" onClick={logindata}>
          LOG-IN
        </Button>
      </Form>
    </div>
  );
};
