import React, {useState} from "react";
import axios from "axios";
import "./Comments.css"
import 'bootstrap/dist/css/bootstrap.css';

const Comments = (props) => {
    const [newComment, setNewComment] = useState("")
    
    const handleSubmit= (event)=> {
        event.preventDefault();
        props.postNewComment(newComment)
    }

    const handleChange= (event)=> {
        setNewComment(()=>({
            [event.target.name]:event.target.value
        }))
    }
    console.log("Props:", props);
    const displayComment = () => {props.commentDetails.map(comments => (
                       
        console.log(props.commentDetails.comments))
        );
    }



    
    

    return (
        <div className="commentSection">
            <h1>Our Comments</h1>
            <div></div>
            <div className="userComment">
                <h1>VS Youtube'sComments</h1>
                
                <form action="">
                <div class="mb-3">
                    <textarea onChange={handleChange} name="comment" id="comment">
                    Your Comment Here
                    </textarea>
                </div>
                <button onSubmit={handleSubmit} type="submit" value="Submit" class="commentButton">Add Comment<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" class="commentButton" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>
                </button>
                </form>
                
            </div>
        </div>
       
    )
}

export default Comments;