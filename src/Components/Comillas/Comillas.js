import React, { useEffect, useState } from 'react';
import Comilla from './Comilla';

const Comillas = () => {
    const [spots, setSpots] = useState([]);
    // fetch data from database
    useEffect(() => {
        fetch('http://localhost:5000/travelSpots')
            .then(res => res.json())
            .then(data => setSpots(data.slice(3, 4)))
    }, [])
    return (
        <div>
            {
                <div style={{ backgroundColor: "skyblue" }}>
                    {
                        spots.map(spot => <Comilla key={spot._id} spot={spot}
                        >

                        </Comilla>)
                    }
                </div>
            }
        </div>
    );
};

export default Comillas;