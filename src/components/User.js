import React, { useState } from "react";
const User = (props) =>{
    const [count,setCount] = useState(0)
    const {name, location} = props

    const increaseCount = () =>{
        setCount(count+1)
    }
    return(
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>E-Mail: dheeraj.kushwah@gmail.com</h3>
            <button onClick={increaseCount}>Click me</button>
        </div>
    )
}
export default User;