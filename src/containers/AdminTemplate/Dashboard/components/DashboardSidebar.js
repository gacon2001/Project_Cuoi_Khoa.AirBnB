import { useEffect, useRef, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from "@material-ui/core";
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
} from "react-feather";
import NavItem from "./NavItem";
import { useDispatch } from "react-redux";
import { actUploadAvatarApi } from "containers/AdminTemplate/Avatar/modules/actions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const itemsLoggedIn = [
  {
    href: "/list-user",
    icon: UsersIcon,
    title: "List Users",
  },
];
const itemsLoggedOut = [
  {
    href: "/signin",
    icon: LockIcon,
    title: "SignIn",
  },
  
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();
  //!useRef(): tương tự getELEById
  const imgref = useRef(null);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    avatar: "",
  });

  const handleOnChange = (event) => {
    const { files } = event.target;
    dispatch(actUploadAvatarApi(files[0]));
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("Admin")))
      setUser(JSON.parse(localStorage.getItem("Admin")).user);
  }, []);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        {user && user.avatar && (
          <Avatar
            // component="img"
            src={user.avatar}
            sx={{
              cursor: "pointer",
              width: 64,
              height: 64,
            }}
            //ban đầu current là null
            onClick={() => {
              imgref.current?.click();
            }}
          ></Avatar>
        )}
        <input ref={imgref} type="file" hidden onChange={handleOnChange} />

        <Typography color="textPrimary" variant="h5">
          {user && <Link to={`/profile/${user._id}`}>{user.name}</Link>}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {/* {localStorage.getItem("Admin")
            ? itemsLoggedIn.map((item) => (
                <NavItem
                  href={item.href}
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                />
              ))
            : itemsLoggedOut.map((item) => (
                <NavItem
                  href={item.href}
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                />
              ))} */}
              {itemsLoggedIn.map((item)=>(
               <NavItem
                  href={item.href}
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                /> 
              ))}
              
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          backgroundColor: "background.default",
          m: 2,
          p: 2,
        }}
      >
        {/* {localStorage.getItem("Admin") ? <Button
          color="success"
          variant="contained"
          sx={{ ml: 6 }}
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Log Out
        </Button> : ""} */}
        <Button
          color="success"
          variant="contained"
          sx={{ ml: 6 }}
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Log Out
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256,
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: "calc(100% - 64px)",
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default DashboardSidebar;
