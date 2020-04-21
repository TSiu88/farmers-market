import React from "react";
import Header from "./Header/Header";
// import ContactUs from "./ContactUs/ContactUs";
import Produce from "./Produce/Produce";
import ContactUsControl from "./ContactUs/ContactUsControl";
import { Container, Paper, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  center: {
    alignContent: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Header />
        <Container className={classes.center}>
          <Produce />
          {/* <ContactUs /> */}
          <ContactUsControl />
        </Container>
      </Paper>
    </React.Fragment>
  );
}

export default App;
