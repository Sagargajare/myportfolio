import Navbar from "./Components/Navbar";
import { ThemeProvider, Button, CssBaseline, Switch, Divider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import AboutMe from "./Components/AboutMe";
import ContactForm from "./Components/Contact";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(0, 0, 0, 0.87)",
  },
  container: {
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    margin: "0 auto",
  },
}));


function App() {
 
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    shadows: ["none"],
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  const classes = useStyles();
  return (
    <div
      style={{ backgroundColor: darkMode ? "rgba(0, 0, 0, 0.87)" : "#F5F7F8" }}
    >
      <div className={classes.container}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <About />

          <Experience />
          <AboutMe />
          {/* <Projects /> */}
          <Skills />

          <ContactForm />

          <Divider variant="fullWidth" />
          <Footer />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
