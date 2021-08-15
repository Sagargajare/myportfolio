import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EFF2F3",
    marginTop: "60px",
    minWidth: 275,
    marginBottom: "90px",
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
    width: "60%",
    [theme.breakpoints.down("xs")]: {
      width: "95%",
    },
  },

  pos: {
    marginBottom: 12,
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <h1 id="about" className={classes.title}>
          About Me
        </h1>
        <Typography align="center" variant="p" className={classes.description}>
          Hi 👋 I am Sagar Gajare. I am a Full Stack Developer from India. I
          like to use various technologies to build exciting projects. If you
          want to contact me, you can send me a mail .
        </Typography>
      </CardContent>
    </Card>
  );
}
