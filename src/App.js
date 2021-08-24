import Navbar from "./Components/Navbar";
import { ThemeProvider, Button } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import AboutMe from "./Components/AboutMe";
import ContactForm from "./Components/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F5F7F8",
  },
  container: {
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    margin: "0 auto",
  },
}));
const theme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#5860A6",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <About />

          <Experience />
          <AboutMe />
          <Projects />
          <Skills />

          <ContactForm />
          <Footer />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
