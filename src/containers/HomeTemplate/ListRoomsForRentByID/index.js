import React, { useEffect, useState } from "react";
import { Box, Button, Container } from "@material-ui/core";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from '@mui/material/Typography';
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { actFetchListRoomsForRentByIDApi } from "./modules/actions";
import { useParams } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ListRoomsForRentByID() {
  const listRooms = useSelector(
    (state) => state.fetchListRoomsForRentByIDReducer.listRooms
  );
  const dispatch = useDispatch();
  const {_id} = useParams();

  useEffect(()=>{
    dispatch(actFetchListRoomsForRentByIDApi(
      _id
    ))
  }, [])

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const renderListRoomsForRentByID = () => {
    return listRooms?.map((rooms) => {
      return (
        <Grid item xs={12} sm={6} md={4} key={rooms._id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              // title="Room for rent at: "
              title={rooms.locationId.name}
              // subheader="September 14, 2016"
            />
            {/* <Typography variant="h6" sx={{textAlign: "center"}}>{rooms.locationId.name}-{rooms.locationId.province}-{rooms.locationId.country}</Typography> */}
            <CardMedia
              component="img"
              height="194"
              image={rooms.image}
              alt={rooms.name}
            />
            <CardContent>
              <Link to={`/detail-room/${rooms._id}`} >{rooms.name}</Link>
              <Typography variant="body2">Price: ${rooms.price}/day</Typography>
              <Typography variant="body2">
                The number of guests: {rooms.guests}
              </Typography>
              <Typography variant="body2">
                The number of bedRoom: {rooms.bedRoom}
              </Typography>
              <Typography variant="body2">
                The number of bath: {rooms.bath}
              </Typography>
            </CardContent>

            {/* <Box sx={{ textAlign: "center" }}>
              <Button
                onClick={() => dispatch()}
                color="warning"
                variant="contained"
              >
                Booking this room
              </Button>
            </Box> */}

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Description: {rooms.description}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <Box sx={{ mt: 8 }}>
      <Container maxWidth="md">
        {/* <Navbarrooms />
      <Box>
        <Typography color="textPrimary" variant="h3">
          Lists rooms Page
        </Typography>
      </Box>
      <Link to="/add-rooms" className="btn btn-info">
        Addrooms
      </Link>

      <Video />

      <SearchroomsPage /> */}
        <Box>
          <Grid container spacing={2}>
            {renderListRoomsForRentByID()}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}