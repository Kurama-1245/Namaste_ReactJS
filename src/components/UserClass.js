import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // count: 0,
            // count2: 0,
            userInfo: {
                name: "Dummy",
                location: "Default",
                blog: "Dummy"
            }
        };
    }

    async componentDidMount() {
        // Api Call
        const data = await fetch('https://api.github.com/users/akshaymarch7')
        const json = await data.json()
        // console.log(json);
        this.setState({
            userInfo: json,
        })
    }

    // componentDidUpdate(){
    //     console.log("componenetDidUpdate Called");        
    // }

    // componentWillUnmount(){
    //     console.log("componenetWillUnmount Called");
    // }

    render() {
        // const { name, location } = this.props
        // const { count, count2 } = this.state
        const { name, location, blog} = this.state.userInfo
        // debugger
        return (
            <div className="user-card">
                {/* <h1>Count: {count}</h1>
                <h1>Count2: {count2}</h1> */}
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Blog: {blog}</h3>
                
                {/* <button onClick={() => {
                    this.setState({
                        count: count + 1,
                        count2: count2 + 2
                    })
                }}>Click Me</button> */}
            </div>

        )
    }
}
export default UserClass;