import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import SkillCard from "./SkillCard";
import ProjectCards from "./ProjectCards";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
    marginBottom: "60px",
    textAlign: "center",
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
  description: {
    fontWeight: 500,
    fontSize: " 20px",
    letterSpacing: "-.4px",

    lineHeight: "1.7em",
    // fontSize: "50px",
    display: "table",
    margin: "20px auto",
    // fontWeight: "bold",
    marginBottom: "50px",
  },
  morebutton: {
    margin: "20px auto",
  },
}));
export default function Projects() {
  const classes = useStyles();
  return (
    <div id="skills" className={classes.root}>
      <h1 className={classes.title}>These are My Freelancing Projects.</h1>
      <Typography align="center" variant="p" className={classes.description}>
        These are some of my freelancing projects
      </Typography>
      <ProjectCards />
      <br />
      <Button
        href="https://www.freelancer.in/u/sggajare"
        color="primary"
        variant="contained"
        className={classes.morebutton}
      >
        See All
      </Button>
    </div>
  );
}
