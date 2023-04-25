import { useEffect, useState, useContext } from "react";
import {useParams, Link} from "react-router-dom"; 
import axios from "axios";
import "./CommentPost.scss";
import { AuthContext } from '../AuthContext/AuthContext';



function CommentPost () {
    let {id} = useParams() 
    const [commentPost, setCommentPost] = useState([])
    const [listOfComments, setListOfComments] = useState([])
    const [newComment, setNewComment] = useState("")
    const {officalState} = useContext(AuthContext);



    useEffect(() => {
        axios.get(`http://localhost:8420/posts/byId/${id}`).then ((res) => {
            // console.log(res.data)
            setCommentPost(res.data)
        }).catch((error) => {
            console.log(error);
        })
        //returning a list of comments related to the post above
        axios.get(`http://localhost:8420/comments/${id}`).then ((res) => {
            // console.log(res.data)
            setListOfComments(res.data)
        }).catch((error) => {
            console.log(error);
        })
    // when adding and referencing 'officalState' from line 14, it would cause the user name
    //to dissapar when logging out. However, you still have to refresh the page for some reason.
    // The reason I believe is that there is a conflict between the web API and the authentation process
    },[{officalState}])
    // with the array it runs once, instead of running unlimitedly 

    const postComment = () => {
        axios.post("http://localhost:8420/comments", 
        {commentSection: newComment, PostId: id},
        {
            headers: {
                accessToken:localStorage.getItem("accessToken"),
            },
        }
        )
        .then((res) => {
            // console.log("comment approved")
            if (res.data.error){
                console.log(res.data.error)
            } else {
                const addNewComment = {commentSection: newComment, username: res.data.username }
                setListOfComments([...listOfComments, addNewComment ])
                setNewComment("")

            }
        }).catch((error) => {
            console.log(error);
        })
    }

    const deleteComment = (id) => {

        axios.delete(`http://localhost:8420/comments/${id}`, {
            headers: { accessToken: localStorage.getItem("accessToken")},
        }). then(() => {
            setListOfComments(listOfComments.filter((post) => {
                return post.id != id; 
            }))
            console.log('token deleted'); 
        })

    }
    

    return(
        <div className = "commentPage">
            {/* More info on Comment:
            {id} */}

            <div className = "commentPage__return">
                <p className= 'commentPage__return-text'> 
                    <Link to ="/createcomment">Return Page </Link>
                </p>
            </div>
            <div className= "commentPage__left-side">
                <div className="commentPage__title">{commentPost.title}</div>
                <div className="commentPage__postText">{commentPost.postText}</div>
                <div className="commentPage__username">- {commentPost.username}</div>
            </div>
            <div className= "commentPage__right-side">
                <div className="commentPage__comment-section">
                    {/* we need to create a state for the button */}
                    <input 
                        type="text" 
                        placeholder="place comment"
                        className="commentPage__comment-text"
                        value={newComment}
                        onChange={(e) => {setNewComment(e.target.value)}}
                        
                        />
                    <button className="commentPage__btn" onClick={postComment}>Add Comment</button>
                </div>
                    {/* this will be copy and paste in the nutritionPage in order 
                    to make comments */}
                    <div className="commentPage__map-comments">
                        
                        {listOfComments.map((comment, index) => {
                            return(
                                <div key= {index} className="commentPage__list-of-comments">
                                    <div className = "commentPage__post-comment">
                                        {comment.commentSection}
                                    </div>

                                    <div className ="commentPage__username">
                                        <label className="commentPage__username-tag"> 
                                            - {comment.username}
                                            
                                        </label>
                                    </div>
                                    {/* the name is mispelled */}
                                    {/* {officalState.username === comment.usename && 
                                       ( <button 
                                            onClick= {() => {
                                                deleteComment(comment.id);
                                            }}
                                            >X
                                        </button>)} */}

                                </div>
                            )
                            
                        })}
                    </div>
                    
                
            </div>
        </div>
    )
}

export default CommentPost; 