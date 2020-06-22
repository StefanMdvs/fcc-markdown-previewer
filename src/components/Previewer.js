import React from 'react';
import ReactMarkdown from 'react-markdown';


const Previewer = (props) => {
    
    return (
        <div>
            
            <ReactMarkdown source={props.text} />
        </div>
    )
}

   export default Previewer;