import { Button, Container, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { actAddEvaluateApi } from "./modules/actions";

export default function AddEvaluate() {
  const dispatch = useDispatch();
  const history =  useHistory();
  const { _id } = useParams();
  
  const [state, setState] = useState({
    content: "chổ ở như qq",
    // userId : {
    //     name: "",
    //     avatar: "https://airbnb.cybersoft.edu.vn/public/images/avatar/1637912375674_0e25fd2198c569dc4c406a510b0a59c3.jpg"}
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const addEvaluate = (event)=>{
    event.preventDefault();
    dispatch(actAddEvaluateApi(_id, state, history));
  }

  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <form onSubmit={addEvaluate}>
        <TextField
          fullWidth
          label="Content"
          margin="normal"
          name="content"
          value={state.content}
          onChange={handleOnChange}
          type="text"
          variant="outlined"
        />
        {/* <TextField
        fullWidth
        label="Name"
        margin="normal"
        name="name"
        value={state.name}
        onChange={handleOnChange}
        type="text"
        variant="outlined"
      />
      <TextField
        fullWidth
        // label="Avatar"
        margin="normal"
        name="avatar"
        value={state.avatar}
        onChange={handleOnChange}
        type="file"
        variant="outlined"
      /> */}
        <Button
          color="primary"
          variant="contained"
          sx={{ textAlign: "center" }}
        >
          Add Evaluate
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={() => history.push(`/detail-room-admin/${_id}`)}
        >
          Cancel
        </Button>
      </form>
    </Container>
  );
}
