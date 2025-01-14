import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>About</h1>
        {/* <User name={"Dheeraj (function)"} location={"Indore"} /> */}
        <UserClass name={"Dheeraj"} location={"Indore"} />
      </>
    )
  }
}

export default About;
