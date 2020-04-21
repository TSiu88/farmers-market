import React from "react";
import PropTypes from "prop-types";
import { Container, Button } from "@material-ui/core";

function ContactUsButton(props) {
  return (
    <React.Fragment>
      <Container>
        <Button className={props.color}>{props.date}</Button>
      </Container>
    </React.Fragment>
  );
}

ContactUsButton.propTypes = {
  color: PropTypes.string,
  date: PropTypes.string,
};

export default ContactUsButton;
