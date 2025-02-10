import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className=" bg-gray-50 w-full h-fit">
            <div className=" flex px-2 py-2  items-center justify-end">
                {/* <div className="join">
                    <input className="input input-bordered join-item py-1" placeholder="Search" />
                    <button className="btn join-item">Search</button>
                </div> */}

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className=" ">
                        <div className="avatar">
                            <div className=" w-14 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                        <li>
                            <a>Profile</a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
