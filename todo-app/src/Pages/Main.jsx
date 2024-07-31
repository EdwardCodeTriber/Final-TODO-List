import React from "react";
import { Link } from "react-router-dom";
import "../Components/main.css";
import Icon from "@mui/material/Icon";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from '@mui/material/Button';

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <h1>Welcome</h1>
          <div className="profile">Your profile</div>
          <div className="number">Number Of Tasks</div>
          <div className="links">
            <Link to="/Updateprofile">Update profile</Link>
            <Link to="/Login"> Sign Out</Link>
          </div>
        </div>
        <div className="my-dash">
          <h1>My Dashboard</h1>
          <div className="task-add">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Tasks"
                inputProps={{ "aria-label": "search Tasks" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                {/*Need to add a search function*/}
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              ></IconButton>
            </Paper>

            {/* Need to add a add function */}
            <div className="add">
              <Button variant="outlined"><Link to="/add-popup">Add Task</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
