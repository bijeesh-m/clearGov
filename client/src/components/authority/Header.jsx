import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className=" p-5 flex w-full justify-between bg-slate-100">
                <div className=" text-xl sm:text-2xl md:text-3xl font-bold ">Authority Dashboard</div>
                <nav className=" flex-1 w-full font-semibold ">
                    <ul className=" hidden  w-full sm:flex justify-evenly items-center h-full">
                        <li>
                            <Link to={'/authority/create-tender'}>Create Tender</Link>
                        </li>
                        <li>
                            <Link to={"/authority/projects"}>Projects</Link>
                        </li>
                        <li>
                            <Link to={"/authority/create-project"}>Create project</Link>
                        </li>
                        <li>Bidders</li>
                        <li>Account</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
