import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './Details.css'

const Details = () => {
    const { blogId } = useParams();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${blogId}`)
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);
    return (
        <div style={{ backgroundColor: "skyblue" }}>
            <div>
                <img style={{ height: "500px" }} className="w-100" src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image044.jpg" alt="" />
            </div>
            <div className='mt-3'>
                <h2 style={{ color: "white" }}>{blogs.location} Tour</h2>
                <img src={blogs.image1} alt="" />
            </div>
            <div className='row me-3 '>
                <div className='col-lg-8 content-border mb-4 mt-4 ms-5'>
                    <p>{blogs.description}</p>
                </div>
                <div style={{ height: "300px" }} className='col-lg-4 border mb-4 mt-4 w-25 ms-5 '>
                    <div>
                        <span className='me-5' style={{ color: "white", fontSize: 20 }}>Location : </span>
                        {blogs.location}
                        <hr />
                        <span className='ms-5' style={{ color: "white", fontSize: 20 }}>Date : </span>
                        {blogs.date}
                        <hr />
                        <span className='me-4' style={{ color: "white", fontSize: 20 }}>Total Cost : </span>
                        ৳ {blogs.cost}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;