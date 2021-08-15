import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px 0",
    marginBottom: "80px",
  },
  intro: {
    fontSize: "23px",
    letterSpacing: "-.7px",
    fontWeight: 600,
  },
  purple: {
    borderBottom: " 2px solid rgba(106,0,255,.94)",
    color: "rgba(106, 0, 255, .94)",
  },
  mytitle: {
    padding: "15px 0 30px",
    minWidth: "90%",
    margin: "auto",
    fontSize: "65px",
    letterSpacing: "-3px",
    backgroundClip: "text",
    WebkitBackgroundClip: "text !important",
    color: "transparent",
    backgroundSize: "cover",
    backgroundImage:
      "url(https://media2.giphy.com/media/dAWZiSMbMvObDWP3aA/200w.gif?cid=82a1493byp37003a7qbmajj1l5tg7mcliwmw1twdt960cw2l&ct=g&rid=200w.gif)",
  },
  bio: {
    fontWeight: 500,
    fontSize: " 20px",
    letterSpacing: "-.4px",
    width: "80%",
    lineHeight: "1.7em",
  },
  linkedin: {
    textDecoration: "none",
    color: "#0A66C2",
    borderBottom: "1px solid #0A66C2",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div id="home" className={classes.root}>
      <h2>
        Hi, I am <span className={classes.purple}>Sagar Gajare </span>👋
      </h2>
      <h2 className={classes.mytitle}>React-Django Full Stack Developer</h2>
      <p className={classes.bio}>
        I am a Full-Stack Developer & Freelancer from Pune, India. I like to
        work on exciting projects on both the Frontend and the Backend. I also
        do freelancing ⚡️. Connect with me on
        <span>
          <a
            className={classes.linkedin}
            rel="noreferrer"
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/sagar-gajare/"
            target="_blank"
          >
            {" "}
            Linkedin
          </a>
        </span>
        🙌.
      </p>
    </div>
  );
}
