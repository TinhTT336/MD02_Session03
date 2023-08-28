import React, { Component } from "react";

export default class FormControlled extends Component {
  constructor(props) {
    super(props);
    //   khai bao state
    this.state = {
      userName: "",
      dateOfBirth: "",
      email: "",
      password: "",
    };
  }
  // ham xu ly gui du lieu
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Ham submit duoc chay", e);
    //   doi tuong newUser
    const newUser = {
      userName: this.state.userName,
      dateOfBirth: this.state.dateOfBirth,
      email: this.state.email,
      password: this.state.password,
    };
    console.log("new User", newUser);
  };

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              UserName
            </label>
            <input
              value={this.state.userName}
              onChange={(e) => this.setState({ userName: e.target.value })}
              type="text"
              className="form-control"
              id="userName"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              DateOfBirth
            </label>
            <input
              value={this.state.dateOfBirth}
              onChange={(e) => this.setState({ dateOfBirth: e.target.value })}
              type="date"
              className="form-control"
              id="dateOfBirth"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              type="text"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}
