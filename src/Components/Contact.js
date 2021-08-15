import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { TextareaAutosize } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "30px",
    justifyContent: "center",
  },
  card: {
    padding: "2% 10%",
    minWidth: "350px",
    maxWidth: "1000px",
    // boxShadow: "0 7px 50px -1px rgb(0 76 120 / 11%)",
    marginBottom: "20px",
  },
  form: {
    // width: "80%",
    // margin: "0 auto",
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
}));
export default function Form() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 id="contact" className={classes.title}>
        Get In Touch
      </h1>
      <Card raised className={classes.card}>
        <form className={classes.form} name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="name">Name</label> <br />
            <TextField fullWidth type="text" id="name" name="name" required />
          </p>
          <p>
            <label htmlFor="email">Email</label> <br />
            <TextField
              fullWidth
              type="email"
              id="email"
              name="email"
              required
            />
          </p>
          <p>
            <label htmlFor="message">Message</label> <br />
            <TextField
              minRows={3}
              multiline
              fullWidth
              id="message"
              name="message"
              required
            ></TextField>
          </p>

          <p>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              value="Submit message"
            >
              Submit
            </Button>
          </p>
        </form>
      </Card>
    </div>
  );
}
