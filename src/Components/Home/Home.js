import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import './Home.css'

const Home = () => {
    return (
        <div className='body'>
            <div>
                <Banner></Banner>
            </div>
            <div className='mt-4'>
                <Blogs></Blogs>
            </div>
        </div>
    );
};

export default Home;