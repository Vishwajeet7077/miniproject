import axios from "axios";
import icon from './icon/education.png';
import React, { useState, useEffect } from "react";

function Div3() {
    const ServicesMeta = "http://localhost:1000/services";

    const [serviceDiv, setServiceDiv] = useState([]);
    const [errorMessage, setError] = useState('');

    useEffect(() => {
        axios.get(ServicesMeta)
            .then((response) => {
                setServiceDiv(response.data);
            })
            .catch((error) => {
                setError('Error fetching data:', error.message);
            });
    }, []);

    return (
        <div className="flex flex-wrap justify-center items-center gap-12 p-4 bg-customBackground-100 rounded-xl p-10">
            {
               serviceDiv.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center border-2 border-slate-400 p-2 rounded-lg"
                        style={{ minWidth: "120px", maxWidth: "200px" }}
                    >
                        <div className="w-20 h-20 rounded-xl">
                            <img src={icon} alt="Education" className="rounded-xl border-2 h-16 w-16 mx-3 mt-1" />
                        </div>
                        <p className="text-center">{item.id}</p>
                    </div>
                )) 
            }
        </div>
    );
}

export default Div3;
