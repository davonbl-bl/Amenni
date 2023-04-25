import { AuthContext } from '../AuthContext/AuthContext';
import {useState, useContext} from 'react';
import axios from 'axios';
import './Login.scss';
import { Link, useNavigate, redirect} from 'react-router-dom';


function Login () {
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState("");
    const {setOfficalState} = useContext(AuthContext);

    let navigate = useNavigate();

    // let redirect = redirect(); 

    const login = () => {
        const obj = {
            username: username,
            password: password
        }
        axios.post("http://localhost:8420/offical/login", obj).then((res) =>{
            console.log(res.data)
            if(res.data.error){ 
                console.log(res.data.error)
            } else{
            localStorage.setItem("accessToken", res.data.token)
            setOfficalState({username: res.data.username, id: res.data.id, status: true})
            console.log(setOfficalState(true))
            navigate("/createcomment");
            // return redirect ("/createcomment")

            }
        }).catch((error) => {
            console.log(error);
        })
    }

    return(

        <div className ="login-form">
            <div className= "login-form__container">
                <div className="login-form__title">
                    <h2 className="login-form__text">
                        Login
                    </h2>
                </div>
                <div className="login-form__section">
                    <div className="login-form__left">
                        <label className="login-form__label">Username</label>
                        <input className='login-form__input' type = "text" placeholder="enter username"  onChange= {(e) => {setUsername(e.target.value)}}/>
                    </div>
                    <div className="login-form__right">
                        <label className="login-form__label">Password</label>
                        <input className="login-form__input" type = "password" placeholder="enter password"  onChange= {(e) => {setPassword(e.target.value)}}/>
                    </div>
                    <button className="login-form__btn" onClick = {login}>Login</button>
                </div>

                
            </div>

            <div className="login-form__sign-up">
                <p className="login-form__">
                    No Account? Register <Link to ="/register">Here</Link>
                </p>
            </div>
        </div>
    )
}

export default Login; 