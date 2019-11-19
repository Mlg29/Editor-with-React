import React from "react"
import "./editor.css"


function Editor(props) {
    return (
        <textarea className="editor"
            value={props.writedown}
            onChange={props.onChange}
            type="Preview"
        />
    )
}



export default Editor