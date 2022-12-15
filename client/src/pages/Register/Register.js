import './Register.scss';
import {Formik, Form, Field, ErrorMessage } from "formik"; 
import * as Yup from 'yup'; 
import axios from "axios";
import {Link} from 'react-router-dom'


function Register () {

    const initialValues = {
        username: "",
        password:""
    }

    const validationSchema = Yup.object().shape( {
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(5). max(25).required()
    })

    const onSubmit = (obj) => {

        axios.post("http://localhost:8420/offical", obj).then (() => {
            console.log(obj)
        }).catch((error) => {
            console.log(error);
        })



    }


    return(
        <div className="sign-up">
            <div className="sign-up__title">
                <h2 className="sign-up__text">
                    Sign Up
                </h2>
            </div>
            <Formik
                // this is used in reference to Yup, I need to 
                //figure out if I want to used formik
                //or just used a regular form to
                //keep my libraries limited 
                initialValues ={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema}
                >
                    <Form className="sign-up__form">
                        <div className="sign-up__top">
                            <label className="sign-up__label"> Username </label>
                            <ErrorMessage name = "username" component="span"/>
                            <Field
                                className="sign-up__field"
                                type="text"
                                name="username"
                                placeholder="type username"
                            />
                        </div>
                        <div className="sign-up__bottom">
                            <label className="sign-up__label"> Password </label>
                            <ErrorMessage name = "password" component="span"/>
                            <Field
                                className="sign-up__field"
                                type="password"
                                name="password"
                                placeholder="type password"
                                autoComplete= "current password"
                            />
                        </div>
                        <button className="sign-up__btn" type="submit"> Sign Up</button>

                    </Form>
                </Formik>

                <div className="login-form__sign-up">
                    <p className="login-form__">
                        Have an account? Login <Link to ="/login">Here</Link>
                    </p>
                </div>
        </div>
    )
}

export default Register; 