import "./CreateComment.scss";
import axios from "axios";
import Comments from "../../components/Comments/Comments";
import {Formik, Form, Field, ErrorMessage } from "formik"; 
import * as Yup from 'yup'; 
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import writingThoughts from '../../Assets/images/writing-thoughts.jpg'


function CreateComment() {
    const [listComments, setListComments] = useState([]); 

    useEffect(() => {
        axios.get("http://localhost:8420/posts").then ((res) => {
            // console.log(res.data); 
            setListComments(res.data)
            // navigate("/createcomment")
        })
    },[])

    let navigate = useNavigate(); 
    // const [listComments, setComments] = useState([])

    const initialValues = {
        title: "",
        postText:"",
        username: ""
    }

    

    const onSubmit = (obj) =>{
        axios.post("http://localhost:8420/posts", obj).then ((res) => {
            // console.log("it works!!!"); 
            // navigate("/createcomment")
            // setComments(res.data)
            axios.get("http://localhost:8420/posts").then ((res) => {
                setListComments(res.data)
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    const validationSchema = Yup.object().shape( {
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required()
    })

    return (
            <div className="createComment">
                <div className = "createComment__title">
                    <h1 className='createComment__text'>
                        Journal 
                    </h1>
                    <img className= 'createComment__photo' src={writingThoughts} />
                    
                </div>
                <Formik
                initialValues ={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema}
                >
                    <Form className="createComment__form">
                        <div className="createComment__top">
                            <label className ="createComment__top-label"> Title: </label>
                            <ErrorMessage name = "title" className="createComment__style-error" component="span"/>
                            <Field
                                className="createComment__top-post"
                                name="title"
                                placeholder="(Ex. Title...)"
                                autoComplete = "off"
                            />
                        </div>

                        <div className="createComment__middle">
                            <label className ="createComment__middle-label"> Comment: </label>
                            {/* name = "postText" */}
                            <ErrorMessage name = "postText" className="createComment__style-error" component="span"/>
                            <Field
                                className="createComment__middle-post"
                                name="postText"
                                placeholder="(Ex. Comment...)"
                                autoComplete = "off"
                            />
                        </div>
                        <div className="createComment__bottom">
                            <label className="createComment__bottom-label"> Username: </label> 
                            <ErrorMessage name = "username" className="createComment__style-error" component="span"/>
                            <Field
                                className="createComment__bottom-post"
                                name="username"
                                placeholder="(Ex. Jason...)"
                                autoComplete = "off"
                            />
                        </div>
                        {/* type="submit" */}
                        <button className="createComment__submit" type="submit"> Create Post</button>
                    </Form>
                </Formik>

                <div className="createComment__display">
                    <Comments
                        listComments = {listComments} 
                    />
                </div>
            </div>
            


    )
}


export default CreateComment; 