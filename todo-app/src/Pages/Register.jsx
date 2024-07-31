import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";

const Register = () => {
  const navigate = useNavigate();
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (username === "") {
      alert("username required");
    } else if (password === "") {
      alert("Email required");
    }else{
      alert("Registered Successfully");
      navigate("/Login");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <Box
        height={400}
        width={400}
        margin="auto"
        my={4}
        flex-direction="column"
        alignItems="center"
        Background="#fafafa"
        gap={4}
        p={2}
        sx={{ border: "2px solid grey", background: "#fafafa" }}
      >
        <h1>Register</h1>
        <br />
        <TextField
          id="input-with-icon-textfield"
          label="Account"
          name={username}
          type="email"
          onChange={e => setEmail(e.target.value)}
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
          type="text"
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Confirm Password"
          variant="standard"
          name={confirmpassword}
          type="text"
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <p></p>

        <div className="links">
          <br />
          <Button variant="outlined" type="submit">
            Register
          </Button>
          <Link to="/Login"> Cancle</Link>
        </div>
      </Box>
      </form>
    </>
  );
};

export default Register;
