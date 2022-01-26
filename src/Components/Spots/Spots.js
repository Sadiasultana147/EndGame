import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CoxBazars from '../Cox\'sBazar/CoxBazars';
import Khagracharies from '../Khagracharies/Khagracharies';
import TeaGardens from '../TeaGardens/TeaGardens';
import Comillas from '../Comillas/Comillas'

// import DashBoardContainer from '../DashboardContainer/DashBoardContainer';

import './Spots.css'


const Dashboard = () => {

    const [control, setControl] = useState('coxbazar');


    return (
        <div className="overflow-hidden">



            <div >
                <div class="row ">

                    <div style={{ backgroundColor: "#4C5D7A", }} class=" col-md-3 col-xl-2 px-sm-2 px-0 ">
                        <div style={{ backgroundColor: "#4C5D7A", }} class=" col-md-3 col-xl-2 px-sm-2 px-0 ">
                            <div class="d-flex flex-column align-items-center align-items-sm-start px-3  pt-2 text-white ">
                                <h3 style={{ color: "#76b6c4" }}>Top  Spots</h3>


                                <div >
                                    <li
                                        onClick={() => setControl("coxbazar")}
                                        className=" li "
                                    >
                                        Cox's Bazar
                                    </li>
                                    <li
                                        onClick={() => setControl("teagarden")}
                                        className="li p-2"
                                    >
                                        Tea Garden
                                    </li>
                                    <li
                                        onClick={() => setControl("khagrachari")}
                                        className="li p-2"
                                    >
                                        Khagrachari
                                    </li>
                                    <li
                                        onClick={() => setControl("comilla")}
                                        className="li p-2"
                                    >
                                        Comilla
                                    </li>



                                </div>



                            </div>

                        </div>

                    </div>
                    <div class="col ">



                        <div >

                            {control === "coxbazar" && <CoxBazars></CoxBazars>}
                            {control === "teagarden" && <TeaGardens></TeaGardens>}
                            {control === "khagrachari" && <Khagracharies></Khagracharies>}
                            {control === "comilla" && <Comillas></Comillas>}



                        </div>




                    </div>
                </div>
            </div>
        </div>


    );
};

export default Dashboard;