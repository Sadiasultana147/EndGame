import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import ManageBlog from './ManageBlog';

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])



    //Delete Purchases

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/blogs/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                            const remaining = blogs.filter(blog => blog._id !== id);
                            setBlogs(remaining);
                        }
                    })
            }
        })

    }

    //Handle status

    const handleConfirm = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/updateStatus/${id}`;
                fetch(url, {
                    method: 'put'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('first console', data)
                        if (data.modifiedCount > 0) {
                            Swal.fire("Approved Successfully");

                            fetch('http://localhost:5000/blogs')
                                .then(res => res.json())
                                .then(data => setBlogs(data))
                        }
                    })
            }
        })

    }
    return (
        <div className='body'>
            {
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-1">

                    {
                        blogs.map(blog => <ManageBlog

                            key={blog._id}
                            blog={blog}
                            handleConfirm={handleConfirm}

                            handleDelete={handleDelete}


                        >
                        </ManageBlog>)
                    }
                </div>

            }
        </div>
    );
};

export default ManageBlogs;