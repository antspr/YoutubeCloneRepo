import React, { Component } from 'react';
 import Comment from './Comments/Comment';
import VideoPlayer from './Video/VideoPlayer';


class App  extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    
    render() { 
        debugger
        return ( 
            <div>
                <VideoPlayer/>
                <Comment/>
            </div>
         );
    }
}
 
export default App ;



