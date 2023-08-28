import React, { Component } from "react";

export default class Form_Controlled_C2 extends Component {
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
  // ham lang nghe su thay doi cua cac o input
  handleChange = (e) => {
    //khi nguoi dung tac dong vao cac o input react se tu dong tao ra 1 su kien e
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });

    // console.log("name - value", name, value);
    //   cap nhat lai state
    //     if (name === "userName") {
    //       this.setState({ userName: value });
    //     } else if (name === "dateOfBirth") {
    //       this.setState({ dateOfBirth: value });
    //     } else if (name === "email") {
    //       this.setState({ email: value });
    //     } else {
    //       this.setState({ password: value });
    //     }
  };

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
              name="userName"
              onChange={this.handleChange}
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
              name="dateOfBirth"
              onChange={this.handleChange}
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
              name="email"
              onChange={this.handleChange}
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
              name="password"
              onChange={this.handleChange}
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
