import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from "@material-ui/icons/BarChart";

const useStyles = makeStyles((theme) => ({
  // root: {
  //     flexGrow: 1,
  //   },
  //   menuButton: {
  //     marginRight: theme.spacing(2),
  //   },
  //   title: {
  //     flexGrow: 1,
  //   },
  root: {
    width: 1500,
    background: "#035C6E",
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" style={{ background: "#035C6E" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Logo
          </Typography>

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar alt="Khamis" src="/static/images/avatar/1.jpg" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
          <Button color="inherit">Name</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <div>
        <AppBar
          position="fixed"
          style={{ background: "#035C6E" }}
          className={classes.appBar}
        >
          <Toolbar>
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              showLabels
              className={classes.root}
            >
              <BottomNavigationAction icon={<HomeIcon fontSize="large" />} />
              <BottomNavigationAction
                icon={<AddCircleOutlineIcon fontSize="large" />}
              />
              <BottomNavigationAction
                icon={<BarChartIcon fontSize="large" />}
              />
              <BottomNavigationAction icon={<MoreIcon fontSize="large" />} />
            </BottomNavigation>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
