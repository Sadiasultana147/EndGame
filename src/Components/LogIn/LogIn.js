import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Components/Hooks/useAuth';
import './LogIn.css'


const LogIn = () => {
    const { hanldeUserInfoRegister, error, setError, signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth();

    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleGetEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleGetPassword = (e) => {
        setPassword(e.target.value);
    }




    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();

        loginWithEmailAndPassword(email, password)
            .then((res) => {
                setIsLoading(true)
                setUser(res.user);
                history.push(url)
                // ...
            })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    setError("Wrong Email")
                }
                else {
                    setError("Wrong Password")

                }
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                const user = res.user;
                hanldeUserInfoRegister(user.email, user.displayName, 'PUT');
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };

    return (
        <div className="body overflow-hidden">

            <div >

                <h1 className="pt-5">Please! LogIn </h1>
                <div className=" d-flex justify-content-center">
                    <div className="d-flex justify-content-center m-5 p-5 mt-4 pt-5 box w-100  ">

                        <form className="d-flex flex-column  w-75 form " onSubmit={handleLoginWithEmailAndPassword}>
                            <input className="p-2 mt-3" type="email" onBlur={handleGetEmail} placeholder="Email" />
                            <br />
                            <input className="p-2 mt-3" type="password" onBlur={handleGetPassword} placeholder="Password" />
                            <br />
                            <br />
                            <div><h5 className="pt-3" style={{ color: "red", }}>{error}</h5></div>
                            <input className="p-2 mt-3   login" type="submit" value="LOGIN" />

                        </form>
                    </div>

                </div>
                <div className="pt-5">
                    <button className=" google" onClick={handleGoogleLogin}>Google Sign In</button>
                    <p className="pt-2 pb-5"> <h6>New User ?</h6><Link to="/register"><strong>Please register</strong></Link ></p>
                </div>
            </div>

        </div>
    );
};

export default LogIn;