import React, { Component } from "react";

export default class FormUnControlled extends Component {
  constructor(props) {
    super(props);
    //   khai bao tham chieu cho cac bien
    this.userName = React.createRef();
    this.dateOfBirth = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
  }

  // ham xu ly gui du lieu
  handleSubmit = (e) => {
    e.preventDefault();
    //  lay du lieu tu DOM
    console.log("userName", this.userName.current.value);
    console.log("dateOfBirth", this.dateOfBirth.current.value);
    console.log("email", this.email.current.value);
    console.log("password", this.password.current.value);
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
              ref={this.userName}
              name="userName"
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
              ref={this.dateOfBirth}
              name="dateOfBirth"
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
              ref={this.email}
              name="email"
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
              ref={this.password}
              name="password"
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
