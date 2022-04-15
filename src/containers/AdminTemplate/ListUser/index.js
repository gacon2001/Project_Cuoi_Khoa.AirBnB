import { Container , Typography} from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { actDeleteUserApi, actFetchListUserApi } from "./modules/actions";
import { styled } from "@mui/system";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import "./_listUser.scss";

import moment from "moment";

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

export default function ListUser() {
  const listUser = useSelector((state) => state.fetchListUserReducer.listUser);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(actFetchListUserApi());
  }, []);

  //!format Birthday?????????????????/
  const detailUser = useSelector((state) => {
    return state.editUserReducer.detailUser;
  }); 
  const [birthday, setBirthday] = useState({
    birthday: "",
  })
  useEffect(() => {
    if (detailUser !== null) {
      const birthdayNew = moment(detailUser.birthday).format("DD-MM-yyyy");
      setBirthday({
        ...detailUser,
        birthday: birthdayNew,
      }); 
    }
  }, [detailUser]);
  

  const renderListUser = () => {
    return listUser?.map((user) => {
      return (
        <tr key={user.id}>
          <th>{user.name}</th>
          <th>{user.email}</th>
          <th className="d-none d-md-table-cell">{user.phone}</th>
          <th className="d-none d-md-table-cell">{user.birthday}</th>
          <th className="d-none d-md-table-cell">{user.gender ? "Men" : "Women"}</th>
          <th className="d-none d-md-table-cell">{user.address}</th>
          <th className="d-none d-md-table-cell">
          {user.type}</th>
          <th className="d-none d-md-table-cell">
            <BorderColorOutlinedIcon className='button button-edit' onClick={() => history.push(`edit-user/${user._id}`)}/>
            <DeleteSweepOutlinedIcon className='button-delete'  onClick={() => dispatch(actDeleteUserApi(user._id))}/>
          </th>
        </tr>
      );
    });
  };
  return (
    <Container>
      <Typography variant="h4">ListUser</Typography>
      <Link to="/add-user-admin" className="btn btn-success">
        Thêm Quản Trị
      </Link>

      <Root sx={{ width: 500, maxWidth: "100%" }}>
        <table aria-label="custom pagination table" className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th className="d-none d-md-table-cell">Phone</th>
              <th className="d-none d-md-table-cell">Birthday</th>
              <th className="d-none d-md-table-cell">Gender</th>
              <th className="d-none d-md-table-cell">Address</th>
              <th className="d-none d-md-table-cell">Type</th>
              <th className="d-none d-md-table-cell">Action</th>
            </tr>
          </thead>
          <tbody>
          {renderListUser()}
          </tbody>
        </table>
      </Root>
    </Container>
  )
}
