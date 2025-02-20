import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const user = useSelector((state) => state.user);
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    
                    <span className="ml-2 text-xl font-semibold text-gray-800">Contractor Dashboard</span>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <a href="/contractor" className="text-gray-700 hover:text-blue-600">
                        Dashboard
                    </a>
                    <a href="/contractor/tenders" className="text-gray-700 hover:text-blue-600">
                        Tenders
                    </a>
                    <a href="/contractor/bids" className="text-gray-700 hover:text-blue-600">
                        My Bids
                    </a>
                    <a href="/contractor/profile" className="text-gray-700 hover:text-blue-600">
                        Profile
                    </a>
                </nav>

                <div className=" w-11 h-11 rounded-full overflow-hidden">
                  <img className=" w-full h-full" src={user.avatar} alt="" />
                </div>
                
            </div>
        </header>
    );
};

export default Header;
