import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { actFetchDetailLocationApi } from "./modules/actions";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

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

export default function DetailLocation() {
  const detailLocation = useSelector(
    (state) => state.fetchDetailLocationReducer.detailLocation
  );
  const dispatch = useDispatch();
  const { _id } = useParams();
  const history = useHistory();

  const [state, setState] = useState({
    name: "",
    province: "",
    country: "",
    valueate: "",
    image: "",
  });

  useEffect(() => { 
    dispatch(actFetchDetailLocationApi(_id));
  }, []);
  //phải dispatch actFetch trước mới set lại state mỗi khi detailLocation thay đổi
  useEffect(() => {
    if (detailLocation) {
      setState(detailLocation);
    }
  }, [detailLocation]);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return(
    <Container maxWidth="md">
      <Grid item xs={12} sm={6} md={4} key={state._id}>
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
            // title={state.name}
            subheader={state.province}
          />
          <CardMedia
            component="img"
            height="194"
            image={state.image}
            alt={state.name}
          />
          <CardContent>
            <Typography variant="body2">
              {state.name}-{state.province}-{state.country}
            </Typography>
            <Typography variant="body2">Valueate: {state.valueate}</Typography>
          </CardContent>

          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Button
              onClick={() =>
                history.push(`/list-rooms-for-rent-by-id/${state._id}`)
              }
              color="success"
              variant="contained"
            >
              List Rooms For Rent
            </Button>
          </Box>

          {/* <CardActions disableSpacing>
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
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
            </CardContent>
          </Collapse> */}
        </Card>
      </Grid>
    </Container>
    
  );
}
