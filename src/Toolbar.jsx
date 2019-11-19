import React from "react"
import "./Toolbar.css"

function Toolbar(props) {
    return (
        <div className="tool-bar">
            <h3 className="tool-text">{props.text}</h3>
           
        </div>
    )
}



export default Toolbar