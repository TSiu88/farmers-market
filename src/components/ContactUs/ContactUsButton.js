import React from "react";
import PropTypes from "prop-types";
import { Container, makeStyles, Button, Grid } from "@material-ui/core";

function ContactUsButton(props) {
  return (
    <React.Fragment>
      <Grid item xs={12}></Grid>
      <Button className={props.color}>{props.date}</Button>
    </React.Fragment>
  );
}

ContactUsButton.propTypes = {
  color: PropTypes.string,
  date: PropTypes.string,
};

export default ContactUsButton;
