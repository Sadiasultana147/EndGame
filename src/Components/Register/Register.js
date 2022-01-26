import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Components/Hooks/useAuth';
import './Register.css'



const Register = () => {


    const { hanldeUserInfoRegister, signInWithGoogle, createAccountWithEmailPassword, setUser, setIsLoading, updateName, error, setError } = useAuth();

    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleGetName = (e) => {
        console.log(e.target.value);

        setName(e.target.value)
    }

    const handleGetEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)
        setEmail(e.target.value);
    }

    const handleGetPassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }



    const handleRegistration = (e) => {
        e.preventDefault();
        createAccountWithEmailPassword(email, password)
            .then((res) => {

                setIsLoading(true)
                updateName(name)
                setUser(res.user)

                hanldeUserInfoRegister(email, name, 'POST')
                history.push(url)

            })
            .catch((error) => {
                if (password.length < 6) {
                    setError("password must be six charecters");
                    return;
                }
                else {
                    setError("Already registered");
                    return;
                }
                // ..
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

            <h1 className="mb-3 ">Please Register !</h1>

            <div className=" d-flex justify-content-center">


                <div className=" d-flex justify-content-center mt-4 pt-5 box w-100 m-5 p-5">
                    <form className="d-flex flex-column w-75 form    " onSubmit={handleRegistration}>
                        <input className="p-2" onBlur={handleGetName} placeholder="name" />


                        <input className="p-2 mt-3 " type="email" onBlur={handleGetEmail} placeholder="email" />
                        <input className="p-2 mt-3" type="password" onBlur={handleGetPassword} placeholder="password" />

                        <div><h5 className="pt-3" style={{ color: "red", }}>{error}</h5></div>
                        <input className="p-2 mt-3 register " type="submit" value="REGISTER" />
                    </form>
                </div>

            </div>
            <div className="pt-3 pb-5">
                <button className="google" onClick={handleGoogleLogin}>Google Sign In</button>
                <p className="pt-3"> <h6>Already Signed Up ?</h6><Link to="/login"><strong>Please Login</strong></Link ></p>
            </div>
        </div>
    );
};

export default Register;