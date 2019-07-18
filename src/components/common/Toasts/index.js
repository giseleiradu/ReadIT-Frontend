import PropTypes from "prop-types";

import React, { Component } from "react";

export default class Toast extends Component {
  state = { status: true };

  render() {
    const { message, timeout, type } = this.props;
    const { status } = this.state;
    if (status) setTimeout(() => this.setState({ status: !status }), timeout);
    let backgroundColor;
    if (type === "success") backgroundColor = "green";
    else if (type === "warning") backgroundColor = "orange";
    else if (type === "error") backgroundColor = "red";
    return (
      <div
        className="toast fade"
        style={{
          visibility: status ? "visible" : "hidden",
          animation: `fadeInOut ${timeout / 1000}s`,
          backgroundColor,
          boxShadow: `0 0 20 ${backgroundColor}`,
        }}
      >
        {message}
      </div>
    );
  }
}

Toast.propTypes = {
  message: PropTypes.string,
  timeout: PropTypes.number,
  type: PropTypes.oneOf(["error", "success", "warning"]),
};

Toast.defaultProps = {
  message: "I'm a successful toast",
  timeout: 6000,
  type: "warning",
};
