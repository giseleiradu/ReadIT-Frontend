import { combineReducers } from "redux";
import loginReducers from "./authReducers";
import socialAuthReducers from "./socialAuthReducer";
import readArticleReducer from "./readArticleReducer";
import searchReducers from "./searchReducer";
import following from "./followingReducer";
import notifier from "./notificationReducer";
import registration from "./registrationReducer";

export default combineReducers({
  auth: loginReducers,
  socialAuth: socialAuthReducers,
  fetchedArticle: readArticleReducer,
  search: searchReducers,
  following,
  notifier,
  registration,
});
