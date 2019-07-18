import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import img from "../../../assets/icons/edit.svg";

const Thumbnail = ({ title = "READIT" }) => (
  <Link className="col-md-6 col-sm-3 brand-name" to="/">
    <div className="brand">
      <img src={img} alt="logo" className="brand" />
    </div>
    <h3>{title}</h3>
  </Link>
);

Thumbnail.propTypes = { title: PropTypes.string };
Thumbnail.defaultProps = { title: "READIT" };

export default Thumbnail;
