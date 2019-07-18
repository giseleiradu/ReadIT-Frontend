import React from "react";
import notFound from "../assets/img/notfound.png";

const NotFound = () => (
  <div className="grid-container" style={{ overflowY: "hidden" }}>
    <div className="center">
      <img className="img-not-found" src={notFound} alt="not found" />
    </div>
  </div>
);
export default NotFound;
