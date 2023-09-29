import React, { useState } from "react";
import tatalogo from './tata.jpg';
import CompanyData from './Data/companies.json'
function Div2() {
    const [data , setData] =useState([]);
    
    return (
        <div className="h-76 border-2 border-slate-400 m-3 flex flex-col">
            <h3 className="h-16 m-4 ml-16 font-bold text-3xl">Companies</h3>
            <div className="w-full h-36 flex place-content-evenly">
                <div className="flex flex-col text-center text-xl font-bold">
                    <div className="w-24 border-2 border-blue-400 h-24">
                        <img src={tatalogo} className="h-full" ></img>
                    <p>Tata</p>
                    </div>
                </div>
                <div className="flex flex-col text-center text-xl font-bold">
                    <div className="w-24 border-2 border-blue-400 h-24">
                        <img src={tatalogo} className="h-full"></img>
                    </div>
                    <p>Tata</p>
                </div>
            </div>
        </div>
    )
}

export default Div2;