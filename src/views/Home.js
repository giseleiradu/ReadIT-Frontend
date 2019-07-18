import { connect } from "react-redux";
import React, { Component } from "react";
import avatar from "../assets/img/avatar.jpg";
import bookmarkOut from "../assets/icons/bookmark.svg";
import bookmarkIn from "../assets/icons/bookmark-inline.svg";
import { MainCard } from "../components/common/Cards/Main";

class Home extends Component {
  render() {
    const article = {
      id: "ab05ce43-1ccb-49fe-bd2a-f2f90ebe283f",
      title: "it was a good experience to have the chick here",
      description:
        "It was so delicious said the white man who ate the African chicken for his first time in Rwanda.",
      body:
        "Ever wonder how the guy got his pocket empty because of the meal?Ever wonder how the guy got his pocket empty because of the meal?Ever wonder how the guy got his pocket empty because of the meal?Ever wonder how the guy got his pocket empty because of the meal?Ever wonder how the guy got his pocket empty because of the meal?Ever wonder how the guy got his pocket empty because of the meal?",
      readTime: 1,
      slug: "it-was-a-good-experience-to-have-the-chick-here-xlxnilhvujj",
      createdAt: "2019-05-13T09:18:45.527Z",
      updatedAt: "2019-05-13T09:18:45.527Z",
      userId: "5f9b8e6a-d138-4cf7-8b7a-b3edbf8b7272",
      author: {
        following: false,
        username: "iradukunda",
        image: null,
        firstName: "IRADUKUNDA",
        lastName: "Gisele",
      },
      comments: [],
      likes: [],
      bookmarked: false,
      liked: false,
      likesCount: 0,
      tagsList: ["politics", "animals", "music"],
    };
    return (
      <div className="scroll-container">
        <div className="left">
          {Array.from({ length: 20 }, (elmt, k) => (
            <MainCard key={k} data={article} />
          ))}
        </div>
        <div className="right">
          {Array.from({ length: 5 }, (elmt, k) => (
            <div key={k} className="article-card">
              <div>
                <img
                  src={avatar}
                  alt="Avatar"
                  style={{ height: 200, width: "100%" }}
                />
                <div
                  style={{
                    paddingRight: 16,
                    paddingLeft: 16,
                    paddingBottom: 2,
                    paddingTop: 2,
                  }}
                >
                  <h4>
                    <b>Gisele</b>
                  </h4>
                  <p>
                    Ever wonder how the guy got his pocket empty because of the
                    meal?Ever wonder how the guy got his pocket empty because of the
                    meal?Ever wonder how the guy got his pocket empty because of the
                    meal?Ever wonder how the guy got his pocket empty because of the
                    meal?Ever wonder how the guy got his pocket empty because of the
                    meal?Ever wonder how the guy got his pocket empty because of the
                    meal?
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Home);
