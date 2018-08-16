import React, { Component } from "react";
import { Col, Row, Input } from "react-materialize";
import auth from "../../utils/auth";
import _ from "lodash";

import "./Signin.css";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: "",
        password: ""
      }
    };
  }

  changeFormData = event => {
    const field = event.target.name;
    const value = event.target.value;

    this.setState(({ user }) => ({
      user: _.set(user, field, value)
    }));
  };

  handleSignIn = async () => {
    const { user } = this.state;
    const success = await auth.authenticate(user.email, user.password);
    // console.log(success);

    // Need to handle backend feedback
    if (success) {
      this.props.history.push("/browse");
    }
  };

  render() {
    return (
      <div className="mySignin">
        <Row>
          <Col s={12} m={8} l={6} offset="m2 l3">
            <p class="myTitle">SIGN IN</p>
            <Input
              s={12}
              label="Email"
              name="email"
              onChange={this.changeFormData}
            />
            <Input
              s={12}
              type="password"
              label="Password"
              name="password"
              onChange={this.changeFormData}
            />
            <a
              class="waves-effect waves-light btn signinBtn"
              onClick={this.handleSignIn}
            >
              SIGN IN
            </a>
            <p>Don’t have an account? Register here.</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export { Signin };
