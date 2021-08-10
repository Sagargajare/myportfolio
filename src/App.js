import Navbar from "./Components/Navbar";
import { ThemeProvider, Button } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import About from "./Components/About";
import Experience from "./Components/Experience";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F5F7F8",
  },
  container: {
    width: "80%",
    margin: "0 auto",
  },
});
const theme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#F5F7F8",
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
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
