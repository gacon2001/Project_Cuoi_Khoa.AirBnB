import { Button, Container , Typography} from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { styled } from "@mui/system";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import { actFetchListLocationApi } from 'containers/HomeTemplate/SearchLocation/modules/actions';
import { actDeleteLocationApi } from 'containers/HomeTemplate/SearchLocation/modules/actions';


const grey = {
  200: "#E0E3E7",
  800: "#2D3843",
};

const Root = styled("div")(
    ({ theme }) => `
      table {
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        border-collapse: collapse;
        width: 100%;
      }
    
      td,
      th {
        border: 2px solid ${
          theme.palette.mode === "dark" ? grey[800] : grey[200]
        };
        text-align: left;
        padding: 6px;
      }
    
      thead {
        background-color: pink;
      `
  );

export default function ManageLocationsAndRooms() {
    const listLocation= useSelector((state) => state.fetchListLocationReducer.listLocation);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(actFetchListLocationApi());
  }, []);
  
  
  const renderListLocations = () => {
    return listLocation?.map((id) => {
      return (
        <tr key={id._id}>
          <th><Link to={`/list-rooms/${id._id}`}>{id.name}</Link></th>
          <th>{id.province}</th>
          <th className="d-none d-md-table-cell">{id.country}</th>
          <th className="d-none d-md-table-cell">{id.valueate}</th>
          <th className="d-none d-md-table-cell">
              <img src={id.image} width="100%" height="100%"/> </th>
          <th className="d-none d-md-table-cell">
            <BorderColorOutlinedIcon className='button button-edit' onClick={() => history.push(`edit-location/${id._id}`)}/>
            <DeleteSweepOutlinedIcon className='button-delete'  onClick={() => dispatch(actDeleteLocationApi(id._id))}/>
          </th>
        </tr>
      );
    });
  };
  return (
    <Container maxWidth="md" sx={{mt: 10}}>
      <Typography variant="h4">ListLocation</Typography>
      <Button color='success' variant='contained' onClick={()=> history.push('/add-location')}>Add Location</Button>
      <Root sx={{ width: 500, maxWidth: "100%" }}>
        <table aria-label="custom pagination table" className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Province</th>
              <th className="d-none d-md-table-cell">Country</th>
              <th className="d-none d-md-table-cell">Valueate</th>
              <th className="d-none d-md-table-cell">Image</th>
              <th className="d-none d-md-table-cell">Action</th>
            </tr>
          </thead>
          <tbody>
          {renderListLocations()}
          </tbody>
        </table>
      </Root>
    </Container>
  )}
