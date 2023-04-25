import './Header.scss';
import { NavLink } from "react-router-dom";
import { AuthContext } from '../../pages/AuthContext/AuthContext';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Header() {
    const [officalState, setOfficalState] = useState(
        {
            username: "",
            id:0,
            status: false 
        })
    const changePages = ({ isActive }) => (isActive ? "header__link" : "")

    const newAccessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        axios.get('http://localhost:8420/offical/auth', {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            }, 
        }).then((res) => {
            if (res.data.error) {
                setOfficalState({...officalState, status: false})
            } else {
                setOfficalState(
                {
                    username: res.data.username,
                    id: res.data.id,
                    status: true 
                })
            }
        })
        // if (localStorage.getItem('accessToken')){
        //     setOfficalState(true)
        // }
    },[officalState] )

    // I took out the "[]" off, and it seems to have work without causing something hetic with the useEffect

    const logout = () => {
        localStorage.removeItem("accessToken");
        setOfficalState(
            {
                username: "",
                id: 0,
                status: false 
            })
    }


    return (

        <header className="header">
            <header className="header__pages">
                <div className="header__pages-center">
                    <NavLink className={changePages} to='/' >
                        <p className="header__details--pages header__details--center">
                            Amenni
                        </p>
                    </NavLink>
                </div>
                <div className="header__pages-right">
                    <NavLink className={changePages} to='/'>
                        <p className='header__details--pages header__details--left'>Home</p>
                    </NavLink>
                    <NavLink className={changePages} to='/search'>
                        <p className='header__details--pages header__details--left'>Search</p>
                    </NavLink>
                    <NavLink className={changePages} to='/createcomment' >
                        <p className='header__details--pages header__details--left'>Journal</p>
                    </NavLink>
                    <AuthContext.Provider value={{ officalState, setOfficalState }}>
                        {
                            !officalState.status ? (
                                <>
                                    <p className='header__details--pages header__details--left'>
                                        <NavLink className={changePages} to='/login' >
                                            Login
                                        </NavLink>
                                        /
                                        <NavLink className={changePages} to='/register'>
                                            Sign Up
                                        </NavLink>
                                    </p>

                                </>

                            )   : (
                                <button onClick = {logout} className='header__details--button'>
                                    {/* <p className ='header__details--welcome'>welcome {officalState.username}!</p>
                                     /Logout </button> */}
                                     Logout
                                </button>
                            )
                        }
                        <p className ='header__details--welcome'> {officalState.username}</p>
                    </AuthContext.Provider>
                </div>
            </header>
        </header>

    )
}

export default Header; 