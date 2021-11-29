import React, { Component } from 'react';
import Comments from './Comments/Comments';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import axios from 'axios';



class App  extends Component {
    constructor(props) {
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
        this.getReplies();
    
    }



    }

    getRecommended = (props) => { // Youtube API

    getVideo = (props) => { //Youtube API
        return
    }
    async getComments(){
        try {
            let response = await axios.get(' http://127.0.0.1:8000/Comments');
            this.setState ({
                comments : response.data.comments
            })
            
        }
        catch (ex){
            console.log('Error in API call');
        }
    }
    async getReplies() { // Our Backend
        try {
            let response = await axios.get(' http://127.0.0.1:8000/Replies');
            this.setState ({
                comments : response.data.comments
            })
            
        }
        catch (ex){
            console.log('Error in API call');
        }
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



