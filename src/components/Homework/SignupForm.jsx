import React, { Component } from "react";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      email: "",
      password: "",
      error: "",
    };
  }
  handleChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { code, email, password } = this.state;
    if (code === "") {
      this.setState({
        error: "Mã không được để trống",
      });
    } else if (!code.startsWith("NV")) {
      this.setState({
        error: "Mã không đúng định dạng",
      });
    } else if (code.length < 8) {
      this.setState({
        error: "Mã không được nhỏ hơn 8 ký tự",
      });
    } else if (code.length > 18) {
      this.setState({
        error: "Mã không được lớn hơn 18 ký tự",
      });
    } else if (email === "") {
      this.setState({
        error: "Email không được để trống",
      });
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.setState({
        error: "Email không đúng định dạng",
      });
    } else if (password.length < 8) {
      this.setState({
        error: "Mật khẩu không được nhỏ hơn 8 ký tự",
      });
    } else {
      this.setState({
        error: "Đăng ký thành công",
        code: "",
        email: "",
        password: "",
      });
    }
    console.log(this.state);
  };

  render() {
    const { code, email, password, error } = this.state;
    return (
      <>
        <div className="form">
          <div className="form-toggle" />
          <div className="form-panel one">
            <div className="form-header">
              <h1>Account Sign up</h1>
            </div>
            <div className="form-content">
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="username">Code</label>
                  <input
                    value={code}
                    type="text"
                    id="code"
                    name="code"
                    onChange={this.handleChangeInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Email</label>
                  <input
                    onChange={this.handleChangeInput}
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={this.handleChangeInput}
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                  />
                </div>
                {error && (
                  <p style={{ color: "red", marginBottom: "15px" }}>{error}</p>
                )}
                <div className="form-group">
                  <label className="form-remember">
                    <input type="checkbox" name="password" />
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
