import React from "react";

const ExpenseReport = () => {
    return (
        <div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Expense Reports</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-2 font-medium">Expense Type</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">Details</label>
                        <textarea
                            placeholder="Enter expense details"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            rows="4"
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Submit Expense Report
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ExpenseReport;
