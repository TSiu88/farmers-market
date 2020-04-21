import React from "react";
import PropTypes from "prop-types";

function ContactUs(props) {
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <h4>{props.location}</h4>
      <h4>{props.hours}</h4>
      <h4>{props.booth}</h4>
    </React.Fragment>
  );
}

ContactUs.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
};

export default ContactUs;
