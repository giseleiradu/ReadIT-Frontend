import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import bookmarkOut from "../../../assets/icons/bookmark.svg";
import bookmarkIn from "../../../assets/icons/bookmark-inline.svg";
import avatar from "../../../assets/img/avatar.jpg";
import userPicture from "../../../assets/img/user.jpeg";
import { capitalize } from "../../../helpers";

export const MainCard = ({
  data: {
    title,
    description,
    body,
    image,
    readTime,
    updatedAt,
    author: { following, image: profilePicture, username, firstName, lastName },
    bookmarked,
  },
}) => (
  <div className="article-card">
    <div className="card-top">
      <div className="top-content">
        <h3 className="title">{capitalize(title)}</h3>
        <h5 className="description">{description}</h5>
        <h5 className="content-body">{body}</h5>
        <h5 className="timestamp">{`${moment(updatedAt).format(
          "MMM Do YY",
        )} . ${readTime} min read`}</h5>
      </div>
      <div className="card-bottom">
        <div className="bottom-author">
          <img src={profilePicture || userPicture} alt="logo" />
          <div>
            <h5
              style={{ color: "rgba(0,0,0,0.6)" }}
            >{`${firstName} ${lastName}`}</h5>
            <h5
              style={{ color: "rgba(0,0,0,0.4)", fontWeight: 500 }}
            >{`@${username}`}</h5>
          </div>
        </div>
        <div className="bottom-actions">
          <button type="button" className="action-follow">
            <h5 className="description">
              {following === true ? "Following" : "Follow"}
            </h5>
          </button>
          <div className="action-bookmark">
            <img src={bookmarked ? bookmarkIn : bookmarkOut} alt="book" />
          </div>
        </div>
      </div>
    </div>
    <div className="article-image">
      <img src={image || userPicture} alt="logo" />
    </div>
  </div>
);

MainCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    author: PropTypes.shape({
      following: PropTypes.bool.isRequired,
      image: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string.isRequired,
    }).isRequired,
    bookmarked: PropTypes.bool.isRequired,
  }).isRequired,
};
