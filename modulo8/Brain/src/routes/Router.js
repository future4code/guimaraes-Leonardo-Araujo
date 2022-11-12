import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiaDeSortePage from "../Pages/DiaDeSortePage/DiaDeSortePage";
import LotofacilPage from "../Pages/LotofacilPage/LotofacilPage";
import LotoManiaPage from "../Pages/LotoManiaPage/LotomaniaPage";
import MegaSenaPage from "../Pages/MegaSenaPage/MegaSenaPage";
import QuinaPage from "../Pages/QuinaPage/QuinaPage";
import TimeManiaPage from "../Pages/TimeManiaPage/TimeManiaPage";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element ={<MegaSenaPage/>} />
                <Route path='/LotofacilPage' element={<LotofacilPage/>} />
                <Route path='/LotoManiaPage' element={<LotoManiaPage/>} />
                <Route path = '/TimeManiaPage' element={<TimeManiaPage/>}/>
                <Route path = '/DiaDeSortePage' element={<DiaDeSortePage />}/>
                <Route path = '/QuinaPage/' element={<QuinaPage/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router;