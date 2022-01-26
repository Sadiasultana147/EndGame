import React from 'react';
import './DashBoardContainer.css'

const DashBoardContainer = () => {
    return (
        <div className="overflow-hidden">


            <div  >
                <div style={{
                    backgroundImage: "url('https://www.foodpanda.com/wp-content/uploads/2021/09/%E3%80%90%E6%96%B0%E8%81%9E%E5%9C%96%E7%89%871%E3%80%91foodpanda-%E7%9C%8B%E6%BA%96%E6%B6%88%E8%B2%BB%E8%80%85%E6%B6%88%E8%B2%BB%E5%BD%A2%E6%85%8B%E6%94%B9%E8%AE%8A%EF%BC%8C%E6%8F%90%E4%BE%9B%E9%AB%98%E6%AA%94%E7%83%A4%E8%82%89%E9%A3%9F%E6%9D%90%E3%80%81%E7%B2%BE%E9%81%B8%E7%83%A4%E8%82%89%E9%A4%90%E5%BB%B3%E5%A4%96%E9%80%81%E5%8F%8A%E4%B8%8A%E7%99%BE%E6%AC%BE%E4%B8%AD%E7%A7%8B%E7%A6%AE%E7%9B%92%E5%A4%9A%E5%85%83%E9%81%B8%E6%93%87%EF%BC%8C%E4%B8%A6%E6%90%AD%E9%85%8D%E5%90%84%E9%A0%85%E5%84%AA%E6%83%A0%E4%B8%80%E5%90%8C%E6%85%B6%E4%B8%AD%E7%A7%8B-970x647.jpg')",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",

                    position: "relative",
                    height: "650px",
                    color: "white"

                }}>

                    <h1 className="text" style={{

                        paddingTop: "100px",


                    }} data-aos="fade-right" data-aos-easing="ease" data-aos-delay="800">WELCOME TO YOUR DASHBOARD</h1>
                    <h2 className="text1" data-aos="fade-left " data-aos-easing="ease" data-aos-delay="1500" >Your AccessAbility is here Available</h2>





                </div>
            </div>


        </div>
    );
};

export default DashBoardContainer;

