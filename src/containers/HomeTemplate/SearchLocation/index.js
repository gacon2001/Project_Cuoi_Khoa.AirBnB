import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListLocationApi } from "./modules/actions";
import { useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./_searchLocation.scss";

export default function SearchLocation() {
  const listLocation = useSelector(
    (state) => state.fetchListLocationReducer.listLocation
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const [locationID, setLocationID] = useState(``);

  const handleOnChange = (event) => {
    setLocationID(event.target.value);
  };

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
    <div className="search">
      <div className="container">
        <Box
        className="search-container"
          sx={{
            minWidth: 120,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormControl fullWidth className="input">
            <InputLabel  id="demo-simple-select-label">
              Bạn muốn đi đâu?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="Bạn muốn đi đâu?"
              value={locationID}
              // mình phải có hàm onchange để set lại state rồi cái value này mình lấy từ cái state đó đó
              onChange={handleOnChange}
            >
              {renderListLocation()}
            </Select>
          </FormControl>
          <div className="searchIcon">
            <SearchIcon
              onClick={() => history.push(`/detail-location/${locationID}`)}
            >
              Search
            </SearchIcon>
          </div>
        </Box>
      </div>
    </div>
  );
}
