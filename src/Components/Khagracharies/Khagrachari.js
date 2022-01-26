import React from 'react';
import { FaStar } from 'react-icons/fa';

const Khagrachari = (props) => {
    const { _id, name, image, details, rating } = props.spot;
    let starNumber = 0;
    return (
        <div>
            <h1>{name}
                <span className='ms-2 align-items-center' style={{ fontSize: 20 }}>
                    {[...Array(5)].map((star, i) => {
                        starNumber += 1;
                        return <label key={i}>
                            <input style={{ display: 'none' }} type="radio" name="rating" id="" />

                            <FaStar color={starNumber <= rating ? "yellow" : "grey"} />
                        </label>
                    })}
                </span>
            </h1>

            <div >
                <div className='row'  >
                    <div className='col-lg-5 '>
                        <img className='w-75' src={image} alt="" />
                    </div>

                    <div className='col-lg-6 me-2'>
                        <p >
                            {details.slice(0, 904)}
                        </p>
                    </div>
                    <div>{details.slice(904, 2760)}</div>

                </div>
            </div>


        </div>
    );
};

export default Khagrachari;