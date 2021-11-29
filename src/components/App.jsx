// import React, { Component } from 'react';
// import Comments from './Comments/Comments';
// import VideoPlayer from './VideoPlayer/VideoPlayer';
// import axios from 'axios';



// class App  extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             videoID : [],
//             comments : [],
//             recommendedVideos : [],
//             replies : [],

//          }

//          //VideoID will be set with youtubeAPI to get the video and its details for destructuring throughout the app...
//     }
//     componentDidMount() {
//         this.getComments();
//         this.getReplies();
    
//     }


//      getVideo = (props) => { //Youtube API
//         return
//     }
//      getComments = (props) => { // Our Backend
//         return
//     }
//      getReplies = (props) => { // Our Backend
//         return
//     }
//      getRecommended = (props) => { // Youtube API

//     getVideo = (props) => { //Youtube API
//         return
//     }
//     async getComments(){
//         try {
//             let response = await axios.get(' http://127.0.0.1:8000/Comments');
//             this.setState ({
//                 comments : response.data.comments
//             })
            
//         }
//         catch (ex){
//             console.log('Error in API call');
//         }
//     }
//     async getReplies() { // Our Backend
//         try {
//             let response = await axios.get(' http://127.0.0.1:8000/Replies');
//             this.setState ({
//                 comments : response.data.comments
//             })
            
//         }
//         catch (ex){
//             console.log('Error in API call');
//         }
//     }
//     getRecommended = (props) => { // Youtube API

//         return
//     }

    
//     render() { 
//         debugger
//         return ( 
//             <div>
//                 <VideoPlayer/>
//                 <Comments/>
//             </div>
//          );
//     }
// }
 
// export default App ;



import React, { Component } from 'react';
import TitleBar from './TitleBar/TitleBar';
import SearchBar from './SearchBar/SearchBar';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import Comments from './Comments/Comments';
import axios from 'axios';
import SearchResults from './SearchResults/SearchResults';
import RecommendedVideos from './RecommendedVideos/RecommendedVideos';
import "./App.css";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            resultVideos:[],
            relatedVideos:[],
            videoComments:[]
    }
        this.videoId = "M7lc1UVf-VE";
        this.videoTitle = "YouTube Developers Live: Embedded Web Player Customization"
        this.videoDescription = "Default Video"
}
    getResultVideoList = async (searchFor) => {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAUFW6W2O6Mqz3liLuFKlGvg4H4ITggyGA&kind="video"&part=snippet&maxResults=5&q=' + (searchFor))
        console.log(response.data.items)
        this.setState({
            resultVideos: response.data.items
        })
    }

    getRelatedVideoList = async (videoTitle) => {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAUFW6W2O6Mqz3liLuFKlGvg4H4ITggyGA&kind="video"&part=snippet&maxResults=5&q=' + (videoTitle));
        console.log(response.data.items);
        this.setState({
            relatedVideos: response.data.items
        })
    }

    getVideoComments = async () => {
        let response = await axios.get('http://127.0.0.1:8000/comments/' + (this.videoId) + '/');
        console.log(response.data);
        this.setState({
            videoComments: response.data
        })
    }

    getVideoInfo = (videoId, videoTitle, videoDescription) => {
        this.videoId = videoId;
        this.videoTitle = videoTitle;
        this.videoDescription = videoDescription;
        console.log(this.videoId);
        this.setState({
            resultVideos: []
        });
    }

    componentDidMount() {
        this.getVideoComments();
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="videoCommentsRecommended">
                    <div className="videoComments">
                        <VideoPlayer
                            videoId={this.videoId}
                            videoTitle={this.videoTitle}
                            videoDescription={this.videoDescription}/> 
                        <Comments commentDetails={this.state.videoComments}/>
                    </div>
                    <div className="recommended">
                        <RecommendedVideos 
                            videos={this.state.relatedVideos}
                            videoId={this.videoId}
                            getVideoInfo={this.getVideoInfo}
                            getVideoComments={this.getVideoComments}/>
                    </div>
                </div>
                <SearchBar getVideoList={this.getResultVideoList}/>
                <SearchResults
                    videos={this.state.resultVideos}
                    getRelatedVideoList={this.getRelatedVideoList}
                    getVideoInfo={this.getVideoInfo}
                    getVideoComments={this.getVideoComments}/>
            </div>
        )
    }
}
export default App;