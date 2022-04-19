import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actAddUserApi } from "./modules/actions";

import { Container, Typography, Box, TextField } from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useHistory } from "react-router-dom";

export default function AddUserAdmin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    type: "ADMIN",
    address: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const addUser = (event) => {
    event.preventDefault();
    dispatch(actAddUserApi(state, history));
  };
  return (
    <Container maxWidth="sm" sx={{mt: 10}} >
      <form onSubmit={addUser}>
        <Box>
          <Typography variant="h4">AddUserAdmin</Typography>
        </Box>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          name="name"
          onChange={handleOnChange}
          variant="outlined"
          type="text"
        />
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          name="email"
          onChange={handleOnChange}
          variant="outlined"
          type="email"
        />
        <TextField
          fullWidth
          label="Password"
          margin="normal"
          name="password"
          onChange={handleOnChange}
          variant="outlined"
          type="password"
        />
        <TextField
          fullWidth
          label="Phone Number"
          margin="normal"
          name="phone"
          onChange={handleOnChange}
          variant="outlined"
          type="number"
        />
        <TextField
          fullWidth
          margin="normal"
          name="birthday"
          onChange={handleOnChange}
          variant="outlined"
          type="date"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
            name="gender"
            value={state.gender}
            onChange={handleOnChange}
          >
            <MenuItem value={true}>Men</MenuItem>
            <MenuItem value={false}>Women</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Type"
          margin="normal"
          name="type"
          onChange={handleOnChange}
          variant="outlined"
          type="text"
          defaultValue="ADMIN"
        />
        <TextField
          fullWidth
          label="Address"
          margin="normal"
          name="address"
          onChange={handleOnChange}
          variant="outlined"
          type="text"
        />

        <button className="btn btn-primary">Add User</button>
        <Link to="/list-user" className="btn btn-danger" style={{marginLeft: 382}}>
          Cancel
        </Link>
      </form>
    </Container>
  );
}
