import React, { useState } from "react";
import { Form, Col, Row, InputGroup, Button } from "react-bootstrap";
import "../Project/allcssproject/registation.css";
import axios from "axios";

export const Registation = () => {
  const [validated, setValidated] = useState(false);
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    UserName: "",
    CityName: "",
    StateName: "",
    ZipName: 0,
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    const datacopy = { ...data };
    datacopy[name] = value;
    setData(datacopy);
    // console.log("copydata", datacopy);
  };

  const registationPostdata = async () => {
    // console.log(
    //   "lenght",
    //   data.FirstName.trim().length,
    //   data.LastName.trim().length,
    //   data.UserName.trim().length,
    //   data.CityName.trim().length,
    //   data.StateName.trim().length,
    //   data.ZipName.length
    // );
    if (
      data.FirstName.trim().length == 0 ||
      data.LastName.trim().length == 0 ||
      data.UserName.trim().length == 0 ||
      data.CityName.trim().length == 0 ||
      data.StateName.trim().length == 0 ||
      data.ZipName.length == 0
    ) {
      alert("please fill the data");
      return;
    }
    console.log("data",data)
    try {
     
      const response = await axios.post(
        "http://localhost:3000/reistration",
        data

      );
      // console.log("alldata",response)
      if(response.status===201){
        alert("data sucessfully sumited")
      }
    }
     catch (e) {
      console.log("hyyu", e);
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="regi">
      <Form noValidate validated={validated} onSubmit={handleSubmit}> 
      
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              name="FirstName"
              value={data.FirstName}
              placeholder="First name"
              onChange={handlechange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              name="LastName"
              value={data.LastName}
              placeholder="Last name"
              onChange={handlechange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                name="UserName"
                value={data.UserName}
                onChange={handlechange}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              required
              name="CityName"
              value={data.City}
              onChange={handlechange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              required
              name="StateName"
              value={data.StateName}
              onChange={handlechange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Create Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create Password"
              required
              name="ZipName"
              value={data.ZipName}
              onChange={handlechange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit" onClick={registationPostdata}>
          Registration
        </Button>
      </Form>
     
    </div>
  );
};
