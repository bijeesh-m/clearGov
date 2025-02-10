import React, { useEffect, useState } from "react";
import Chart from "../../components/tender/Chart";
import axios from "../../config/axios.config";

const TenderDetails = () => {
    const [isFilter, setIsFilter] = useState(false);

    const [filterType, setFilterType] = useState("tenderCategory");

    const [tenders, setTenders] = useState([]);
    const [chartType, setChartType] = useState("pie");

    useEffect(() => {
        axios
            .get(`/tender/filter/${filterType}`)
            .then((res) => {
                console.log(res);
                setTenders(res.data.tenders);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [filterType]);

    const handleFilterChange = (filterType) => {
        setFilterType(filterType);
    };

    return (
        <div className="block">
            <div x-data="{ open : false }">
                <div className="bg-white shadow">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex justify-between gap-2">
                            <div className=" flex overflow-auto whitespace-nowrap">
                                <button
                                    onClick={() => handleFilterChange("tenderCategory")}
                                    className={`flex ${
                                        filterType === "tenderCategory" && "bg-red-500 text-white"
                                    }  items-center px-3 py-1 mr-3 border text-xs font-medium rounded `}
                                >
                                    Tenders By Category
                                </button>
                                <button
                                    onClick={() => handleFilterChange("organisationChain")}
                                    className={`flex ${
                                        filterType === "organisationChain" && "bg-red-500 text-white"
                                    }  items-center px-3 py-1 mr-3 border text-xs font-medium rounded `}
                                >
                                    Tenders By Organisation Chain
                                </button>
                                <button
                                    onClick={() => handleFilterChange("tenderLocation")}
                                    className={`flex ${
                                        filterType === "tenderLocation" && "bg-red-500 text-white"
                                    }  items-center px-3 py-1 mr-3 border text-xs font-medium rounded `}
                                >
                                    Tenders By Location
                                </button>
                                <button
                                    onClick={() => handleFilterChange("tenderType")}
                                    className={`flex ${
                                        filterType === "tenderType" && "bg-red-500 text-white"
                                    }  items-center px-3 py-1 mr-3 border text-xs font-medium rounded `}
                                >
                                    Tenders By Type
                                </button>
                            </div>
                            <div className="">
                                <button
                                    onClick={() => setIsFilter(!isFilter)}
                                    type="button"
                                    className="flex items-center text-gray-700 px-3 py-1 border font-medium rounded"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        className="w-5 h-5 mr-1"
                                    >
                                        <g className="">
                                            <path d="M0 0h24v24H0z" fill="none" className=""></path>
                                            <path
                                                d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
                                                className=""
                                            ></path>
                                        </g>
                                    </svg>
                                    Filter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 py-4 mx-auto">
                <div className="flex">
                    <div className="w-full">
                        <div className="rounded-md p-6  shadow">
                            <div className="mb-2 pb-2">
                                <div className=" flex mb-3 gap-5 items-center">
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-600">Tender chart</h3>
                                        <p className="text-sm text-gray-500">Amount of tenders</p>
                                    </div>
                                    <div className=" tooltip tooltip-right" data-tip="Choose chart type">
                                        <select
                                            onChange={(e) => setChartType(e.target.value)}
                                            className=" shadow cursor-pointer bg border rounded outline-none px-3 py-1"
                                            name="chartType"
                                            id="chartType"
                                            value={chartType}
                                        >
                                            <option value="pie">Pie</option>
                                            <option value="bar">Bar</option>
                                            <option value="area">Area</option>
                                            <option value="radial">Radial</option>
                                        </select>
                                    </div>
                                </div>

                                <Chart chartType={chartType} tenders={tenders} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenderDetails;
