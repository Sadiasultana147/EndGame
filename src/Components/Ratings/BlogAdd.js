import React from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth'

const BlogAdd = () => {
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const { user } = useAuth();

    console.log(user.email)
    const onSubmit = (data) => {
        fetch("http://localhost:5000/blogs", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    Swal.fire({
                        title: "New Project Added Successfully",
                        showClass: {
                            popup: "animate__animated animate__fadeInDown",
                        },
                        hideClass: {
                            popup: "animate__animated animate__fadeOutUp",
                        },
                    });
                    reset();
                }
            });

        console.log(data);

    };
    return (
        <div>
            <div className=" d-flex justify-content-center mt-4 ">

                <form className="d-flex flex-column  w-50" onSubmit={handleSubmit(onSubmit)}>

                    <input
                        className="input-field , w-auto "
                        name="name"
                        value={user?.displayName}

                        {...register("name", { required: true })}
                    />

                    <input
                        className="input-field w-auto d-none "
                        name="text"
                        value={user?.photoURL}

                        {...register("photoURL")}
                    />


                    <br />
                    <br />
                    <input
                        className="input-field w-auto "
                        name="location"
                        placeholder='Location'

                        {...register("location", { required: true })}
                    />
                    <br />

                    <input
                        className="input-field w-auto "
                        name="date"
                        placeholder='Date'

                        {...register("date", { required: true })}
                    />
                    <br />

                    <input
                        className="input-field w-auto "
                        name="cost"
                        placeholder='Cost'

                        {...register("cost", { required: true })}
                    />

                    <br />


                    <textarea
                        className="input-field w-100 mt-2"
                        name="description"
                        placeholder="Description"
                        {...register("description", { required: true })}
                    />
                    <br />

                    <input type="number" min="0" max="5" className="w-100" placeholder="Rating(Out of 5)" defaultValue="" {...register("rating", { required: true })} />
                    <br />
                    <input
                        className="submit-btn btn btn-danger  mb-3"
                        type="submit"
                        value="Submit"
                    />


                </form>

            </div>
        </div>
    );
};

export default BlogAdd;