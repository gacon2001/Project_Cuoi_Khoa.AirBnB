import { Box, Container, Typography, TextField , Button} from "@material-ui/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actEditUserApi, actFetchDetailUserApi } from "./modules/actions";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function EditUserAdmin() {
  const dispatch = useDispatch();
  const { _id } = useParams(); 
  const detailUser = useSelector((state) => {
    return state.editUserReducer.detailUser;
  }); 
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    gender: true,
    address: "",
    // type : "ADMIN", -> chỉ có quyền edit ADMIN
  });

  useEffect(() => {
    if (detailUser !== null) {
      const birthdayNew = moment(detailUser.birthday).format("yyyy-MM-DD");
      setState({
        ...detailUser,
        birthday: birthdayNew,
      }); 
    }
  }, [detailUser]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    console.log(value)
    setState({
      ...state,
      [name]: value,
    });
  };

  const updateUser = (event) => {
    event.preventDefault();
    dispatch(actEditUserApi(_id, state));
  };

  useEffect(() => {
    dispatch(actFetchDetailUserApi(_id));
  }, []);
  return (
    <Container maxWidth="sm">
      <form onSubmit={updateUser}>
        <Box>
          <Typography variant="h4">EditUserAdmin</Typography>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            name="name"
            onChange={handleOnChange}
            variant="outlined"
            type="text"
            value={state.name}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            onChange={handleOnChange}
            variant="outlined"
            type="email"
            value={state.email}
          />
          <TextField
            fullWidth
            label="Phone Number"
            margin="normal"
            name="phone"
            onChange={handleOnChange}
            variant="outlined"
            type="number"
            value={state.phone}
          />
          <TextField
            fullWidth
            margin="normal"
            name="birthday"
            onChange={handleOnChange}
            variant="outlined"
            type="date"
            value={state.birthday}
          />

          <FormControl fullWidth>
            <InputLabel id="gender_select_label">Gender</InputLabel>
            <Select
              labelId="gender_select_label"
              id="gender_select"
              value={state.gender}
              label="Gender"
              name="gender"
              onChange={handleOnChange}
            >
              <MenuItem value={true}>Men</MenuItem>
              <MenuItem value={false}>Women</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Address"
            margin="normal"
            name="address"
            onChange={handleOnChange}
            variant="outlined"
            type="text"
            value={state.address}
          />

          <Button fullWidth type="submit" color="primary" variant="contained" sx={{mt: 2}}>
            Update User
          </Button>
        </Box>
      </form>
    </Container>
  );
}
