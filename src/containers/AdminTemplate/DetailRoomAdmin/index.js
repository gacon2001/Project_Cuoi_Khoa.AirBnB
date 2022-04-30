import React, { useEffect, useState } from "react";
import "containers/AdminTemplate/ListUser/_listUser.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchDetailRoomApi,
  actBookingRoomApi,
  actFetchListEvaluateApi,
} from "containers/HomeTemplate/DetailRoom/modules/actions";
import {
  actUploadImageRoomApi,
} from "./modules/actions";
import { useParams } from "react-router-dom";
import "containers/HomeTemplate/DetailRoom/_detailRoom.scss";
import CellWifiIcon from "@mui/icons-material/CellWifi";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ElevatorOutlinedIcon from "@mui/icons-material/ElevatorOutlined";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import StadiumOutlinedIcon from "@mui/icons-material/StadiumOutlined";
import DryOutlinedIcon from "@mui/icons-material/DryOutlined";
import RouterOutlinedIcon from "@mui/icons-material/RouterOutlined";
import SoupKitchenOutlinedIcon from "@mui/icons-material/SoupKitchenOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import { Button, TextField, Box, Container } from "@mui/material";
import { Typography } from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useHistory } from "react-router-dom";
import { actDeleteEvaluateApi } from "containers/HomeTemplate/DetailRoom/modules/actions";

export default function DetailRoomAdmin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { _id } = useParams();
  const detailRoom = useSelector(
    (state) => state.fetchDetailRoomsForRentReducer.detailRoom
  );
  const listEvaluate = useSelector(
    (state) => state.fetchDetailRoomsForRentReducer.listEvaluate
  );

  //!upload img for room
  const [imgRoom, setImgRoom] = useState({
    room: "",
  });
  useEffect(() => {
    setImgRoom(detailRoom?.image ?? "");
    // Chỗ này là mình lấyy img mặc định thôi
    // ý là hàm này nè, mình lấy img từ api trả về để show lên UI vào lần đầu thôi á
    // còn dispatch thì nên dispatch ở chỗ khác.
    //
  }, [detailRoom]);
  const handleOnChangeImageRoom = (event) => {
    // khi người dùng thay đổi hình ảnh
    if (event.target.files.length > 0) {
      const img = event.target.files[0]; // lấy hình ảnh ra từ input
      setImgRoom(window.URL.createObjectURL(img)); // set lại src của ảnh
      //mỗi lần mình chọn ảnh thì src của ảnh thay đổi => phải thay đổi state để react cập nhật lại hình mới
      dispatch(actUploadImageRoomApi(_id, img)); // dispatch action lên để gửi ảnh về backend,mình xử lý v á :V
    }
  };
  const [booking, setBooking] = useState({
    checkIn: "",
    checkOut: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setBooking({
      ...booking,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(actFetchDetailRoomApi(_id));
    dispatch(actFetchListEvaluateApi(_id));
  }, []);

  const renderListEvaluate = () => {
    return listEvaluate?.map((list, index) => {
      return (
        <div className="evaluate-button">
          <div className="list-evaluate" key={index}>
            <img
              src={
                // ?? : check có hình thì lấy luôn
                list.userId?.avatar ??
                "https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg"
              }
            />
            <div>
              <p>{list.userId?.name}</p>
              <p>{list.content}</p>
            </div>
          </div>
          <div>
            <BorderColorOutlinedIcon
              className="button button-edit"
              onClick={() => history.push(`/edit-evaluate/${list._id}`)}
            />
            <DeleteSweepOutlinedIcon
              className="button-delete"
              onClick={() => dispatch(actDeleteEvaluateApi(list._id))}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <h1>{detailRoom?.name}</h1>
      <div className="name">
        <p>
          {listEvaluate.length} evaluate
          <span className="p-location">
            {detailRoom?.locationId.name},{detailRoom?.locationId.province},
            {detailRoom?.locationId.country}
          </span>
        </p>

        <hr />
      </div>

      {/* upload image room???? */}
      <div>
        <img
          // src={detailRoom?.image}
          src={imgRoom}
          style={{ width: "100%", cursor: "pointer" }}
        />
        {/* set Img */}
        <input onChange={handleOnChangeImageRoom} type="file" />
      </div>

      <hr />

      <div className="container infor-room">
        <div className="row">
          <div className="col-6 col1">
            <h5>Information of this room:</h5>
            <p>
              {detailRoom?.guests} khách - {detailRoom?.bedRoom} giường ngủ -{" "}
              {detailRoom?.bath}
              phòng tắm
            </p>
            <hr />
            <ul>
              <li>
                {detailRoom?.wifi ? (
                  <span>
                    <CellWifiIcon />
                    Wifi
                  </span>
                ) : (
                  ""
                )}
              </li>
              <li>
                {detailRoom?.elevator ? (
                  <span>
                    <ElevatorOutlinedIcon />
                    Elevator
                  </span>
                ) : (
                  ""
                )}
              </li>
              <li>
                {detailRoom?.hotTub ? (
                  <span>
                    <OutdoorGrillOutlinedIcon />
                    HotTub
                  </span>
                ) : (
                  ""
                )}
              </li>
              <li>
                {detailRoom?.pool ? (
                  <span>
                    <PoolOutlinedIcon />
                    Pool
                  </span>
                ) : (
                  ""
                )}
              </li>
              <li>
                {detailRoom?.indoorFireplace ? (
                  <span>
                    <StadiumOutlinedIcon />
                    IndoorFireplace
                  </span>
                ) : (
                  ""
                )}
              </li>
              <li>
                {detailRoom?.dryer ? (
                  <span>
                    <DryOutlinedIcon />
                    Dryer
                  </span>
                ) : (
                  ""
                )}
              </li>
              <li>
                {detailRoom?.gym ? (
                  <span>
                    <FitnessCenterOutlinedIcon />
                    Gym
                  </span>
                ) : (
                  ""
                )}
              </li>
              <li>
                {detailRoom?.kitchen ? (
                  <span>
                    <SoupKitchenOutlinedIcon />
                    Kitchen
                  </span>
                ) : (
                  ""
                )}
              </li>
              <li>
                {detailRoom?.cableTV ? (
                  <span>
                    <RouterOutlinedIcon />
                    CableTV
                  </span>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
          <div className="col-6 col2">
            <div className="container">
              <p>
                <span>${detailRoom?.price}</span>/night
              </p>
              <div>
                <div className="row">
                  <div className="col-6">
                    <TextField
                      fullWidth
                      label="CheckIn"
                      margin="normal"
                      name="checkIn"
                      onChange={handleOnChange}
                      variant="outlined"
                      type="date"
                    />
                  </div>
                  <hr />
                  <div className="col-6">
                    <TextField
                      fullWidth
                      label="CheckOut"
                      margin="normal"
                      name="checkOut"
                      onChange={handleOnChange}
                      variant="outlined"
                      type="date"
                    />
                  </div>
                </div>
              </div>
              {/* vd: {checkIn: 09/04/2022, checkOut: 1/4/2022} */}
              <button
                onClick={() =>
                  dispatch(actBookingRoomApi({ roomId: _id, ...booking }))
                }
              >
                Book this room
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div>{detailRoom?.description}</div>
      <hr />

      {/* evaluate */}
      <div>
        <div className="evaluate">
          <Rating
            name="text-feedback"
            value={listEvaluate.length}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon
                style={{ opacity: 0.55, color: "yellowgreen" }}
                fontSize="inherit"
              />
            }
          />
          <Button
            color="success"
            variant="contained"
            onClick={() => history.push(`/add-evaluate/${_id}`)}
          >
            Add Evaluate
          </Button>
        </div>
        {renderListEvaluate()}
      </div>

      <hr />
      <div className="img-location">
        <h3>Nơi bạn sẽ đến</h3>
        <span className="p-location">
          {detailRoom?.locationId.name},{detailRoom?.locationId.province},
          {detailRoom?.locationId.country}
        </span>
        <div>
          <img src={detailRoom?.locationId.image} />
        </div>
      </div>
    </Container>
  );
}
