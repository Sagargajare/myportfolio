import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import { SiUpwork, SiFiverr, SiFreelancer, SiGmail } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#ffffff",
    height: 350,
    width: 450,
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      boxShadow: "0 7px 50px -1px rgb(0 76 120 / 11%)",
      border: "5px #000000",
    },
  },
  hireList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: "4px",
    },
  },
  rounded: {
    borderRadius: "5px",
  },
}));

export default function Hireme() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Button onClick={handleOpen} color="primary" variant="contained">
        Hire Me
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Want to work together </h2>
            <div className={classes.hireList} id="transition-modal-description">
              <Button
                href="https://www.upwork.com/freelancers/~0108a4c730d6868163"
                variant="outlined"
                startIcon={<SiUpwork />}
              >
                {" "}
                Hire Me On Upwork
              </Button>
              <Button
                href="https://www.fiverr.com/sagargajare?up_rollout=true"
                variant="outlined"
                startIcon={<SiFiverr />}
              >
                {" "}
                Hire Me On Fiverr
              </Button>
              <Button
                href="https://www.linkedin.com/in/sagar-gajare"
                variant="outlined"
                startIcon={<GrLinkedin />}
              >
                {" "}
                Connect on Linkedin
              </Button>
              <Button
                href="https://www.freelancer.in/u/sggajare"
                variant="outlined"
                startIcon={<SiFreelancer />}
              >
                {" "}
                Hire Me On Freelancer.com
              </Button>
              <Button
                href="mailto:sggajare360@gmail.com"
                variant="outlined"
                startIcon={<SiGmail />}
              >
                Drop A Mail
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
