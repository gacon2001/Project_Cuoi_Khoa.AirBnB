import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListLocationApi } from "./modules/actions";
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { useHistory, useParams } from "react-router-dom";
import {actFetchDetailLocationApi} from "containers/HomeTemplate/DetailLocation/modules/actions";

export default function SearchLocation() {
  const listLocation = useSelector(
    (state) => state.fetchListLocationReducer.listLocation
  );
  const history = useHistory();
  const dispatch= useDispatch();
  const [locationID, setLocationID] = useState({});

  const handleOnChange = (event) => {
    setLocationID(event.target.value);
  }

  useEffect(()=>{
    dispatch(actFetchListLocationApi());
  }, []);


  const renderListLocation = () => {
    return listLocation?.map((idLocation) => {
      return <MenuItem key={idLocation._id} value={idLocation._id}>{idLocation.name} - {idLocation.province} - {idLocation.country}</MenuItem>;
    });
  };

  return (
    <Container>
      <Box sx={{ minWidth: 120, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Bạn muốn đi đâu?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            // id="demo-simple-select"
            id="_id"
            label="Bạn muốn đi đâu?"
            value={locationID} //này ko có gtri ấy H
            // tui chưa hiểu lắm, mình để mặc định chuỗi rỗng cũng đâu sao đâu đúng ko => mà để vào thì ko lấy đc gtri mà mình chọn trên UI á H 
            // chắc này Vân phải xem lại controlled components r, đúng là nó ko cập nhật lại
            // mình phải có hàm onchange để set lại state rồi cái value này mình lấy từ cái state đó đó
            onChange={handleOnChange}
          >
            {renderListLocation()}
          </Select>
        </FormControl>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>{history.push(`/detail-location/${locationID}`)}}>Search</button>
        {/* <YoutubeSearchedForIcon /> */}
      </Box>
    </Container>
  );
}
