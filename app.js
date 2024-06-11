import React from "react";
import ReactDOM from "react-dom/client";

// JSX (Transpiled before it reaches the JS) - Parcel - Babel
// JSX => React.createElement => ReactElement(JS Object) => HTMLElement(render)

// React Element
const heading = <h1 id="heading">Namaste React2</h1>;

// React Functional Component

// const HeadingComponent1 = () => (
//   <h1>React Functional Component1</h1>
// );

// const HeadingComponent2 = () => {
//   return <h1>React Functional Component2</h1>;
// };

// const HeadingComponent3 = () => <h1>React Functional Component3</h1>;

// all three HeadingComponent, HeadingComponent2 and HeadingComponent2 are all same
// Mostly we use HeadingComponent1

const title = <h2>Element here</h2>;

const Title = () => <h2>Nested Component here</h2>;

const number = 3500;

const HeadingComponent = () => (
  <div className="container">
    <h1 className="heading">React Functional Component</h1>
    <Title /> {/*Nested Component*/}
    {title} {/*Element*/}
    <h3>{number * 30 * 100}</h3>
  </div>
);

// DOM Element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
