import React from "react";
import { Link } from "react-router-dom";

const ProjectList = ({ projects, projectProgress }) => {
    return (
        <div className=" space-y-2 ">
            <h1 className=" text-4xl">Projeccts</h1>
            <div className=" p-5 space-y-2">
                {projects.map((project) => {
                    return (
                        // <div className=" border p-3 md:p-5 rounded  cursor-pointer">
                        //     <h2 className=" text-xl font-bold">Project ID : <span className=" text-red-700">{project._id}</span></h2>
                        //     <h3 className=" text-2xl font-semibold">Project Scope : {project.projectScope}</h3>
                        //     <h1>Objectives :</h1>
                        //     <ul className=" ml-5">
                        //         {project.objectives.map((obj) => {
                        //             return <li className=" list-decimal">{obj}</li>;
                        //         })}
                        //     </ul>
                        // </div>
                        /* From Uiverse.io by jamik-dev */
                        <div
                            key={project._id}
                            className="overflow-hidden before:ease-in-out after:ease-in-out bg-white group cursor-pointer relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#115d45] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#11636c] before:absolute before:top-0 before:left-0"
                        >
                            <h4 className="font-medium text-lg duration-300 group-hover:text-white group-hover:z-[5]">
                                Project ID : {project._id}
                            </h4>
                            <h4 className=" text-2xl duration-300 font-mono font-black group-hover:text-white group-hover:z-[5]">
                                {project.projectScope}
                            </h4>

                            <Link
                                to={`/authority/project/${project._id}`}
                                className="text-[#1D2825] group-hover:z-[5] font-medium duration-300 group-hover:text-white mt-auto flex items-center gap-2 text-sm xl:text-base"
                            >
                                More about
                                <svg
                                    className="w-4 h-4"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectList;
