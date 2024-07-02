import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <h1>About Page</h1>
      </div>
    )
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <h2>This is Namaste React Web Series</h2>
//       {/* <User name={"Dheeraj Kushwah (Function)"} location={"Banglore"}/> */}
//       <UserClass name={"Dheeraj Kushwah (Class)"} location={"Banglore"}/>
//     </div>
//   );
// };

export default About;
