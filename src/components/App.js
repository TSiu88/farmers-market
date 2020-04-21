import React from "react";
import Header from "./Header/Header";
import ContactUs from "./ContactUs/ContactUs";
import Produce from "./Produce/Produce";
import ContactUsControl from "./ContactUs/ContactUsControl";
import ContactUsButton from "./ContactUs/ContactUsButton";
import { Container } from "@material-ui/core";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Produce />
        <ContactUs />
      </Container>
    </React.Fragment>
  );
}

export default App;
