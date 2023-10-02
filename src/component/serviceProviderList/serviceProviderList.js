import React from "react";

function ServiceProviders() {
  return (
    <>
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <span className="font-bold text-2xl">Company Name</span>
            <span className="ml-2">Location</span>


            <input
              type="text"
              placeholder="Search"
              className="rounded px-2 py-1 ml-10"
            />
          </div>
          <div>
            <button className="ml-2 h-8 pb-8 bg-white text-blue-500 px-4 py-2 rounded">
              Login
            </button>
          </div>
        </div>
      </nav>
      <nav className="w-100 border-2 border-slate-400 h-10 mt-5 flex justify-between items-center rounded-2xl mr-8 ml-8  ">
        <p className="ml-5 font-bold text-xl">Top Motor Training Schools in Mumbai</p>
        <button className="w-20 bg-blue-400 h-6 mr-8 rounded-lg text-center  ">All Filter</button>
      </nav>

      {/* Filter Div */}



      <div className="container mx-max mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          <div
            className="bg-white p-4 shadow rounded-lg flex flex-col m-5 border-slate-400 border-2"
          >
            <img
              // src={provider.image}
              // alt={provider.name}
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <h2 className="text-lg font-semibold mt-2">Provider Name</h2>
            <p className="text-gray-500 mb-2">Rating: Rating</p>
            <p className="text-gray-500 mb-2">
              Availability:
            </p>
            <div className="flex justify-start gap-2 boreder-2 ">
              <div className="bg-purple-400 rounded-xl max-w-max pl-2  pr-2 ">React</div>
              <div className="bg-purple-400 rounded-xl max-w-max pl-2  pr-2">MongoDb</div>
            </div>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi fugit optio expedita velit voluptates cumque.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default ServiceProviders;