import "./Comments.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

function Comments({listComments}) {

    //the api returns a list, hence why the useSate needs to have
    //an empty array bracket
    // const [listComments, setComments] = useState([])

    let navigate = useNavigate(); 

    // useEffect(() => {
    //     axios.get("http://localhost:8420/posts").then ((res) => {
    //         // console.log(res.data); 
    //         setComments(res.data)
    //         // navigate("/createcomment")
    //     })
    // },[])

    return(


        <div>
            {listComments.map ((e, index) => {
                return (
                    <div key={index} className = "createComment__comment" onClick = { () => {navigate(
                        `/commentPost/${e.id}`)}}>
                        {/* <div>{index}</div> 
                        we can also create a link route*/}
                        <div className = "createComment__comment-title"> {e.title}  </div>
                        <div className="createComment__comment-body"> {e.postText} </div>
                        <div className="createComment__comment-userName">- {e.username}</div>
                    </div>

                )
            })}
            </div>
    )
}

export default Comments; 