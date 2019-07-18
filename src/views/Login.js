import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  handleTextInput,
  handleSignIn,
  socialAuth,
} from "../redux/actions/authActions";
import { capitalize } from "../helpers";
import fbIcon from "../assets/icons/fb-icon.svg";
import googleIcon from "../assets/icons/google-plus-icon.svg";
import twitterIcon from "../assets/icons/twitter-icon.svg";
import Toast from "../components/common/Toasts";
import Input from "../components/common/Inputs/MidInput";

export class Login extends Component {
  state = { showToast: false };

  handleNavigation = path => <Redirect to={`/${path}`} />;

  handleSocialAuth(provider) {
    const { isSubmitting, socialAuth: socialLogin } = this.props;
    if (!isSubmitting) {
      socialLogin(provider);
    }
  }

  render() {
    const { loginSuccess } = this.props;
    const { showToast } = this.state;
    if (loginSuccess) {
      return this.handleNavigation("");
    }
    return (
      <div className="body">
        {showToast ? <Toast /> : null}
        <section className="wrapper">
          <div className="col-center">
            <div className="header-contain">
              <p
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 26,
                  fontWeight: "bold",
                }}
              >
                Login with
              </p>
              <div className="social-container">
                {[fbIcon, googleIcon, twitterIcon].map((elmt, key) => (
                  <img key={Number(key)} alt="icons" src={elmt} />
                ))}
              </div>
              <p
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                or
              </p>
            </div>

            <form className="input-group">
              <p className="title">input your credentials</p>
              {["Email", "Password"].map((elmt, key) => (
                <Input
                  key={Number(key)}
                  className="input"
                  placeholder={capitalize(elmt)}
                  inputMode={elmt}
                  onChange={() => {}}
                  onFocus={() => {}}
                  autoComplete={elmt}
                  required
                  type={elmt}
                />
              ))}
              <p className="rich-text">Forgot your password?</p>
            </form>
            <button
              className="submit-btn"
              type="button"
              onClick={() => this.setState({ showToast: !showToast })}
            >
              login
            </button>
          </div>
        </section>
      </div>
    );
  }
}

Login.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  loginSuccess: PropTypes.bool,
  socialAuth: PropTypes.func.isRequired,
};

Login.defaultProps = {
  loginSuccess: false,
};

export const mapStateToProps = state => {
  const { auth } = state;
  return {
    ...auth,
    message: auth.errors.message,
  };
};

export default connect(
  mapStateToProps,
  { handleTextInput, handleSignIn, socialAuth },
)(Login);
