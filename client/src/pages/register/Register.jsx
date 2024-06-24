import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Button, TextField, Alert } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import CInput from "../../components/input/CInput";
import Mobileotp from "../EligibilityPage/Mobileotp";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
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

    if (!formData.username) {
      validationErrors.username = "Please enter username";
    }
    if (!formData.email) {
      validationErrors.email = "Please enter email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Please enter valid email";
    }
    if (!formData.password) {
      validationErrors.password = "Please Enter password";
    } else if (formData.password.length < 6) {
      validationErrors.password =
        "Password should contain at least 6 characters";
    }

    if (formData.confirmpassword !== formData.password) {
      validationErrors.confirmpassword = "The password is not matching";
    }

    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:3001/register", formData)
        .then((data) => {
          console.log(data);
          navigate("/login");
          alert("Form has been submitted successfully");
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
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Registration Form
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Username"
                name="username"
                onChange={handleInput}
                value={formData.username}
              />
              {error.username && (
                <FormHelperText sx={{ color: "red" }}>
                  {error.username}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                name="email"
                onChange={handleInput}
                value={formData.email}
              />
              {error.email && (
                <FormHelperText sx={{ color: "red" }}>
                  {error.email}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                name="password"
                type="password"
                onChange={handleInput}
                value={formData.password}
              />
              {error.password && (
                <FormHelperText sx={{ color: "red" }}>
                  {error.password}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Confirm Password"
                name="confirmpassword"
                type="password"
                onChange={handleInput}
                value={formData.confirmpassword}
              />
              {error.confirmpassword && (
                <FormHelperText sx={{ color: "red" }}>
                  {error.confirmpassword}
                </FormHelperText>
              )}
            </Grid>
            <Grid>
              <Mobileotp />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Already have an account? <Link to="/Login">Login</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
