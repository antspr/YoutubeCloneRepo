import React, { Component } from 'react';
 import Comments from './Comments/Comments';
import VideoPlayer from './Video/VideoPlayer';


class App  extends Component {
    ructor(props) {
        super(props);
        this.state = { 
            videoID : [],
            comments : [],
            recommendedVideos : [],
            replies : [],

         }

         //VideoID will be set with youtubeAPI to get the video and its details for destructuring throughout the app...
    }

     getVideo = (props) => { //Youtube API
        return
    }
     getComments = (props) => { // Our Backend
        return
    }
     getReplies = (props) => { // Our Backend
        return
    }
     getRecommended = (props) => { // Youtube API
        return
    }

    
    render() { 
        debugger
        return ( 
            <div>
                <VideoPlayer/>
                <Comments/>
            </div>
         );
    }
}
 
export default App ;



