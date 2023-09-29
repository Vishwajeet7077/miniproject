import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
 
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
 
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsSmallScreen]);
  
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed h-full w-64 bg-blue-500 mt-19 text-white transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 ${ isSmallScreen ? 'visible' : 'invisible'} `}
      >
        <ul className="pt-6 space-y-2">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-blue-600">Home</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-blue-600">About</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-blue-600">Services</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-blue-600">Contact</a>
          </li>
        </ul>
      </div>
      
      {/* Navbar */}
      <nav className="bg-blue-500 p-4 h-18">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-xl">My Navbar</div>
            {isSmallScreen ? (
              <a
                onClick={toggleSidebar}
                className="text-white hover:text-gray-300 p-0 rounded-md sm:hidden"
              >
                Menu
              </a>
            ) : (
              <ul className="hidden sm:flex space-x-4">
                <li>
                  <a href="#" className="text-white hover:text-gray-300">Home</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">About</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">Services</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">Contact</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
