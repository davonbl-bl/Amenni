import './Header.scss';
import { NavLink } from "react-router-dom";
import {AuthContext} from '../../pages/AuthContext/AuthContext';
import {useState, useEffect} from 'react';
import axios from 'axios';


function Header() {
    const [officalState, setOfficalState] = useState(false)
    const changePages = ({isActive}) => (isActive ? "header__link": "")

    useEffect (() => {
        axios.get('http://localhost:8420/offical/auth', {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }).then((res)=>{
            if (res.data.error){
                setOfficalState(false)
            } else{
                setOfficalState(true)
            }
        })
        // if (localStorage.getItem('accessToken')){
        //     setOfficalState(true)
        // }
    }, [])

    return (

        <header className="header">
            <header className="header__pages">
                <div className = "header__pages-left">
                
                    <NavLink className={changePages} to='/'>
                        <p className='header__details--pages header__details--left'>Home</p>
                    </NavLink>
                    <NavLink className={changePages} to='/search'>
                        <p className='header__details--pages header__details--left'>Search</p>
                    </NavLink>
                    <NavLink className={changePages} to='/createcomment' >
                        <p className='header__details--pages header__details--left'>Journal</p>

                    </NavLink>
                </div>
                <div className = "header__pages-center">
                    <NavLink className={changePages} to='/' >
                        <p className = "header__details--pages header__details--center">
                            Amenni
                        </p>
                    </NavLink>
                </div>
                <div className = "header__pages-right">
                <AuthContext.Provider value={{officalState, setOfficalState}}>
                    {
                        !officalState && (
                        <>
                            <NavLink className={changePages} to='/login' >
                                <p className='header__details--pages header__details--right'>Login</p>
                            </NavLink>
                            <NavLink className={changePages} to='/register' >
                                <p className='header__details--pages header__details--right'>Sign Up</p>
                            </NavLink>
                        </>

                        )
                    }
                </AuthContext.Provider>
                </div>
            </header>
        </header>

    )
}

export default Header; 