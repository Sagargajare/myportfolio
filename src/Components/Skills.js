import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import SkillCard from "./SkillCard";
const useStyles = makeStyles((theme) => ({
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
}));
export default function Skills() {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.title}>Take a look at my Skills.</h1>
      <Typography align="center" variant="p" className={classes.description}>
        These are my skills and this contains all the technologies and
        programming languages that I have learnt until now. I am constantly
        learning, therefore I may update this section more often.
      </Typography>
      <SkillCard />
    </div>
  );
}
