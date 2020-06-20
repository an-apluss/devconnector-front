import React, { Fragment } from "react";
import spinnerImage from "../../img/spinner5.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinnerImage}
        alt="spinner"
        style={{ width: "200px", margin: "auto", display: 'block' }}
      />
    </Fragment>
  );
};

export default Spinner;
