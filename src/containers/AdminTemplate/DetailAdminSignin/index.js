import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Typography } from "@material-ui/core";
import { actFetchDetailUserApi } from "../EditUserAdmin/modules/actions";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {_id} = useParams();
  const detailUser = useSelector((state)=> state.editUserReducer.detailUser);
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    gender: true,
    address: "",
  })

  //!fetch detail của admin signin vào -> là thông tin tĩnh, mình onlick vào button edit mới sửa thì đâu cần dùng state??

  //nếu mỗi admin đăng nhập khác nhau thì fetch detail khác nhau nên phải check thêm detailUser thay đổi thì set lại state?????
  useEffect(()=>{
    if (detailUser)
      setState(detailUser);
  }, [detailUser]);

  useEffect(() => {
    dispatch(actFetchDetailUserApi(_id));
  }, []);
  
 
  return (
    <Container maxWidth="sm" sx={{mt: 10}}>
      <Typography variant="h4">Detail Admin Signin</Typography>
          <div className="col-sm-1-12">
            <div className="card text-left">
              <div className="card-body">
                <button className="btn btn-warning" onClick={()=>history.push(`/edit-user/${_id}`) }>Edit</button>
                <hr />
                <div>
                  <ul>
                    <li>
                      <span>Name: {state.name}</span>
                    </li>
                    <li>Email: {state.email}</li>
                    <li>Phone: {state.phone}</li>
                    <li>Birthday: {state.birthday}</li>
                    <li>Gender: {state.gender ? "Men" : "Women"}</li>
                    <li>Address: {state.address}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </Container>
  );
}
