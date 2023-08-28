import React, { Component } from "react";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
    };
  }
  handleChangeLogin = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
  handleSubmitLogin = (e) => {
    e.preventDefault();
    if (this.state.userName === "") {
      alert("Please enter your username");
      return;
    } else if (this.state.password === "") {
      alert("Please enter your password");
      return;
    } else {
      alert("Login successed!");
      this.setState({
        userName: "",
        password: "",
      });
    }
    const user = {
      userName: this.state.userName,
      password: this.state.password,
    };
    console.log(user);
  };

  render() {
    return (
      <>
        <div className="form">
          <div className="form-toggle" />
          <div className="form-panel one">
            <div className="form-header">
              <h1>Account Login</h1>
            </div>
            <div className="form-content">
              <form onSubmit={this.handleSubmitLogin}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    onChange={this.handleChangeLogin}
                    type="text"
                    id="username"
                    name="userName"
                    value={this.state.userName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={this.handleChangeLogin}
                    type="password"
                    id="password"
                    name="password"
                    value={this.state.password}
                  />
                </div>
                <div className="form-group">
                  <label className="form-remember">
                    <input type="checkbox" />
                    Remember Me{" "}
                  </label>
                  <a className="form-recovery" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div className="form-group">
                  <button type="submit">Log In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
