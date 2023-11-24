import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AlertContext from "../../../context/alert/alertContext";
import AuthContext from "../../../context/auth/authContext";
import Layout from "../../ui/Layout";
import { useNavigate } from "react-router-dom";

const RegisterDefault = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const { alertHandler } = alertContext;
  const { registerUserHandler, isAuthenticated, error } = authContext;

  useEffect(() => {
    if(isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = register;

  const onChangeHandler = (e) => {
    setRegister((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alertHandler("Please insert all required fields!", "danger");
    } else if (password !== confirmPassword) {
      alertHandler("Password does not match!", "danger");
    } else {
      console.log(register, " register");
      registerUserHandler({
        name: register.name,
        email: register.email,
        password: register.password,
      });
    }
  };

  return (
    <Layout maxWidth="550px">
      <Form
        onSubmit={submitHandler}
        style={{
          borderRadius: "10px",
          padding: "20px",
          color: "#fff",
          background: "#333",
        }}
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={register.name}
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={register.email}
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={register.password}
            onChange={onChangeHandler}
            minLength={6}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={register.confirmPassword}
            onChange={onChangeHandler}
            minLength={6}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Layout>
  );
};

export default RegisterDefault;
