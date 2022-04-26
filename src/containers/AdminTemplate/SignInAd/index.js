import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import DashboardNavbar from "../Dashboard/components/DashboardNavbar";
import DashboardSidebar from "../Dashboard/components/DashboardSidebar";
import Facebook from "../Dashboard/icons/Facebook";
import Google from "../Dashboard/icons/Google";
import { actSigninAdminApi } from "./modules/actions";

export default function SignInAd() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actSigninAdminApi(state, history));
  };

  return (
    <div>
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleLogin}>
            <Box sx={{ mb: 3 }}>
              <Typography color="textPrimary" variant="h3">
                Sign In
              </Typography>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Button
                  color="primary"
                  fullWidth
                  startIcon={<Facebook />}
                  size="large"
                  variant="contained"
                >
                  Login with Facebook
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  startIcon={<Google />}
                  size="large"
                  variant="contained"
                >
                  Login with Google
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            >
              <Typography align="center" color="textSecondary" variant="body1">
                or login with email address
              </Typography>

              <TextField
                // error={Boolean(touched.email && errors.email)}
                fullWidth
                // helperText={touched.email && errors.email}
                label="Email Address"
                margin="normal"
                name="email"
                // onBlur={handleBlur}
                onChange={handleOnChange}
                type="email"
                variant="outlined"
              />
              <TextField
                // error={Boolean(touched.password && errors.password)}
                fullWidth
                // helperText={touched.password && errors.password}
                label="Password"
                margin="normal"
                name="password"
                // onBlur={handleBlur}
                onChange={handleOnChange}
                type="password"
                variant="outlined"
              />

              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  // disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign in now
                </Button>
              </Box>

              <Typography color="textSecondary" variant="body1">
                Don't have an account?
                <Link
                  // component={RouterLink}
                  to="/"
                  variant="h6"
                  underline="hover"
                >
                  Home
                </Link>
              </Typography>
            </Box>
          </form>
        </Container>
      </Box>
    </div>
  );
}
