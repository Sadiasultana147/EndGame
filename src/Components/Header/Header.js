import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Header.css'


const Header = () => {
    const { control, setcontrol, user, logOut } = useAuth()
    const { isAdmin, setIsAdmin } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data[0]?.role === "admin") {
                    setIsAdmin('admin');
                } else {
                    setIsAdmin('user');
                }
            })
            .finally(() => {
                // setIsLoading(false)
            })
    }, [user?.email]);

    return (
        <div>
            <nav style={{ backgroundColor: "#8B85B3", opacity: 0.7 }} className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmEEKuokKXOfC2f5JPBWYaaONdziR2bymie61y5kUZpfshqj80V1u9JLAQIdbdMgTZRw&usqp=CAU" height="50" alt="CoolBrand" />
                        <span className="ms-3">
                            <strong>
                                <em style={{ color: "blue" }}>Travel Agency</em>
                            </strong>
                        </span>
                    </NavLink>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">

                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-5 ps-5">
                            <NavLink to="/home" className="nav-item nav-link active " style={{ color: "blue", fontSize: "20px" }}>Home</NavLink>


                            <NavLink to="/spots" className="nav-item nav-link" style={{ color: "blue", fontSize: "20px" }}>Top Travel Spots</NavLink>


                        </div>
                        {
                            (isAdmin === "admin") &&
                            <div className="navbar-nav ms-5 ps-5">
                                <NavLink to="/home" className="nav-item nav-link active " style={{ color: "blue", fontSize: "20px" }}>Home</NavLink>


                                <NavLink to="/spots" className="nav-item nav-link" style={{ color: "blue", fontSize: "20px" }}>Top Travel Spots</NavLink>



                                <NavLink to="/manageblogs" className="nav-item nav-link" style={{ color: "blue", fontSize: "20px" }}>ManageBlogs</NavLink>



                                <NavLink to="/makeadmin" className="nav-item nav-link" style={{ color: "blue", fontSize: "20px" }}>Make Admin</NavLink>

                            </div>


                        }
                        {
                            user?.email &&
                            <div className="navbar-nav ">


                                <NavLink to="/addblogs" className="nav-item nav-link" style={{ color: "blue", fontSize: "20px" }}>Post Blog</NavLink>
                            </div>
                        }
                    </div>
                    <div className="navbar-nav ms-auto">

                        {
                            (user.email) ?
                                <div>
                                    <NavLink style={{ fontSize: "20px", color: "white" }} to="/" onClick={logOut} className=" logout  " >
                                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        <span className="ps-1 ">LogOut</span>

                                    </NavLink>
                                    <span className="ms-4" style={{ fontSize: "20px", color: "white" }}> {user?.displayName}
                                        {
                                            (user?.photoURL) ?

                                                <img className="rounded-circle ms-4 w-25" src={user?.photoURL} alt="" />
                                                :
                                                <img style={{ width: 50 }} className="rounded-circle  ms-4" src="https://image.shutterstock.com/image-vector/avatar-man-icon-profile-placeholder-260nw-1229859850.jpg" alt="" />



                                        }
                                    </span>
                                </div>
                                :

                                <div className="navbar-nav ms-auto">
                                    <NavLink to="/register" className="nav-item nav-link pe-5" style={{ color: "white", fontSize: "30px" }}>
                                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        Register</NavLink>



                                    <NavLink to="/login" className="nav-item nav-link "> <button style={{ backgroundColor: "blue", color: "white", fontSize: "30px" }}>

                                        <i class="fa fa-user"></i>
                                        <span class="ps-1">Login</span>
                                    </button></NavLink>

                                </div>
                        }
                    </div>
                </div>
            </nav>

        </div>

    );
};

export default Header;