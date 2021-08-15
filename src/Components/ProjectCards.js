import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import python from "../Images/python.png";

const data = [
  {
    skillName: "Python",
    imageSrc: python,
  },
  {
    skillName: "Javascript",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    skillName: "Reactjs",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
  },
  {
    skillName: "Django",
    imageSrc:
      "data:image/jpeg;base64,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",
  },
  {
    skillName: "Flask",
    imageSrc: "https://www.pngitem.com/pimgs/b/159-1595977_python-logo-png.png",
  },
  {
    skillName: "C++",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png",
  },
  {
    skillName: "Scrapy",
    imageSrc:
      "https://discoversdkcdn.azureedge.net/runtimecontent/companyfiles/6617/2328/thumbnail.png?v131141820642441697",
  },
  {
    skillName: "NodeJs",
    imageSrc:
      "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png",
  },
  {
    skillName: "Material UI",
    imageSrc:
      "https://opencollective-production.s3.us-west-1.amazonaws.com/ada636e0-395b-11ea-8ab7-b3f0317bbc7c.png",
  },
  {
    skillName: "Git",
    imageSrc: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    skillName: "Linux",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png",
  },

  {
    skillName: "Bootstrap",
    imageSrc:
      "https://sdtimes.com/wp-content/uploads/2018/01/bootstrap-stack.png",
  },

  {
    skillName: "MongoDB",
    imageSrc:
      "https://w7.pngwing.com/pngs/216/509/png-transparent-mongodb-node-js-npm-open-source-model-angularjs-leaf-leaf-logo-grass.png",
  },

  {
    skillName: "AWS",
    imageSrc:
      "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
  },
];
// https://sdtimes.com/wp-content/uploads/2018/01/bootstrap-stack.png
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 450,
    width: 350,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      boxShadow: "0 7px 50px -1px rgb(0 76 120 / 11%)",
      border: "5px #000000",
    },
  },
  control: {
    padding: theme.spacing(2),
  },
  image: {
    width: "40px",
  },
  imageName: {
    fontSize: "25px",
    fontWeight: 600,
    letterSpacing: "-.9px",
    marginBottom: "10px",
  },
}));

export default function ProjectCards() {
  const [spacing, setSpacing] = React.useState(5);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {data.map((skill, index) => (
            <Grid key={index} item>
              <Paper elevation={3} className={classes.paper}>
                <img
                  className={classes.image}
                  src={skill.imageSrc}
                  alt="Python"
                  srcset=""
                />
                <h1 className={classes.imageName}>{skill.skillName}</h1>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
