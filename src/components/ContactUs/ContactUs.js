import React from "react";
import { Container, makeStyles, Button } from "@material-ui/core";
import ContactUsButton from "./ContactUsButton";
import ContactUsList from "./ContactUsList";

const useStyles = makeStyles({
  colors: ["green", "blue", "red", "yellow", "orange", "purple", "gold"],
});

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A",
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C",
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F",
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E",
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D",
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G",
  },
];

function ContactUs(props) {
  return (
    <React.Fragment>
      <Container>
        <h1>Contact Us</h1>
        {marketSchedule.map((date, index) => (
          <div>
            <ContactUsButton date={date.day}></ContactUsButton>
            <ContactUsList
              day={date.day}
              location={date.location}
              hours={date.hours}
              booth={date.booth}
            />
          </div>
        ))}
      </Container>
    </React.Fragment>
  );
}

export default ContactUs;
