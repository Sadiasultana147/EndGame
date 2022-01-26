import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    const [description, setDescription] = useState("");
    const [cost, setCost] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");

    // fetch data from database
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    // Updated location
    const handleChange = (e) => {
        return e.target.value;

    }
    const handleUpdatedLocation = e => {

        const updatedLocation = e.target.value;
        const updatedInfo = { location: updatedLocation, date: blogs.date, cost: blogs.cost, description: blogs.description };
        console.log(updatedInfo)

        // setLocation(updatedInfo);
    }
    // Update date
    const handleUpdatedDate = e => {

        const updatedDate = e.target.value;
        const updatedInfo = { date: updatedDate, location: blogs.location, cost: blogs.cost, description: blogs.description };

        setDate(updatedInfo);
    }
    // Update Cost
    const handleUpdatedCost = e => {

        setCost(e.target.value);
    }
    // Update description
    const handleUpdatedDescription = e => {

        setDescription(e.target.value);
    }
    // Update info
    const handleUpdateBlog = (id, e) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/updateInfo/${id}`;
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ description, cost, location, date })

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal('Update Successful');

                            fetch('http://localhost:5000/blogs')
                                .then(res => res.json())
                                .then(data => setBlogs(data))

                        }
                    })


            }
        })


    }



    return (
        <div>
            {
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4  ">
                    {
                        blogs.map(blog => <Blog key={blog._id} blog={blog}

                        // handleUpdatedLocation={handleUpdatedLocation}
                        // handleUpdatedDate={handleUpdatedDate}
                        // handleUpdatedCost={handleUpdatedCost}
                        // handleUpdatedDescription={handleUpdatedDescription}
                        // handleUpdateBlog={handleUpdateBlog}


                        >

                        </Blog>)
                    }
                </div>
            }
        </div>
    );
};

export default Blogs;