import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListLocationApi } from "containers/HomeTemplate/SearchLocation/modules/actions";
import {actAddRoomApi} from "./modules/actions";

export default function AddRoom() {
  const dispatch = useDispatch();
  const history = useHistory();
  const listLocation = useSelector((state)=> state.fetchListLocationReducer.listLocation);

  const [state, setState] = useState({
    name: "Phòng Siêu Vip Pro",
    guests: 2,
    bedRoom: 2,
    bath: 3,
    description: "Khách Sạn này thật tuyệt vời",
    price: 100000,
    elevator: false,
    hotTub: true,
    pool: true,
    indoorFireplace: false,
    dryer: true,
    gym: false,
    kitchen: true,
    wifi: true,
    heating: true,
    cableTV: true,
    locationId: "617af2e4da03f39db76165fe"
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
    //!chỉ đc nhập số
    const handleOnChangeRating = (event) => {
      const { name, value } = event.target;
      if (isNaN(value)) {
        alert("this input must be a number.");
        return;
      }
      setState({ ...state, [name]: value });
    };

  const handleCheckBox = (event) => {
    const { name, checked } = event.target;
    setState({
      ...state,
      [name]: checked,
    });
  };

  const addRoom = (event) => {
    event.preventDefault();
    dispatch(actAddRoomApi(state, history));
  };

  const renderListLocationById = () => {
    return listLocation?.map((idLocation) => {
      return (
        <MenuItem key={idLocation._id} value={idLocation._id}>
          {idLocation.name}
        </MenuItem>
      );
    });
  };

  useEffect(()=>{
      dispatch(actFetchListLocationApi());
  }, [])

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <form onSubmit={addRoom}>
        <Box>
          <Typography color="textPrimary" variant="h4">
            Add New Job Page
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
          label="Price"
          margin="normal"
          name="price"
          value={state.price}
          onChange={handleOnChangeRating}
          variant="outlined"
          type="number"
        />
        <TextField
          fullWidth
          label="Guests"
          margin="normal"
          name="guests"
          value={state.guests}
          onChange={handleOnChangeRating}
          variant="outlined"
          type="number"
        />
        <TextField
          fullWidth
          label="Bed"
          margin="normal"
          name="bedRoom"
          value={state.bedRoom}
          onChange={handleOnChangeRating}
          variant="outlined"
          type="number"
        />
        <TextField
          fullWidth
          label="Bath"
          margin="normal"
          name="bath"
          value={state.bath}
          onChange={handleOnChangeRating}
          variant="outlined"
          type="number"
        />
        <TextField
          fullWidth
          label="Description"
          margin="normal"
          name="description"
          value={state.description}
          onChange={handleOnChange}
          variant="outlined"
          type="text"
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name="elevator"
                checked={state.elevator}
              />
            }
            label="Elevator"
            value={state.elevator}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name="hotTub"
                checked={state.hotTub}
              />
            }
            label="HotTub"
            value={state.hotTub}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name="pool"
                checked={state.pool}
              />
            }
            label="Pool"
            value={state.pool}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name="indoorFireplace"
                checked={state.indoorFireplace}
              />
            }
            label="IndoorFireplace"
            value={state.indoorFireplace}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name="dryer"
                checked={state.dryer}
              />
            }
            label="Dryer"
            value={state.dryer}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name="gym"
                checked={state.gym}
              />
            }
            label="Gym"
            value={state.gym}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name="kitchen"
                checked={state.kitchen}
              />
            }
            label="Kitchen"
            value={state.kitchen}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name="wifi"
                checked={state.wifi}
              />
            }
            label="Wifi"
            value={state.wifi}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name="heating"
                checked={state.heating}
              />
            }
            label="Heating"
            value={state.heating}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name="cableTV"
                checked={state.cableTV}
              />
            }
            label="CableTV"
            value={state.cableTV}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Location</InputLabel>
            <Select
              fullWidth
              name="locationId"
              onChange={handleOnChange}
              variant="outlined"
            >
              {renderListLocationById()}
            </Select>
          </FormControl>
        </FormGroup>
        <Button color="success" variant="contained" type="submit">
          Add Job
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
