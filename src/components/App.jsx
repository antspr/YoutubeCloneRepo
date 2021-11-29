import React, { Component } from 'react';
import Comments from './Comments/Comments';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import RecommendedVideos from './RecommendedVideos/RecommendedVideos';
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
    
    };


    
    getRecommended = (props) => {} // Youtube API


    
    async getComments(){
        try {
            let response = axios.get(' http://127.0.0.1:8000/Comments');
            this.setState ({
                comments : response.data.comments
            })
            
        }
        catch (ex){
            console.log('Error in API call');
        }
    }
    async getReplies(){ // Our Backend
        try {
            let response =  axios.get(' http://127.0.0.1:8000/Replies');
            this.setState ({
                comments : response.data.replies
            })
            
        }
        catch (ex){
            console.log('Error in API call');
        }
    }
    getRecommended = (props) => { // Youtube API

        return
    }

    
    render(){ 
        
        return ( 
            <div>
                <VideoPlayer/>
                <Comments/>
                <RecommendedVideos/>
            </div>
         );
    };
}
 
export default App ;



