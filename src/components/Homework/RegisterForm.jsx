import React, { Component } from "react";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorUserName: null,
      errorFullName: null,
      errorEmail: null,
      errorPassword: null,
      errorConfirmPassword: null,
    };
  }
  handleChangeRegister = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitRegister(e) {
    e.preventDefault();
    if (this.state.userName === "") {
      this.setState({ errorUserName: "Please enter userName" });
      return;
    }
    if (this.state.fullName === "") {
      this.setState({ errorFullName: "Please enter fullName" });
      return;
    }
    if (this.state.email === "") {
      this.setState({ errorEmail: "Please enter email" });
      return;
    } else if (!this.validateEmail(this.state.email)) {
      this.setState({ errorEmail: "Please enter valid email" });
      return;
    } else {
      this.setState({ errorEmail: "" });
      console.log(this.state.email);
    }

    if (this.state.password === "") {
      this.setState({ errorPassword: "Please enter password" });
      return;
    } else if (!this.validatePassword(this.state.password)) {
      this.setState({
        errorPassword:
          "Minimum four characters, at least one letter and one number",
      });
      return;
    } else {
      console.log(this.state.password);
    }

    if (this.state.confirmPassword === "") {
      this.setState({
        errorConfirmPassword: "Please enter confirmation password",
      });
    } else if (this.state.confirmPassword !== this.state.password) {
      this.setState({ errorConfirmPassword: "Password do not match" });
    } else {
      const newUser = {
        userName: this.state.userName,
        fullName: this.state.fullName,
        email: this.state.email,
        password: this.state.password,
      };
      console.log(newUser);
      this.setState({
        userName: "",
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        errorUserName: null,
        errorFullName: null,
        errorEmail: null,
        errorPassword: null,
        errorConfirmPassword: null,
      });
    }
  }

  // Validate email
  validateEmail(email) {
    const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    if (regexEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  // Validate password
  validatePassword(password) {
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
    if (regexPassword.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { userName, fullName, email, password, confirmPassword } = this.state;
    return (
      <>
        <div className="register">
          <div className="form-content">
            <form
              className=" form registerForm"
              onSubmit={(e) => this.handleSubmitRegister(e)}
            >
              <div className="form-header">
                <h1>Account Sign up</h1>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  UserName
                </label>
                <input
                  onChange={this.handleChangeRegister}
                  value={userName}
                  name="userName"
                  type="text"
                  className="form-control"
                  id="userName"
                  aria-describedby="emailHelp"
                />
                <div className="text-danger">
                  {this.state.userName === "" ? (
                    this.state.errorUserName
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  FullName
                </label>
                <input
                  onChange={this.handleChangeRegister}
                  value={fullName}
                  name="fullName"
                  type="text"
                  className="form-control"
                  id="fullName"
                  aria-describedby="emailHelp"
                />
                <div className="text-danger">
                  {" "}
                  {this.state.fullName === "" ? (
                    this.state.errorFullName
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  onChange={this.handleChangeRegister}
                  value={email}
                  name="email"
                  type="text"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
                <div className="text-danger">
                  {this.state.email === "" ? (
                    this.state.errorEmail
                  ) : !this.validateEmail(this.state.email) ? (
                    "Please enter valid email"
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  onChange={this.handleChangeRegister}
                  value={password}
                  name="password"
                  type="password"
                  className="form-control"
                  id="password"
                />
                <div className="text-danger">
                  {this.state.password === "" ? (
                    this.state.errorPassword
                  ) : !this.validatePassword(this.state.password) ? (
                    "Minimum four characters, at least one letter and one number"
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  onChange={this.handleChangeRegister}
                  value={confirmPassword}
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                />
                <div className="text-danger">
                  {this.state.confirmPassword === "" ? (
                    this.state.errorConfirmPassword
                  ) : this.state.confirmPassword !== this.state.password ? (
                    "Password do not match"
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
