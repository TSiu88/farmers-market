import React from "react";
import PropTypes from "prop-types";
import { Container, Button, makeStyles } from "@material-ui/core";
import ContactUs from "./ContactUs";
import ContactUsButton from "./ContactUsButton";
import { render } from "@testing-library/react";

const useStyles = makeStyles({
  border: { border: "2px solid orange" },
});

function ContactUsList(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.border}>
        <h1>Contact Us</h1>
        <ContactUs
          day={props.day}
          location={props.location}
          hours={props.hours}
          booth={props.booth}
        />
      </Container>
    </React.Fragment>
  );
}
export default ContactUsList;
