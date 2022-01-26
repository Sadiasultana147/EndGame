import React, { useEffect, useState } from 'react';
import TeaGarden from './TeaGarden';

const TeaGardens = () => {
    const [spots, setSpots] = useState([]);
    // fetch data from database
    useEffect(() => {
        fetch('http://localhost:5000/travelSpots')
            .then(res => res.json())
            .then(data => setSpots(data.slice(1, 2)))
    }, [])
    return (
        <div>
            {
                <div style={{ backgroundColor: "skyblue" }}>
                    {
                        spots.map(spot => <TeaGarden key={spot._id} spot={spot}
                        >

                        </TeaGarden>)
                    }
                </div>
            }
        </div>
    );
};

export default TeaGardens;