import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.email) {
      validationErrors.email = "Please enter email";
    }
    if (!formData.password) {
      validationErrors.password = "Please enter password";
    }
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:3001/login", formData)
        .then((data) => {
          if (data.data === "Login Successful") {
            alert("Login successful");
            navigate("/");
          } else if (data.data === "Invalid Credentials") {
            alert("Invalid username or password");
          } else if (data.data === "user not found") {
            alert("User not found, please register");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "background.default",
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login Form
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            name="email"
            onChange={handleInput}
            value={formData.email}
            autoComplete="off"
            margin="normal"
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            onChange={handleInput}
            value={formData.password}
            autoComplete="off"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Submit
          </Button>
        </form>
        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          Don't have an account? <Link to="/register">Register</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
