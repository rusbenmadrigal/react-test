import React from "react";
import propTypes from "prop-types";

export default function Props(props) {
  return (
    <div>
      <h2>{props.bydefault}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.number}</li>
        <li>{props.bolean ? "true" : "false"} </li>
        <li>{props.fixing.join(", ")}</li>
     
      </ul>
    </div>
  );
}

Props.defaultProps = {
  bydefault: "The new props",
};

Props.propTypes = {
   number: propTypes.number,
};