import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import "./Login_Signup.css";

class LoginSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignUp: true,
      showTransition: true, // Show transition video when the component mounts
    };
  }

  componentDidMount() {
    setTimeout(() => {
      // Hide transition video after a delay
      this.setState({ showTransition: false });
    }, 50000); // Adjust the delay as needed
  }

  toggleRoute = () => {
    if (document.location.href.includes("/user/signin")) {
      this.setState({ showSignUp: false });
    }
  };

  toggleForm = () => {
    this.setState((prevState) => ({
      showSignUp: !prevState.showSignUp,
    }));
  };

  render() {
    return (
      <>
        <div className="background_Login">
          <div className="appForm" id="LSform">
            <h3 className="shining-text">Beyond Borders, Across Stars</h3>
            <br></br>
            <div className="pageSwitcher">
              <button
                onClick={this.toggleForm}
                className={`pageSwitcherItem ${
                  this.state.showSignUp ? "" : "pageSwitcherItem-active"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={this.toggleForm}
                className={`pageSwitcherItem ${
                  this.state.showSignUp ? "pageSwitcherItem-active" : ""
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="formTitle">
              <span
                onClick={() => this.setState({ showSignUp: false })}
                className={`formTitleLink ${
                  !this.state.showSignUp ? "formTitleLink-active" : ""
                }`}
              >
                Sign In
              </span>
              <span className="formTitleLink"> | </span>
              <span
                onClick={() => this.setState({ showSignUp: true })}
                className={`formTitleLink ${
                  this.state.showSignUp ? "formTitleLink-active" : ""
                }`}
              >
                Sign Up
              </span>
            </div>

            {this.state.showSignUp ? <SignUpForm /> : <SignInForm />}
          </div>
        </div>
      </>
    );
  }
}

export default LoginSignup;
