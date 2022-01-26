import React from 'react';
import banner from '../../images/banner.jpeg'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "white", marginBottom: "30%", fontSize: '60px' }}>WELCOME TO TRAVEL WORLD</h5>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src='https://images.pexels.com/photos/3369102/pexels-photo-3369102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "white", marginBottom: "30%", fontSize: '60px' }}>SHARE YOUR TRAVEL EXPERIENCE</h5>

                        </div>

                    </div>
                    <div class="carousel-item">
                        <img src="https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "white", marginBottom: "40%", fontSize: '60px' }}>LOSE YOURSELF IN NATURE</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;