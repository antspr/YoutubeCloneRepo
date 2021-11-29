import React from 'react'
import { useState, useEffect } from 'react';

const VideoPlayer = (props) => {
    const [videoId, SetVideoId] = useState('M7lc1UVf-VE')

    
    useEffect(() => {
        //first thing to be ran when page renders
        changeVideo()
    }, [])//variable inside array determines when the function above will be ran again

    const changeVideo =()=>{
        //give the attached variable a value
        SetVideoId('dQw4w9WgXcQ')
    }
  //recommended video next
  //search videos
  //comments
  //replies

    return ( 
       
        <div>
        {console.log(videoId)}
        <iframe id="ytplayer" type="text/html" width="640" height="360" title="Video"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"></iframe>
        </div>
  );
}
 
export default VideoPlayer;