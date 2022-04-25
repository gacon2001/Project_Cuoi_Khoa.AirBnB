import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  actEditEvaluateApi,
  actFetchDetailEvaluateApi,
} from "./modules/actions";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import moment from "moment";
import { useHistory } from "react-router-dom";

export default function EditEvaluate() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { _id } = useParams();
  const detailEvaluate = useSelector((state) => {
    return state.editEvaluateReducer.detailEvaluate;
  });

  // !edit đánh giá? => body api 27 chỉ có "content" thôi => nhưng muốn edit cả mấy cái khác thì có đc ko ?
  const [state, setState] = useState({
    content: "",

    //!các thuộc tính này ko sửa đc ????
    userId: {
      name: "",
      email: "",
      phone: "",
      birthday: "",
      gender: true,
      address: "",
      avatar: "",
    },
  });

  useEffect(() => {
    if (detailEvaluate !== null) {
      const birthdayNew = moment(detailEvaluate.birthday).format("yyyy-MM-dd");
      setState({
        ...detailEvaluate,
        birthday: birthdayNew,
      });
    }
  }, [detailEvaluate]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const updateEvaluate = (event) => {
    event.preventDefault();
    dispatch(actEditEvaluateApi(_id, state, history));
  };

  useEffect(() => {
    dispatch(actFetchDetailEvaluateApi(_id));
  }, []);
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <form onSubmit={updateEvaluate}>
        <Box>
          <Typography variant="h4">Edit Evaluate</Typography>
          <TextField
            fullWidth
            label="Content"
            margin="normal"
            name="content"
            onChange={handleOnChange}
            variant="outlined"
            type="text"
            value={state.content}
          />
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            name="name"
            onChange={handleOnChange}
            variant="outlined"
            type="text"
            value={state.userId.name}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            onChange={handleOnChange}
            variant="outlined"
            type="email"
            value={state.userId.email}
          />
          <TextField
            fullWidth
            label="Phone Number"
            margin="normal"
            name="phone"
            onChange={handleOnChange}
            variant="outlined"
            type="number"
            value={state.userId.phone}
          />
          <TextField
            fullWidth
            margin="normal"
            name="birthday"
            onChange={handleOnChange}
            variant="outlined"
            type="date"
            value={state.userId.birthday}
          />

          <FormControl fullWidth>
            <InputLabel id="gender_select_label">Gender</InputLabel>
            <Select
              labelId="gender_select_label"
              id="gender_select"
              value={state.userId.gender}
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
            value={state.userId.address}
          />
          <TextField
            fullWidth
            label="Avatar"
            margin="normal"
            name="avatar"
            onChange={handleOnChange}
            variant="outlined"
            type="filename"
            value={state.userId.avatar}
          />

          <Button
            fullWidth
            type="submit"
            color="primary"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Update User
          </Button>
        </Box>
      </form>
    </Container>
  );
}
