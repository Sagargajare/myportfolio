import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Cards from "./Cards";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "80px",
  },
  title: {
    fontSize: "50px",
    display: "table",
    margin: "20px auto",
    fontWeight: "bold",
    marginBottom: "50px",

    backgroundImage:
      "linear-gradient(147deg,#f90fd8,#f54377 26%,#fc1c1c 50%,#ffc30d 75%,#72fb59)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  experienceList: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "20px",
  },
  experienceImg: {
    width: "80px",
    padding: "10px",
  },
}));
// https://www.f-cdn.com/assets/main/en/assets/default-notification-image.svg
export default function Experience() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 id="experience" className={classes.title}>
        My Experience
      </h1>

      <br />
      <Cards />
    </div>
  );
}
