import React from "react";
import PropTypes from "prop-types";
import { Container, Button, makeStyles } from "@material-ui/core";
import ContactUs from "./ContactUs";
import ContactUsButton from "./ContactUsButton";

const useStyles = makeStyles({
  border: { border: "2px solid orange" },
  greenColor: { backgroundColor: "green" },
  buttonPadding: { paddingRight: "10px" },
  yellowColor: { backgroundColor: "yellow" },
  redColor: { backgroundColor: "red" },
  orangeColor: { backgroundColor: "orange" },
  purpleColor: { backgroundColor: "purple" },
  goldColor: { backgroundColor: "gold" },
});

// const marketSchedule = [
//   {
//     day: "Monday",
//     location: "Pioneer Courthouse Square",
//     hours: "10:00am - 2:00pm",
//     booth: "7C",
//   },
//   {
//     day: "Tuesday",
//     location: "Hillsboro",
//     hours: "5:00pm - 8:30pm",
//     booth: "1F",
//   },
//   {
//     day: "Wednesday",
//     location: "Shemanski Park",
//     hours: "10:00am - 2:00pm",
//     booth: "3E",
//   },
//   {
//     day: "Thursday",
//     location: "Northwest Portland",
//     hours: "2:00pm - 6:00pm",
//     booth: "6D",
//   },
//   {
//     day: "Saturday",
//     location: "Beaverton",
//     hours: "10:00am - 1:30pm",
//     booth: "9G",
//   },
//   {
//     day: "Sunday",
//     location: "Lents International",
//     hours: "9:00am - 2:00pm",
//     booth: "4A",
//   },
// ];

function ContactUsList(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.border}>
        <h1>Contact Us</h1>
        {marketSchedule.map((date, index) => (
          <div>
            <ContactUs
              day={date.day}
              location={date.location}
              hours={date.hours}
              booth={date.booth}
              key={index}
            />
          </div>
        ))}
      </Container>
    </React.Fragment>
  );
}

export default ContactUsList;

//     onClick={marketSchedule[0]}
//     variant="contained"
//     color="primary"
//   >
//     Monday
//   </Button>
//   <Button
//     onClick={marketSchedule[1]}
//     variant="contained"
//     color="primary"
//   >
//     Tuesday
//   </Button>
//   <Button
//     onClick={marketSchedule[2]}
//     variant="contained"
//     color="primary"
//   >
//     Wednesday
//   </Button>
//   <Button
//     onClick={marketSchedule[3]}
//     variant="contained"
//     color="primary"
//   >
//     Thursday
//   </Button>
//   <Button
//     onClick={marketSchedule[4]}
//     variant="contained"
//     color="primary"
//   >
//     Friday
//   </Button>
//   <Button
//     onClick={marketSchedule[5]}
//     variant="contained"
//     color="primary"
//   >
//     Saturday
//   </Button>
//   <Button
//     onClick={marketSchedule[6]}
//     variant="contained"
//     color="primary"
//   >
//     Sunday
//   </Button>
// </Container>
