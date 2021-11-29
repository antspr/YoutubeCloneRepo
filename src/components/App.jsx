import React, { Component } from 'react';
import Comments from './Comments/Comments';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import axios from 'axios';



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
    componentDidMount() {
        this.getComments();
    
    }

<<<<<<< HEAD
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
=======
    getVideo = (props) => { //Youtube API
        return
    }
    getComments = (props) => { // Our Backend
        try {
            let comments = await axios.get(' http://127.0.0.1:8000/Comments');
            
        }
    }
    getReplies = (props) => { // Our Backend
        return
    }
    getRecommended = (props) => { // Youtube API
>>>>>>> 892942ee785d28f00389a539c9b4135c9d6f24e7
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



