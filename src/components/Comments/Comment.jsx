<<<<<<< HEAD
import React, { Component } from 'react';


class Comment  extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            comment : []
            }
    
        
        
        }
    render() { 
        return ( 
            <div>
                <h1>This will be comments</h1>
=======
import React from 'react'
import "./Comments.css"
import 'bootstrap/dist/css/bootstrap.css';


function Comments(props){
    return (
        <div className="commentSection">
            <div className="userComment">
                <h1>Comments</h1>
                <form action="/html/tags/html_form_tag_action.cfm" method="post">
                <div class="commentBox">
                    <textarea name="comments" id="comments">
                    Your Comment Here
                    </textarea>
                </div>
                <button type="submit" value="Submit" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-right-text" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg></button>
                </form>
                
>>>>>>> 5f7473f180ebd9d0663ff05cec299de51d9a1c73
            </div>
        </div>
       
    )
}

export default Comments;


// class Comment  extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  
//             comment = []
//             }
        
        
//         }
//     render() { 
//         return ( 
//             <div>

//             </div>
//          );
//     }
// }
 
// export default Comment;