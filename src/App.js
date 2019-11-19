import React from 'react';
import Toolbar from "../src/Toolbar"
import Editor from "../src/Editor"
import Preview from "../src/Preview"

import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
        writedown: "Welcome to my text editor",
        editorMax: false,
        previewMax: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleEditorMax = this.handleEditorMax.bind(this)
    this.handlePreviewMax = this.handlePreviewMax.bind(this)
  }

  handleChange(event) {
    this.setState({writedown: event.target.value})
  }
  handleEditorMax() {
    this.setState({
      editorMax: !this.state.editorMax
    })
    
  }
  handlePreviewMax() {
    this.setState({
      previewMax: !this.state.previewMax
    })
    
  }
  render() {
     return (
    <div className="App">
      <div >
       <Toolbar 
            onClick={this.handleEditorMax}
            text="Editor" />
        <Editor
            writedown={this.state.writedown}
            onChange={this.handleChange} />
      </div>
      <div className="converter"></div> 
      <div >
            <Toolbar 
                  onClick={this.handlePreviewMax}
                  text="Preview" />
              <Preview
                  writedown={this.state.writedown}
                  />
      </div>
        
    </div>
    );
  }
  
}

export default App;
