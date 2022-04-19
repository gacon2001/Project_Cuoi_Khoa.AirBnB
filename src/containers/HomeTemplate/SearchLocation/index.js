import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListLocationApi } from "./modules/actions";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SearchLocation() {
  const listLocation = useSelector(
    (state) => state.fetchListLocationReducer.listLocation
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const [locationID, setLocationID] = useState(``);

  const handleOnChange = (event) => {
    setLocationID(event.target.value);
  }

  useEffect(() => {
    dispatch(actFetchListLocationApi());
  }, []);

  const renderListLocation = () => {
    return listLocation?.map((idLocation) => {
      return (
        <MenuItem key={idLocation._id} value={idLocation._id}>
          {idLocation.name} - {idLocation.province} - {idLocation.country}
        </MenuItem>
      );
    });
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minWidth: 120,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Bạn muốn đi đâu?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Bạn muốn đi đâu?"
            value={locationID}
            // mình phải có hàm onchange để set lại state rồi cái value này mình lấy từ cái state đó đó
            onChange={handleOnChange}
          >
            {renderListLocation()}
          </Select>
        </FormControl>
        <Link
          className="btn btn-outline-success my-2 my-sm-0"
          to={`/detail-location/${locationID}`}
        >
          Search
        </Link>
        {/* <YoutubeSearchedForIcon /> */}
      </Box>
    </Container>
  );
}
