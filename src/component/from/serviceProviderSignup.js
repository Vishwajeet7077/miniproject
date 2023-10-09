import React, { useState, useEffect } from "react";

function ServiceProviderForm() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    // Add any necessary logic for useEffect here
  }, []);

  return (
    <form className="max-w-md mx-auto border-2 rounded-xl border-gray-400 p-5 mt-16 shadow-md">
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
        <label htmlFor="serviceProviderPassword" className="block text-gray-600">
          Password
        </label>
        <input
          type="password"
          name="serviceProviderPassword"
          placeholder="Password"
          className="border rounded-xl border-gray-400 p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="serviceProviderEmail" className="block text-gray-600">
          Email
        </label>
        <input
          type="email"
          name="serviceProviderEmail"
          placeholder="Email"
          className="border rounded-xl border-gray-400 p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
     <div className="flex justify-around items-center">
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit
      </button>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Login
      </button>
      </div>
    </form>
  );
}

export default ServiceProviderForm;
