import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GetAppIcon from "@material-ui/icons/GetApp";
import Drawer from "@material-ui/core/Drawer";
import { Switch } from "@material-ui/core";
import clsx from "clsx";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import { Link, animateScroll as scroll } from "react-scroll";
import Hireme from "./Hireme";
const useStyles = makeStyles((theme) => ({
  list: {
    width: "100vw",
    textAlignLast: "center",
  },
  navbar: {
    textAlignLast: "center",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
    fontSize: "2em",
    fontWeight: "bold",
    borderBottom: " 2px solid rgba(106,0,255,.94)",
    color: "rgba(106, 0, 255, .94)",
  },
  button: {
    border: " 2px solid",
    borderImageSlice: 1,
    borderWidth: "2px",

    borderImageSource:
      "linear-gradient(147deg,#f90fd8,#f54377 26%,#fc1c1c 50%,#ffc30d 75%,#72fb59);",
    borderRadius: "5px",
  },
  linkStyeles: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  },
  purple: {
    borderBottom: " 2px solid rgba(106,0,255,.94)",
    color: "rgba(106, 0, 255, .94)",
  },
  toolBar: {
    backgroundColor: "rgba(255, 255, 0, 0.02)",
  },
}));

export default function Navbar({ darkMode,setDarkMode}) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  const anchor = "right";
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
        <List>
          <ListItem button>
            <ListItemText>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Experience
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemText>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <IconButton onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Brightness2Icon /> : <WbSunnyIcon />}
              </IconButton>
            </ListItemText>
          </ListItem>
        </List>
      </div>
    
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="transparent">
        <Toolbar className={ classes.toolBar} >
          <Typography variant="h6" className={classes.title}>
            SagarG.
          </Typography>
          

          {matches && (
            <div style={{ margin: "0 auto" }}>
              <List
                style={{ display: "flex", flexDirection: "row", padding: 0 }}
              >
                <ListItem button>
                  <ListItemText>
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      About
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Projects" />
                </ListItem>
                <ListItem button>
                  <ListItemText>
                    <Link
                      activeClass="active"
                      to="experience"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Experience
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText>
                    <Link
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Skills
                    </Link>
                  </ListItemText>
                </ListItem>

                <ListItem button>
                  <ListItemText>
                    <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem >
                  <IconButton
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    { darkMode? <Brightness2Icon/>: <WbSunnyIcon/>}
                  </IconButton>
                 
                </ListItem>
              </List>
            </div>
          )}
         
          <Hireme />
          {!matches && (
            <IconButton
              onClick={toggleDrawer(anchor, true)}
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
}
