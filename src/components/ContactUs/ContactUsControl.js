import React from "react";
import ContactUsList from "./ContactUsList";
import ContactUsButton from "./ContactUsButton";
import PropTypes from "prop-types";

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
      initialDateShown: "Monday",
      // day: props.day,
      // location: "Lents International",
      // hours: "9:00am - 2:00pm",
      // booth: "4A",
    };
  }

  handleClick = ({ weekday }) => {
    this.setState({ initialDateShown: { weekday } });
  };

  // handleMondayClick = () => {
  //   this.setState({ initialDateShown: "Monday" });
  // };

  // handleTuesdayClick = () => {
  //   this.setState({ initialDateShown: "Tuesday" });
  // };

  render() {
    let currentDateShown = null;
    let buttonText = null;
    if (this.state.initialDateShown === "Monday") {
      currentDateShown = (
        <ContactUsList
          day={marketSchedule[0].day}
          location={marketSchedule[0].location}
          hours={marketSchedule[0].hours}
          booth={marketSchedule[0].booth}
          // buttonText={marketSchedule[0].day}
        />
      );
    } else if (this.state.initialDateShown === "Tuesday") {
      currentDateShown = (
        <ContactUsList
          day={marketSchedule[1].day}
          location={marketSchedule[1].location}
          hours={marketSchedule[1].hours}
          booth={marketSchedule[1].booth}
          buttonText={marketSchedule[1].day}
        />
      );
    }
    return (
      <React.Fragment>
        {currentDateShown}
        ContactUsList(currentDateShown);
        <div style={buttonsStyle}>
          {/* <button className="square" onClick={() => alert("click")}>
            {this.state.initialDateShown}
          </button> */}
          <button onClick={this.handleClick("Monday")}>Monday</button>
          <button onClick={this.handleClick("Tuesday")}>Tuesday</button>
          {/* <button onClick={this.handleMondayClick()}>Monday</button>
          <button onClick={this.handleTuesdayClick()}>Tuesday</button> */}
        </div>
      </React.Fragment>
    );
  }
}

export default ContactUsControl;
