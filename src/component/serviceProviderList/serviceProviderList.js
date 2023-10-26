import React from "react";
import HorizontalCard from "./SubCategory";
import FilterOptions from "../button/filterBtn";
function ServiceProviders() {
  return (
    <>
      <FilterOptions />
      {/* Filter Div */}



    
        <div className="w-[100%] flex flex-col space-y-4 mt-10 ml-5">

          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />

        </div>
      
    </>
  );
}

export default ServiceProviders;