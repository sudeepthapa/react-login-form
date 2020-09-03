import React, { Component } from "react";
import "./login.css";
export default class Login extends Component {
  state = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
  };

  onChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value,
      [target.name + "Error"]: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();
    if (error) return;
    this.props.history.push("/home");
  };

  validate = () => {
    const { username, password, errors } = this.state;
    let error = false;
    if (username.trim().length < 0 || username.trim() === "") {
      this.setState({
        usernameError: "error",
      });
      error = true;
    }
    if (password.trim().length < 0 || password.trim() === "") {
      this.setState({
        passwordError: "error",
      });
      error = true;
    }
    return error;
  };

  render() {
    return (
      <div className="app">
        <div className="bg"></div>
        <form onSubmit={this.handleSubmit}>
          <header>
            <img src="https://assets.codepen.io/3931482/internal/avatars/users/default.png?format=auto&height=80&version=1592223909&width=80" />
          </header>

          <div class="inputs">
            <input
              type="text"
              name="username"
              placeholder="username or email *"
              onChange={this.onChangeHandler}
              className={`form-input ${this.state.usernameError}`}
            />
            <input
              type="password"
              name="password"
              placeholder="password *"
              onChange={this.onChangeHandler}
              className={`form-input ${this.state.passwordError}`}
            />

            <p class="light">
              <a href="#">Forgot password?</a>
            </p>
          </div>
          <footer>
            <button type="submit">Continue</button>
            <p>
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </footer>
        </form>
      </div>
    );
  }
}
