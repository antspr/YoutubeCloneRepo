import React from 'react';
import './RecommendedVideos.css';

const RecommendedVideos = (prop) => {

    const handleClick = (event,id,title) => {
        event.preventDefault()
        PaymentResponse.getVideoIdTitle(id,title)
    }

    return(
        <div className="recommendedVideos">
            <h1>Recommended Videos</h1>
            <div className="allRelatedVideos">
                {PaymentResponse.videos.filter(videos => !videos.id.videoId.includes(props.videoId)).map(videos=> (
                    <span>
                        <div class= "relatedVideo">
                        <input type= "image" onClick={(event)=> handleClick(event, videos.id.videoId, videos.snippit.title)} src={videos.snippit.thumbnails.medium.url}
                            width={videos.snippit.thumbnails.medium.width}
                            height={videos.snippit.thumbnails.medium.height} />
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








