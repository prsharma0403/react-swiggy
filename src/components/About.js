import User from "./User";
import UserClass from "./UserClass";
import React from "react";



class About extends React.Component{
    constructor(){

        super()

        console.log("parent constructor");
    }

componentDidMount(){
    console.log("componentDidMount parent")
}

    render(){
        console.log("parent render");
        return(
            <div>
                About us page
                <User name={"prashant praveen"} />
                <UserClass name={"prashant praveen class"} />
            </div>
        )
    }
}

export default About;