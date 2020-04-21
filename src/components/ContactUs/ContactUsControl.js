import React from "react";
import ContactUsList from "./ContactUsList";
import ContactUsButton from "./ContactUsButton";

class ContactUsControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialDateShown: Date.getDay(),
    };
  }

  render() {
    let currentDateShown = null;
    return <React.Fragment></React.Fragment>;
  }
}
export default ContactUsControl;
