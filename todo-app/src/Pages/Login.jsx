import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components/Login.css";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";

const Login = () => {
  const navigate = useNavigate();
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      alert("username required");
    } else if (password === "") {
      alert("Email required");
    } else {
      alert("Successful login");
      navigate("/Main");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          height={400}
          width={400}
          margin="auto"
          my={4}
          flex-direction="column"
          justifyContent={"center"}
          alignItems="center"
          Background="#fafafa"
          gap={4}
          p={2}
          sx={{ border: "2px solid grey", background: "#fafafa" }}
        >
          <h1>Login</h1>
          <br />

          <div className="TextField">
            <TextField
              id="input-with-icon-textfield"
              label="Account"
              name={username}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <br />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              name={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>

          <p>
            Don't have an account? <Link to="/Register"> Sign up</Link>
          </p>
          <div className="links">
            <br />

            <Button variant="outlined" type="submit">
              Sign In
            </Button>
          </div>
        </Box>
      </form>
    </>
  );
};

export default Login;
