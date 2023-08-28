import React, { Component } from "react";

export default class IsStaffCodeExist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      staffCode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }
  handleChange = (e) => {
    this.setState({ code: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.code === "") {
      alert("Mã nhân viên không được để trống");
    } else {
      let indexCode = this.state.staffCode.findIndex(
        (code) => code == this.state.code
      );
      if (indexCode != -1) {
        alert("Mã nhân viên đã tồn tại");
      } else {
        alert("Thêm mã nhân viên thành công");
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
    }
  };
  /* Tạo ra một mảng bao gồm danh sách mã nhân viên( tối thiểu 10 mã) Tạo một
        form có một input để nhập dữ liệu và một nút submit để gửi giữ liệu Tạo
        state, binding dữ liệu trên ô input */
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
