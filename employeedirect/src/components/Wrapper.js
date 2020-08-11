import React from "react";
import "./comp.css"

// Function for the wrapper that will go on our page
function Wrapper(props) {
    return (
    <div className="wrapper" {...props} />
    )
}


export default Wrapper;