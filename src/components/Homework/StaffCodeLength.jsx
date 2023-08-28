import React, { Component } from "react";

export default class StaffCodeLength extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      staffCode: [],
    };
  }
  handleChange = (e) => {
    this.setState({ code: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.code === "") {
      alert("Mã nhân viên không được để trống");
    } else if (this.state.code[0] != "N" && this.state.code[1] != "V") {
      alert("Mã nhân viên không đúng định dạng");
    } else if (this.state.code.length < 8) {
      alert("Mã nhân viên không được ngắn hơn 8 ký tự");
    } else if (this.state.code.length > 16) {
      alert("Mã nhân viên không được dài hơn 16 ký tự");
    } else {
      alert("Thêm nhân viên thành công");
      this.setState(
        {
          staffCode: [...this.state.staffCode, this.state.code],
          code: "",
        }
        // () => {
        //   console.log(this.state.staffCode);
        // }
      );
    }
  };
  render() {
    return (
      <>
        <div className="isStaffCodeExist">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>
              StaffCode :
              <input
                value={this.state.code}
                onChange={this.handleChange}
                type="text"
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
}
