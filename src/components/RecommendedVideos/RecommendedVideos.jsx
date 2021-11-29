import React from 'react';
import './RecommendedVideos.css';

const RecommendedVideos = (props) => {
<<<<<<< HEAD
    
    const handleClick = (event, id, title, description) => {
=======

    const handleClick = (event,id,title) => {
>>>>>>> 659dd9d21b65d6598a4da9f599efb3a0a65d21d5
        event.preventDefault()
        props.getVideoInfo(id, title, description)
    }
    
    return (
        <div className="recommendedVideos">
            <h1>Recommended Videos</h1>
            <div className="allRelatedVideos">
                {props.videos.filter(videos => !videos.id.videoId.includes(props.videoId)).map(videos => (
                    <span>
<<<<<<< HEAD
                        <div class="relatedVideo">
                        <input type="image" 
                            onClick={(event) => handleClick(event, videos.id.videoId, videos.snippet.title, videos.snippet.description)}
                            src={videos.snippet.thumbnails.medium.url}
=======
                        <div class= "relatedVideo">
                        <input type= "image" alt="" onClick={(event)=> handleClick(event, videos.id.videoId, videos.snippet.title)} src={videos.snippet.thumbnails.medium.url}
>>>>>>> 659dd9d21b65d6598a4da9f599efb3a0a65d21d5
                            width={videos.snippet.thumbnails.medium.width}
                            height={videos.snippet.thumbnails.medium.height} />
                            <div class="relatedVideoTitle">
                                {videos.snippet.title}
                            </div>
                        </div>
                    </span>
                ))}
            </div>
        </div> 
    );
}
 
export default RecommendedVideos;







