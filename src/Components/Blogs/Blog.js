import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Blog = (props) => {
    let starNumber = 0;
    const { user } = useAuth()
    const { _id, status, date, location, review, cost, description, userName, rating } = props.blog;
    const { handleUpdatedName } = props;
    const { handleUpdatedLocation } = props;
    const { handleUpdatedDate } = props
    const { handleUpdatedCost } = props;
    const { handleUpdatedDescription } = props;
    const { handleUpdateBlog } = props;

    return (
        <div >
            <div className="me-5 ms-5 mb-5 col  " >
                {
                    status === "Approved" &&
                    <div style={{ border: "none" }} className=" card h-100" >
                        {
                            user.photoUrl ?

                                <img src={user.photoURL} alt="" className=" w-100 p-5" />
                                :

                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJz0zNSqnwv8ha0697xUZpBKEnE_sT-jnSwA&usqp=CAU" alt="" className=" w-100 p-5" />
                        }
                        <div className='card-body'>

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
                            <div className="mt-5">
                                <Link className="link" to={`blogDetails/${_id}`}><button type='button' className='p-2' style={{ borderRadius: "4px", backgroundColor: "skyblue", border: "none", color: "white" }}>
                                    See More...
                                </button>
                                </Link>

                            </div>
                            <div>
                                <button style={{ backgroundColor: "blue", color: "white" }} class="btn " data-bs-toggle="modal" data-bs-target={`#s${_id}`}><i style={{ color: "white" }} class="fas fa-edit me-2"></i>
                                    EDIT
                                </button>
                            </div>
                            <div class="modal fade" id={`s${_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div style={{ backgroundColor: "skyblue" }} class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Edit information of {location} Tour</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form >

                                                <div class="mb-3">
                                                    <label style={{ color: "white", fontSize: 30 }} class="form-label">Location</label>
                                                    <input onBlur={handleUpdatedLocation} type="text" class="form-control" id="location" defaultValue={location} />
                                                </div>
                                                <div class="mb-3">
                                                    <label style={{ color: "white", fontSize: 30 }} class="form-label">Date</label>
                                                    <input onChange={handleUpdatedDate} type="text" class="form-control" id="date" defaultValue={date} />
                                                </div>

                                                <div class="mb-3 ">
                                                    <label style={{ color: "white", fontSize: 30 }} class="form-label" for="cost">Cost</label>
                                                    <input onChange={handleUpdatedCost} type="text" class="form-control" id="cost" defaultValue={cost} />

                                                </div>
                                                <div class="mb-3 ">
                                                    <label style={{ color: "white", fontSize: 30 }} class="form-label" >Details</label>
                                                    <input onChange={handleUpdatedDescription} type="text" class="form-control" id="description" defaultValue={description} />

                                                </div>
                                                <div class="modal-footer d-block">

                                                    <button type="button" onClick={() => handleUpdateBlog(_id)} class="btn btn-primary">Save changes</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                }
                <p >{review}</p>

            </div>


        </div>
    );
};

export default Blog;