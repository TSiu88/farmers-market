import React from "react";
import ContactUsList from "./ContactUsList";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";

const buttonsStyle = {
  display: "flex",
  justifyContent: "space-around",
};

const marketSchedule = [
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
    day: "Friday",
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
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A",
  },
];

class ContactUsControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialDateShown: (
        <ContactUsList
          day={marketSchedule[0].day}
          location={marketSchedule[0].location}
          hours={marketSchedule[0].hours}
          booth={marketSchedule[0].booth}
        />
      ),
    };
  }

  handleClick(day) {
    let marketDay = marketSchedule[day];

    this.setState({
      initialDateShown: (
        <ContactUsList
          day={marketDay.day}
          location={marketDay.location}
          hours={marketDay.hours}
          booth={marketDay.booth}
        />
      ),
    });
  }

  render() {
    return (
      <React.Fragment>
        <div style={buttonsStyle}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleClick(0)}
          >
            {marketSchedule[0].day}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleClick(1)}
          >
            {marketSchedule[1].day}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleClick(2)}
          >
            {marketSchedule[2].day}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleClick(3)}
          >
            {marketSchedule[3].day}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleClick(4)}
          >
            {marketSchedule[4].day}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleClick(5)}
          >
            {marketSchedule[5].day}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleClick(6)}
          >
            {marketSchedule[6].day}
          </Button>
        </div>
        {this.state.initialDateShown}
      </React.Fragment>
    );
  }
}

export default ContactUsControl;
