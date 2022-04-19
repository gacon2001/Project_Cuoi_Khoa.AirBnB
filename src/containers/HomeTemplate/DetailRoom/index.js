import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDetailRoomApi } from "./modules/actions";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

const Div =  styled.div`
color: red;

`

export default function DetailRoom() {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const detailRoom = useSelector(
    (state) => state.fetchDetailRoomsForRentReducer.detailRoom
  );
  const [state, setState] = useState({
    name: "",
    price: "",
    guests: "",
    bedRoom: "",
    bath: "",
    description: "",
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
    locationId: {
      name: "",
      province: "",
      country: "",
      valueate: "",
      image: "",
    },
    image: "",
  });

  useEffect(() => {
    dispatch(actFetchDetailRoomApi(_id));
  }, []);
  useEffect(()=>{
    setState(detailRoom)
  }, [])

  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <Box>
        <Div>{state.name}</Div>
        <hr />
        <img src={state.image} style={{ width: "100%" }} />
      </Box>
    </Container>
  );
}
