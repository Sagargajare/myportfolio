import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import python from "../Images/python.png";
import calculate64 from "../Images/calculate64.png";
import getplates from "../Images/getplates.png";
import Diyintern from "../Images/Diyintern.in.png";

import { CardMedia } from "@material-ui/core";

// https://sdtimes.com/wp-content/uploads/2018/01/bootstrap-stack.png
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 450,
    width: 350,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      boxShadow: "0 7px 50px -1px rgb(0 76 120 / 11%)",
      border: "5px #000000",
    },
  },
  control: {
    padding: theme.spacing(2),
  },
  image: {
    width: "40px",
  },
  imageName: {
    fontSize: "20px",
    fontWeight: 200,
    letterSpacing: "-.9px",
    marginBottom: "10px",
  },
  media: {
    height: "50%",
    width: "100%",
    paddingTop: "56.25%", // 16:9
  },
}));
const freelanceData = [
  {
    name: "Calculate64.com",
    image: calculate64,
  },
  {
    name: "Getplates.ml",
    image: getplates,
  },
];
const card = (classes, data) => (
  <Grid item>
    <Paper elevation={3} className={classes.paper}>
      <CardMedia className={classes.media} image={data.image} />

      <h3 className={classes.imageName}>{data.name}</h3>
    </Paper>
  </Grid>
);
export default function ProjectCards() {
  const [spacing, setSpacing] = React.useState(5);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {freelanceData.map((data) => card(classes, data))}
        </Grid>
      </Grid>
    </Grid>
  );
}
