// import { Component } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Lifecycle_Class from "./components/Lifecycle_Comp";
// import FormControlled from "./components/FormControlled";
// import Form_Controlled_C2 from "./components/Form_Controlled_C2";
// import FormUnControlled from "./components/FormUnControlled";

// class App extends Component {
//   // khoi tai constructor
//   constructor(props) {
//     super(props);
//     // khai bao state
//     this.state = {
//       show: false,
//       company: "Rikkei Academy",
//       showForm: false, // state de quyet dinh trang thai cua Form
//     };
//   }

//   handleShow = (e) => {
//     console.log("event", e); //event la 1 su kien mac dinh duoc JS tao ra khi co su kien tu nguoi dung
//     this.setState({
//       show: !this.state.show,
//     });
//   };
//   render() {
//     return (
//       <>
//         {/* khu vuc button */}
//         <button onClick={this.handleShow}>Show</button>
//         <button onClick={() => this.setState({ company: "ABC" })}>
//           Change Props
//         </button>
//         <button
//           onClick={() => this.setState({ showForm: !this.state.showForm })}
//         >
//           Show Form
//         </button>

//         {/* khu vuc hien thi cac component */}
//         {this.state.show === true ? (
//           <Lifecycle_Class company={this.state.company} />
//         ) : (
//           <></>
//         )}
//         {/* hien thi form */}
//         {/* {this.state.showForm ? <FormControlled /> : <></>} */}
//         {/* {this.state.showForm ? <Form_Controlled_C2 /> : <></>} */}
//         {this.state.showForm ? <FormUnControlled /> : <></>}
//       </>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import RegisterForm from "./components/Homework/RegisterForm";
import LoginForm from "./components/Homework/LoginForm";
import IsStaffCodeExist from "./components/Homework/IsStaffCodeExist";
import StaffCodeLength from "./components/Homework/StaffCodeLength";
import SignupForm from "./components/Homework/SignupForm";

export default class App extends Component {
  render() {
    return (
      <>
        {/* <RegisterForm /> */}
        {/* <LoginForm /> */}
        {/* <IsStaffCodeExist /> */}
        {/* <StaffCodeLength /> */}
        {/* <LoginForm /> */}
        <SignupForm />
      </>
    );
  }
}
