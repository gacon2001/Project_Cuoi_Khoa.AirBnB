import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchDetailRoomApi,
  actBookingRoomApi,
  actFetchListEvaluateApi,
} from "./modules/actions";
import { useParams } from "react-router-dom";
import "./_detailRoom.scss";
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
import { Button, TextField, Box } from "@mui/material";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function DetailRoom() {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const detailRoom = useSelector(
    (state) => state.fetchDetailRoomsForRentReducer.detailRoom
  );
  //!=> Vì là ở UI người dùng khách hàng sử dụng, mọi thông tin đều là tĩnh, ko đc cập nhật hay j nên lấy detailRoom trực tiếp chấm . tới các thuộc tính của nó => Chỉ setState khi nào cần cập nhật lại một cái gì đó mà thôi (detailRoom set ở reducer ban đầu là null nên chấm . tới các thuộc tính phải có dấu ? phía trước dấm chấm .)

  const listEvaluate = useSelector(
    (state) => state.fetchDetailRoomsForRentReducer.listEvaluate
  );

  // const [state, setState] = useState({
  //   name: "",
  //   price: "",
  //   guests: "",
  //   bedRoom: "",
  //   bath: "",
  //   description: "",
  //   elevator: true,
  //   hotTub: true,
  //   pool: true,
  //   indoorFireplace: true,
  //   dryer: true,
  //   gym: true,
  //   kitchen: true,
  //   wifi: true,
  //   heating: true,
  //   cableTV: true,
  //   locationId: {
  //     name: "",
  //     province: "",
  //     country: "",
  //     valueate: "",
  //     image: "",
  //   },
  //   image: "",
  // });

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

  const [evaluate, setEvaluate] = useState({
    content: "",
    userId: {
      name: "",
      avatar: "",
    },
  });

  useEffect(() => {
    dispatch(actFetchDetailRoomApi(_id));
    dispatch(actFetchListEvaluateApi(_id));
  }, []);
  // useEffect(() => {
  //   if (detailRoom !== null) {
  //     setState(detailRoom);
  //   }
  // }, [detailRoom]);

  const renderListEvaluate = () => {
    return listEvaluate?.map((list) => {
      return (
        <div className="evaluate" key={list._id}>
          <img src={list.userId?.avatar == list.userId?.avatar ? list.userId?.avatar : <img src="https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg"/>} />
          <div>
            <p>{list.userId?.name}</p>
            <p>{list.content}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container" sx={{ mt: 10 }}>
      <h1>{detailRoom?.name}</h1>
      <div className="name">
        {/* listEvaluate là [] => .length là có thể count đc số evaluate  */}

        <p>
          {listEvaluate.length} evaluate
          <span className="p-location">
            {detailRoom?.locationId.name},{detailRoom?.locationId.province},
            {detailRoom?.locationId.country}
          </span>
        </p>

        <hr />
      </div>
      <img src={detailRoom?.image} style={{ width: "100%" }} />
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
        {renderListEvaluate()}
      </div>

      <hr/>
      <div className="img-location">
        <h3>Nơi bạn sẽ đến</h3>
        <span className="p-location">
            {detailRoom?.locationId.name},{detailRoom?.locationId.province},
            {detailRoom?.locationId.country}
          </span>
        <img src={detailRoom?.locationId.image}/>
      </div>
    </div>
  );
}
