import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Chip from "@material-ui/core/Chip";

const data = [
  {
    imgSrc: "https://www.pleximus.com/assets/images/logo.png",
    companyName: "Pleximus",
    role: "Python Developer Intern",
    dates: "May 2021-Present",
    resposibilities: [
      "Developed APIs using Flask, Django, and Fastapi.",
      " Worked on developing Web Scrapers",
      "Deployed Flask, FastApi, and Django projects using Nginx and WSGI.",
      "Automated web task with python selenium",
    ],
    techUsed: [
      "Linux",
      "Django",
      "Flask",
      "Fastapi",
      "AWS",
      "GCP",
      "Bootstrap",
      "Bs4",
    ],
  },
  {
    imgSrc:
      "https://www.f-cdn.com/assets/main/en/assets/default-notification-image.svg",
    companyName: "Freelancer",
    role: "Python Developer Intern",
    dates: "August 2020-Present",
    resposibilities: [
      "Completed 10+ projects on Freelancer.com with 5🌟 Rating",
      "Developed Frontend and Backend for clients.",
      "Developed APIs using Flask, Django, and Fastapi.",
      "Deployed Flask, FastApi, and Django projects using Nginx and WSGI.",
      "Integrated Machine Learning and Deep Learning Model to flask and Django.",
      "Worked on developing Web Scrapers",
    ],
    techUsed: [
      "Django",
      "Flask",
      "Fastapi",
      "AWS",
      "Scrapy",
      "Bootstrap",
      "Reactjs",
    ],
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    boxShadow: "0 7px 50px -1px rgb(0 76 120 / 11%)",
    marginBottom: "50px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[600],
  },
  subheader: {
    marginTop: "0px",
    fontSize: "13px",
    fontWeight: 480,

    color: "#909fae",
  },
  cardPadding: {
    paddingTop: "2px",
  },
  description: {
    marginTop: "10px",
    color: "#2a2e37",
    lineHeight: " 1.6em",
    fontSize: "15px",
    paddingBottom: "5px",
  },
  chips: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Cards() {
  const classes = useStyles();

  return (
    <Fragment>
      {data.map((subdata, index) => (
        <Card key={index} raised className={classes.root}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                src={subdata.imgSrc}
                className={classes.avatar}
              ></Avatar>
            }
            title={
              <Typography
                variant="h5"
                style={({ fontSize: "22px" }, { color: "#122746" })}
                component="h2"
              >
                {subdata.companyName}
              </Typography>
            }
            subheader={
              <Typography
                className={classes.subheader}
                gutterBottom
                variant="h6"
                component="p"
              >
                {subdata.role} ({subdata.dates})
              </Typography>
            }
          />

          <CardContent className={classes.cardPadding}>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.description}
              component="p"
            >
              <ul style={{ listStyle: "none" }}>
                {subdata.resposibilities.map((res, index) => (
                  <li key={index}>{res}</li>
                ))}
              </ul>
            </Typography>
            <div className={classes.chips}>
              {subdata.techUsed.map((tech, index) => (
                <Chip label={tech} key={index} variant="outlined" />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </Fragment>
  );
}
