
import React, { useState } from 'react';
import tourSpotsFakeData from '../../fakeData/tourspots/Index';
import SingleArea from '../singleArea/SingleArea';
import './Home.css'


const Home = () => {


    const tourSpots = tourSpotsFakeData;

    const [areas, setAreas] = useState(tourSpots);


    return (
        <div className="d-flex justify-content-center courses">

            {
                areas.map(spot => <SingleArea key={spot.id} spots={spot} />)

            }

        </div>
    );
};

export default Home;