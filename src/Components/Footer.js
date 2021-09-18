import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
    textAlign: "center",
    flexGrow: 1,
    paddingBottom: "80px",
    fontFamily: "Inter",
  },
 
  socialMediaHeader: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: "18px",
    textTransform: "uppercase",
  },
  socials: {
    textAlign: "center",
    // fontWeight: 400,
    // fontSize: "15px",
    margin: "5px",
    marginBottom: "15px",
    textDecoration: "none",
  
    fontWeight: "600",
    fontSize: "16px",
    letterSpacing: "-.4px",
    transition: ".3s ease-in-out",
    "& > *": {
      fontFamily: "Inter",
      fontWeight: "600",
      fontSize: "16px",
    
      textDecoration: "none",
    },
  },
  socialList: {
    listStyle: "none",
    padding: "0px",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h1
            style={
              ({ fontFamily: "Inter" },
              { fontSize: "28px" },
              { marginBottom: "5px" })
            }
          >
            Sagar Gajare.
          </h1>
          <p>Full Stack Developer and Freelancer</p>
          <Button href="mailto:sggajare360@gmail.com">
            sggajare360@gmail.com
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2 className={classes.socialMediaHeader}>Social Media</h2>
          <ul className={classes.socialList}>
            <li className={classes.socials}>
              <a href="https://www.linkedin.com/in/sagar-gajare">Linkedin</a>
            </li>
            <li className={classes.socials}>
              <li className={classes.socials}>
                <a href="https://www.instagram.com/i_am_swagar_g/">Instagram</a>
              </li>
            </li>
            <li className={classes.socials}>
              <li className={classes.socials}>
                <a href="https://twitter.com/SagarGajare20">Twitter</a>
              </li>
            </li>
          </ul>
        </Grid>
       
      </Grid>
    </div>
  );
}
