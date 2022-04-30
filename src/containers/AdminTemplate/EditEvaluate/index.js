import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  actEditEvaluateApi,
  actFetchDetailEvaluateApi,
} from "./modules/actions";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import moment from "moment";
import { useHistory } from "react-router-dom";

export default function EditEvaluate() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { _id } = useParams();
  const detailEvaluate = useSelector((state) => {
    return state.editEvaluateReducer.detailEvaluate;
  });

  const [state, setState] = useState({
    content: "",
  });

  useEffect(() => {
    if (detailEvaluate !== null) {
      setState({
        ...detailEvaluate,
      });
    }
  }, [detailEvaluate]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const updateEvaluate = (event) => {
    event.preventDefault();
    dispatch(actEditEvaluateApi(_id, state, history));
  };

  useEffect(() => {
    dispatch(actFetchDetailEvaluateApi(_id));
  }, []);
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <form onSubmit={updateEvaluate}>
        <Box>
          <Typography variant="h4">Edit Evaluate</Typography>
          <TextField
            fullWidth
            label="Content"
            margin="normal"
            name="content"
            onChange={handleOnChange}
            variant="outlined"
            type="text"
            value={state.content}
          />
          <Button
            fullWidth
            type="submit"
            color="primary"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Update Evaluate
          </Button>
        </Box>
      </form>
    </Container>
  );
}
