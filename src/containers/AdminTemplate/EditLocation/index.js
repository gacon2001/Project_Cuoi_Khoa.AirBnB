import { Box, Container, Typography, TextField , Button} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actEditLocationApi } from "./modules/actions";
import { actFetchDetailLocationApi } from "containers/HomeTemplate/DetailLocation/modules/actions";
import { actUploadImageLocationApi } from "../DetailRoomAdmin/modules/actions";
import { useHistory } from "react-router-dom";

const imgStyle ={
  width: "100%",
  height: "100%",
  objectFit: "cover"
}

export default function EditLocation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { _id } = useParams(); 
  const detailLocation = useSelector((state) => {
    return state.fetchDetailLocationReducer.detailLocation;
  }); 

  const [state, setState] = useState({
    name: "",
    province: "",
    country: "",
    valueate : "",
  });
  useEffect(() => {
    if (detailLocation !== null) {
      setState({
        ...detailLocation,
      }); 
    }
  }, [detailLocation]);
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const updateLocation = (event) => {
    event.preventDefault();
    dispatch(actEditLocationApi(_id, state, history));
  };
  useEffect(() => {
    dispatch(actFetchDetailLocationApi(_id));
  }, []);

  //!upload img for location
  const [imgLocation, setImgLocation] = useState({
    location: "",
  });
  useEffect(()=>{
    //img ban đầu
    setImgLocation(detailLocation?.image ?? "")
  }, [detailLocation]);
  const handleChangeImageLocation = (e) => {
    if (e.target.files.length > 0) {
      const img = e.target.files[0];//lấy img từ input
      setImgLocation(window.URL.createObjectURL(img));//set lại src
      dispatch(actUploadImageLocationApi(_id, img));//dispatch về BE
    }
  };
  return (
    <Container maxWidth="sm" sx={{mt: 10}}>
      <form onSubmit={updateLocation}>
        <Box>
          <Typography variant="h4">EditLocationAdmin</Typography>
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
            label="Province"
            margin="normal"
            name="province"
            onChange={handleOnChange}
            variant="outlined"
            type="text"
            value={state.province}
          />
          <TextField
            fullWidth
            label="Country"
            margin="normal"
            name="country"
            onChange={handleOnChange}
            variant="outlined"
            type="text"
            value={state.country}
          />
          <TextField
            fullWidth
            label="Valueate"
            margin="normal"
            name="valueate"
            onChange={handleOnChange}
            variant="outlined"
            type="number"
            value={state.valueate}
          />
         <div>
          <img style={imgStyle} src={imgLocation} />
          <input type="file" onChange={handleChangeImageLocation} />
        </div>
          <Button fullWidth type="submit" color="primary" variant="contained" sx={{mt: 2}}>
            Update Location
          </Button>
        </Box>
      </form>
    </Container>
  );
}
