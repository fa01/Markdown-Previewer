import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked'
import './App.css';


class RawInput extends React.Component {
  update(){
    var val = this.refs.newText.value;
    this.props.updateValue(val);
  }
  render() {
    return (
      <textarea rows = "22" type = "text" ref = "newText" defaultValue = {this.props.value} onChange = {this.update.bind(this)}/>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    }
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(newVal){
    this.setState({
      value: newVal
    })
  }

  markup(val){
    var rawMarkup = marked(val, {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <RawInput value={this.state.value} updateValue={this.updateValue}/>
        </div>
        <div className="col-md-6">
          <span dangerouslySetInnerHTML={this.markup(this.state.value)} />
        </div>
      </div>
    )
  }
}

export default App;
