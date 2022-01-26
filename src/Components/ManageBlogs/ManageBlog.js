import React from 'react';
import useAuth from '../Hooks/useAuth';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ManageBlog = (props) => {
    let starNumber = 0;
    const { _id, status, date, location, review, cost, description, userName, rating } = props.blog
    const { user } = useAuth()
    const { handleConfirm } = props;
    const { handleDelete } = props;
    console.log(props.handleConfirm)
    return (
        <div >
            <div className=" mb-5 ms-3 me-3 mt-4 " >

                <div sclassName="col h-100">
                    <div style={{ backgroundColor: "#C2D0C6" }} className="card ">
                        {
                            user.photoUrl ?

                                <img src={user.photoURL} alt="" className=" w-75 rounded-circle d-flex justify-content-center ms-5  p-5 " />
                                :

                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJz0zNSqnwv8ha0697xUZpBKEnE_sT-jnSwA&usqp=CAU" alt="" className=" w-75 rounded-circle d-flex justify-content-center ms-5 p-5" />
                        }
                        <div className="card-body text-center">
                            <div style={{ fontSize: 30 }} className='card-text text-primary font-weight-bold '  >{user.displayName} </div>


                            <div className='card-text mt-3'  >
                                <span className='text-primary' style={{ fontSize: 20 }}>Location:</span> {location} </div>

                            <div className='card-text mt-3' >  <span className='text-primary' style={{ fontSize: 20 }}>Date:</span> {date}</div>
                            <div className='card-text mt-3' >
                                <span className='text-primary' style={{ fontSize: 20 }}>Total Cost: </span>
                                ৳{cost}</div>
                            <div className='card-text mt-3'>{description.slice(0, 200)}</div>




                            <div className="ms-2">
                                {[...Array(5)].map((star, i) => {
                                    starNumber += 1;
                                    return <label key={i}>
                                        <input style={{ display: 'none' }} type="radio" name="rating" id="" />

                                        <FaStar color={starNumber <= rating ? "yellow" : "grey"} />
                                    </label>
                                })}

                            </div>
                            <p >{review}</p>


                            <h6 className="card-text" > {status}</h6>
                        </div>
                        <div className="pb-5">
                            <div>
                                {
                                    status === "pending" &&
                                    < button onClick={() => handleConfirm(_id)} className="btn" style={{ backgroundColor: "indigo", color: "white" }} >Confirm</button>

                                }
                            </div>
                            <br />
                            <div className='d-flex justify-content-between ms-3 me-3'>
                                <div >
                                    <Link className="link" to={`blogDetails/${_id}`}><button type='button' className='p-2' style={{ borderRadius: "4px", backgroundColor: "skyblue", border: "none", color: "white" }}>
                                        See More...
                                    </button>
                                    </Link>

                                </div>
                                <div  >

                                    <button onClick={() => handleDelete(_id)} className="btn" style={{ backgroundColor: "darkred", color: "white" }}>  <i style={{ color: "white" }} class="fa fa-trash"></i>
                                        <span className="ps-1" style={{ color: "white" }}>DELETE</span></button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div >
        </div>
    );
};

export default ManageBlog;