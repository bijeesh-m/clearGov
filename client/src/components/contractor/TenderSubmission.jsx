import React, { useState } from "react";

const TenderSubmission = () => {
    const [tenderData, setTenderData] = useState({
        tenderId: "",
        plan: "",
        budget: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTenderData({ ...tenderData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(tenderData);
        // Add logic for submitting tender data
    };

    return (
        <form onSubmit={handleSubmit} className="p-6  mx-auto  ">
            <h2 className="text-2xl font-semibold mb-4">Submit Tender</h2>
            <label className="block mb-2 text-sm font-medium">Tender ID</label>
            <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="tenderId"
                value={tenderData.tenderId}
                onChange={handleChange}
            />
            <label className="block mb-2 text-sm font-medium">Proposed Plan</label>
            <textarea
                name="plan"
                value={tenderData.plan}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Describe your proposed plan"
            />

            <label className="block mb-2 text-sm font-medium">Proposed Budget</label>
            <input
                type="number"
                name="budget"
                value={tenderData.budget}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Set the budget"
            />

            <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
                Submit Tender
            </button>
        </form>
    );
};

export default TenderSubmission;
