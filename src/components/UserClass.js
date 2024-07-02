import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 1
        };
    }

    render() {
        const { name, location } = this.props
        const { count, count2 } = this.state
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <h1>Count2: {count2}</h1>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>E-Mail: dheeraj.kushwah@gmail.com</h3>
                <button onClick={() => {
                    this.setState({
                        count: count + 1,
                        count2: count2 + 1
                    })
                }}>Click Me</button>
            </div>

        )
    }
}
export default UserClass;