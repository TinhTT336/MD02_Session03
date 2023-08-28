import React, { Component } from "react";
export default class Lifecycle_Class extends Component {
  constructor(props) {
    //giup su dung duoc tu khoa this va cap nhat lai state nen can truyen tham so props
    super(props);
    console.log("Component duoc khoi tao");
    this.state = {
      className: "JV-230630",
    };
  }

  componentWillMount() {
    console.log("Component Will Mount");
  }
  componentDidMount() {
    console.log("Component Did Mount");
  }
  componentWillReceiveProps(newProps) {
    console.log(
      "Component Will Receive Props duoc chay, luc nao props moi la: ",
      newProps
    );
  }

  shouldComponentUpdate() {
    return true; //mac dinh ham nay return true
  }

  componentWillUpdate() {
    console.log("Component will Update duoc chay");
  }
  componentDidUpdate() {
    console.log("Component Did Update duoc goi");
  }
  componentWillUnmount() {
    //thuong duoc su dung de clear su kien
    console.log("Component Will Unmount");
  }
  render() {
    console.log("Component duoc render");
    return (
      <>
        <h4>Ten cong ty o Component con: {this.props.company}</h4>
        <h3>Ten lop:{this.state.className}</h3>
        <button
          onClick={() => {
            this.setState({ className: "HN/JV-230630" });
          }}
        >
          Change State
        </button>
      </>
    );
  }
}
