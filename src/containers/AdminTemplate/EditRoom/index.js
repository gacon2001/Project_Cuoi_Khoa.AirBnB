import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import { actFetchDetailRoomApi } from "containers/HomeTemplate/DetailRoom/modules/actions";
import { actEditRoomApi } from "./modules/actions";
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
import { actFetchListLocationApi } from "containers/HomeTemplate/SearchLocation/modules/actions";

export default function EditRoom() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { _id } = useParams();
  const detailRoom = useSelector((state) => {
    return state.fetchDetailRoomsForRentReducer.detailRoom;
  });
  const listLocation = useSelector(
    (state) => state.fetchListLocationReducer.listLocation
  );
  const [state, setState] = useState({
    name: "",
    guests: "",
    bedRoom: "",
    bath: "",
    description: "",
    price: "",
    elevator: true,
    hotTub: true,
    pool: true,
    indoorFireplace: true,
    dryer: true,
    gym: true,
    kitchen: true,
    wifi: true,
    heating: true,
    cableTV: true,
    locationId: "",
  });

  useEffect(() => {
    if (detailRoom !== null) {
      setState({
        ...detailRoom,
      });
    }
  }, [detailRoom]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleCheckBox = (event) => {
    const { name, checked } = event.target;
    setState({
      ...state,
      [name]: checked,
    });
  };
  const renderListLocationById = () => {
    return listLocation?.map((location) => {
      return (
        <MenuItem  key={location._id} value={location._id}>
          {location.name}-{location.province}-{location.country}
        </MenuItem>
      );
    });
  };

  const updateRoom = (event) => {
    event.preventDefault();
    dispatch(actEditRoomApi(_id, state, history));
  };

  useEffect(() => {
    dispatch(actFetchDetailRoomApi(_id));
    dispatch(actFetchListLocationApi());
  }, []);
  
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <form onSubmit={updateRoom}>
        <Box>
          <Typography color="textPrimary" variant="h4">
            Edit Room
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
          onChange={handleOnChange}
          variant="outlined"
          type="number"
        />
        <TextField
          fullWidth
          label="Guests"
          margin="normal"
          name="guests"
          value={state.guests}
          onChange={handleOnChange}
          variant="outlined"
          type="number"
        />
        <TextField
          fullWidth
          label="Bed"
          margin="normal"
          name="bedRoom"
          value={state.bedRoom}
          onChange={handleOnChange}
          variant="outlined"
          type="number"
        />
        <TextField
          fullWidth
          label="Bath"
          margin="normal"
          name="bath"
          value={state.bath}
          onChange={handleOnChange}
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
              value={state.locationId}
              onChange={handleOnChange}
              variant="outlined"
            >
              {renderListLocationById()}
            </Select>
          </FormControl>
        </FormGroup>
        <Button color="success" variant="contained" type="submit">
          Update room
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
