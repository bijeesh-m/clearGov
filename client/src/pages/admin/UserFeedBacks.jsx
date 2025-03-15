import React, { useState, useEffect } from "react";
import axiosInstance from "../../config/axios.config";

function UserFeedBacks() {
    // State to store feedback data
    const [feedbacks, setFeedbacks] = useState([]);
    // State for loading and error handling
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch feedback data on component mount
    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await axiosInstance.get("/admin/feedbacks");
                console.log(response);
                // if (!response.ok) throw new Error("Failed to fetch feedbacks");
                setFeedbacks(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchFeedbacks();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6"> Feedbacks</h1>

                {/* Loading State */}
                {loading && <div className="text-center text-gray-600">Loading feedbacks...</div>}

                {/* Error State */}
                {error && <div className="text-center text-red-600">Error: {error}</div>}

                {/* Feedback Table */}
                {!loading && !error && (
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
                                            Name
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
                                            Email
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
                                            Message
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {feedbacks.length === 0 ? (
                                        <tr>
                                            <td colSpan="3" className="px-4 py-4 sm:px-6 text-center text-gray-500">
                                                No feedback available
                                            </td>
                                        </tr>
                                    ) : (
                                        feedbacks.map((feedback, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 sm:px-6">
                                                    {feedback.name}
                                                </td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 sm:px-6">
                                                    {feedback.email}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-900 sm:px-6">
                                                    <div className="max-w-xs truncate sm:max-w-md lg:max-w-lg">
                                                        {feedback.message}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserFeedBacks;
