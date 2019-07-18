import Login from "../Login";
import SocialAuth from "../SocialAuth";
import Signup from "../Signup";

const AuthRoutes = [
  {
    path: "/sign_in",
    component: Login,
  },
  {
    path: "/social_auth",
    component: SocialAuth,
  },
  {
    path: "/sign_up",
    component: Signup,
  },
];
export default AuthRoutes;
