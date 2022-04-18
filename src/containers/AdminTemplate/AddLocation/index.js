import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actAddLocationApi } from "./modules/actions";

export default function AddLocation() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    name: "Khu du lịch sinh thái Hồng Hào",
    province: "Bến tre",
    country: "viet nam",
    valueate: 8,
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleOnChangeRating = (event) => {
    const { name, value } = event.target;
    if (isNaN(value)) {
      alert("this input must be a number.");
      return;
    }
    setState({ ...state, [name]: value });
  };

  const addLocation = (event) => {
    event.preventDefault();
    dispatch(actAddLocationApi(state, history));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <form onSubmit={addLocation}>
        <Box>
          <Typography color="textPrimary" variant="h4">
            Add Location
          </Typography>
        </Box>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          name="name"
          value={state.name}
          onChange={handleOnChange}
          variant="outlined"
          type="text"
        />
        <TextField
          fullWidth
          label="Province"
          margin="normal"
          name="province"
          value={state.province}
          onChange={handleOnChange}
          variant="outlined"
          type="text"
        />
        <TextField
          fullWidth
          label="Country"
          margin="normal"
          name="country"
          value={state.country}
          onChange={handleOnChange}
          variant="outlined"
          type="text"
        />
        <TextField
          fullWidth
          label="Valueate"
          margin="normal"
          name="valueate"
          value={state.valueate}
          onChange={handleOnChangeRating}
          variant="outlined"
          type="number"
        />
        <Button color="success" variant="contained" type="submit">
          Add
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={() => history.push("/list-user")}
        >
          Cancel
        </Button>
      </form>
    </Container>
  );
}
