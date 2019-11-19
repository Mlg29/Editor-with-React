import React from "react"
import "./preview.css"

function Preview(props) {
    return (
        <textarea className="preview"
            value={props.writedown}
            onChange={props.onChange}
            type="text"
        />
    )
}



export default Preview