import React, { useState, useEffect } from "react";

function ProjectForm() {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        // Add any necessary logic for useEffect here
    }, []);

    return (
        <form className="max-w-md mx-auto border-2 rounded-xl border-gray-400 p-5 mt-16 shadow-md">
            <div className="mb-4">
                <label htmlFor="serviceProviderName" className="block text-gray-600">
                    Date
                </label>
                <input
                    type="date"
                    name="serviceProviderName"
                    placeholder="Enter Name"
                    className="border rounded-xl border-gray-400 p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="serviceProviderEmail" className="block text-gray-600">
                    Type
                </label>
                <input
                    type="email"
                    name="serviceProviderEmail"
                    placeholder="eg. washing machine repairing"
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
                 Images
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

export default ProjectForm;
