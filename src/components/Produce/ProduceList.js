import React from "react";
import PropTypes from "prop-types";

function ProduceList(props) {
  return (
    <React.Fragment>
      <h2>{props.month}</h2>
      {props.selection.map((item) => (
        <p>{item}</p>
      ))}
    </React.Fragment>
  );
}

ProduceList.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array,
};

export default ProduceList;
