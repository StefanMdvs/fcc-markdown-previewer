import React from 'react';
import ReactMarkdown from 'react-markdown';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const text = `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**  ... whoa!\n\n
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
   markdownPreview: text
   
 } 
    this.handleChange = this.handleChange.bind(this);
    
  };
  
  handleChange(event) {
     this.setState({
      markdownPreview: event.target.value
     });
   }

render(){
  
  return (
    <Container className="w-100 p-3" style={{backgroundColor: '#eef'}}>
      <h1 class="text-center text-primary">Stefan's Markdown Previewer</h1>
      <Row className="row justify-content-center">
        <Col className="col-6">
          <Form>
            <Form.Group>
            <Form.Control as="textarea" rows="30" cols="50"
            id="editor"
            className=" "
            placeholder="Enter markdown text"
            value={this.state.markdownPreview} 
            onChange={this.handleChange} 
            input={this.state.markdownPreview}
             />
            </Form.Group>
          </Form>
        </Col>
        <Col id="preview" className="col-6 ">
        <ReactMarkdown id="preview" source={this.state.markdownPreview} onChange={this.handleChange}/>
        </Col>
      </Row>
   </Container>
  );
}
} 

export default App;