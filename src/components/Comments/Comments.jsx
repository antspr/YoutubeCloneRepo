import React, {useState} from 'react';
import "./Comments.css"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

const Comments = (props) => {

    const [comment, setComment] = useState(this.comment);
    //need to write this into http://127.0.0.1:8000/comments/ --->>> commentText (Charfield150) on backend
    //where does comment live in relation to video on backend
    const postComment = () => {
        setComment : await axios.put(http://127.0.0.1:8000/comments/)

    }  
    return (
        <div className="commentSection">
            <div className="userComment">
                <h1>Comments</h1>
                <form action="submit" method={submitComment}>
                <div class="commentBox">
                    <textarea name={comment} id="comment">
                    Your Comment Here
                    </textarea>
                </div>
                <button onClick={setComment} value="Submit" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-right-text" viewBox="0 0 16 16">

                </svg></button>
                </form>
                
            </div>
        </div>
       
    )
}

export default Comments;