import React, { useState, useEffect } from "react";

function ServiceProviderDetail() {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        // Add any necessary logic for useEffect here
    }, []);

    return (
        <form className="max-w-md mx-auto border-2 rounded-xl border-gray-400 pr-10 pl-10 pt-5 pb-5 mt-10 shadow-md">
            <div className="mb-4">
                <label htmlFor="serviceProviderName" className="block text-gray-600">
                    Enter Name
                </label>
                <input
                    type="text"
                    name="serviceProviderName"
                    placeholder="Enter Name"
                    className="border rounded-xl border-gray-400 p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="serviceProviderUserName" className="block text-gray-600">
                    User Name
                </label>
                <input
                    type="text"
                    name="serviceProviderUserName"
                    placeholder="Enter UserName"
                    className="border rounded-xl border-gray-400 p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="serviceProviderEmail" className="block text-gray-600">
                    Contact Number
                </label>
                <input
                    type="tel"
                    name="serviceProviderEmail"
                    placeholder="Mobile Number"
                    className="border rounded-xl border-gray-400 p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="serviceProviderEmail" className="block text-gray-600">
                    Service Type
                </label>
                <input
                    type="text"
                    name="serviceProviderService"
                    placeholder="eg. Electrician"
                    className="border rounded-xl border-gray-400 p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="serviceProviderEmail" className="block text-gray-600">
                    Skills
                </label>
                <input
                    type="text"
                    name="serviceProviderSkills"
                    placeholder="eg. refgirator reparing , fan reparing"
                    className="border rounded-xl border-gray-400 p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="serviceProviderEmail" className="block text-gray-600">
                    Description
                </label>
                <div className="h-[100%] w-[100%] border rounded-xl border-gray-400 p-2">
                    <textarea
                        name="serviceProviderDescription"
                        placeholder=" Your electrical projects are in capable hands with me, and I look forward to making your electrical systems function flawlessly."
                        className=" w-full h-full focus:outline-none focus:ring focus:border-blue-300 " 
                        
                    />
                </div>
            </div>
            <div className="mb-4 flex items-start">
                <label htmlFor="serviceProviderProfileImage" className="block text-gray-600">
                    Profile Image
                </label>
                <input
                    type="file"
                    accept="image/*"
                    name="serviceProviderProfileImage"
                    className="hidden"
                    id="profileImageInput"
                />
                <label
                    htmlFor="profileImageInput"
                    className="border-2 rounded-xl border-gray-400 p-2 w-24 h-24 text-center cursor-pointer hover:bg-gray-200 ml-[33.33%]"
                >
                    Upload Image
                </label>
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
                Submit
            </button>
        </form>
    );
}

export default ServiceProviderDetail;
