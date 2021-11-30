import React, {useState} from 'react';
import "./Comments.css"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

const Comments = (props) => {

<<<<<<< HEAD
=======
    const [comment, setComment] = useState(this.comment);
    //need to write this into http://127.0.0.1:8000/comments/ --->>> commentText (Charfield150) on backend
    //where does comment live in relation to video on backend
    const postComment = () => {
        setComment : await axios.put('http://127.0.0.1:8000/comments/')

    }  
>>>>>>> 8af3fc32392ca35751c1641135e9b7dc5e8c2786
    return (
        <div className="commentSection">
            <div className="userComment">
                <h1>Comments</h1>
<<<<<<< HEAD
                    {props.commentDetails.map(comments => (
                        <div>
                            {comments.comment_content}
                        </div>
                    ))}
                <form action="/html/tags/html_form_tag_action.cfm" method="post">
=======
                <form action="submit" method={submitComment}>
>>>>>>> 8af3fc32392ca35751c1641135e9b7dc5e8c2786
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