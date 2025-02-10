import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/axios.config";

const BidSubmit = ({ tenderId }) => {
    const [covers, setCovers] = useState({});
    const [numOfCovers, setNumOfCovers] = useState(0);
    const [formData, setFormData] = useState({
        bidAmount: "",
        proposal: "",
        paymentMode: "Online",
        emdAmount: "",
        emdTransactionId: "",
        emdPaymentDate: "",
        bidValidityDays: "",
        covers: [],
        // notes: "",
    });

    // useEffect(() => {
    //     const fetchTenders = async () => {
    //         try {
    //             const response = await axiosInstance.get(`/tender/tender/${tenderId}`);
    //             console.log(response);
    //             if (response.status === 200) {
    //                 setNumOfCovers(response.data.numberOfCovers);
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchTenders();
    // }, []);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        const newCovers = files.map((file) => ({
            coverName: file.name,
            file, // Store the file object for upload
        }));

        setFormData((prevFormData) => ({
            ...prevFormData,
            covers: [...prevFormData.covers, ...newCovers], // Append instead of replace
        }));
    };

    console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            axiosInstance
                .post(`/contractor/tenders/${tenderId}/bid`, formData, { withCredentials: true })
                .then((res) => {
                    console.log(res);
                    setSuccess("Bid submitted successfully!");
                    setFormData({
                        bidAmount: "",
                        proposal: "",
                        paymentMode: "Online",
                        emdAmount: "",
                        emdTransactionId: "",
                        emdPaymentDate: "",
                        bidValidityDays: "",
                        covers: [],
                        // notes: "",
                    });
                })
                .catch((err) => {
                    console.log(err);
                    setError("Failed to submit bid. Please try again.");
                });
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Submit Bid</h2>
            {error && <div className="bg-red-100 text-red-600 p-3 rounded-md mb-4">{error}</div>}
            {success && <div className="bg-green-100 text-green-600 p-3 rounded-md mb-4">{success}</div>}

            <form onSubmit={handleSubmit}>
                {/* Bid Amount */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Bid Amount</label>
                    <input
                        type="number"
                        name="bidAmount"
                        value={formData.bidAmount}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Proposal */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Proposal</label>
                    <textarea
                        name="proposal"
                        value={formData.proposal}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        rows="4"
                        required
                    />
                </div>

                {/* Payment Mode */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Payment Mode</label>
                    <select
                        name="paymentMode"
                        value={formData.paymentMode}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                    </select>
                </div>

                {/* EMD Amount */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">EMD Amount</label>
                    <input
                        type="number"
                        name="emdAmount"
                        value={formData.emdAmount}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* EMD Transaction ID */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">EMD Transaction ID</label>
                    <input
                        type="text"
                        name="emdTransactionId"
                        value={formData.emdTransactionId}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* EMD Payment Date */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">EMD Payment Date</label>
                    <input
                        type="date"
                        name="emdPaymentDate"
                        value={formData.emdPaymentDate}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Bid Validity Days */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Bid Validity (Days)</label>
                    <input
                        type="number"
                        name="bidValidityDays"
                        value={formData.bidValidityDays}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Cover Documents */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Cover Documents</label>
                    <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                    <div className="mt-2">
                        {formData.covers.map((cover, index) => (
                            <div key={index} className="text-sm text-gray-600">
                                {cover.coverName}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Notes */}
                {/* <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        rows="2"
                    />
                </div> */}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    {loading ? "Submitting..." : "Submit Bid"}
                </button>
            </form>
        </div>
    );
};

export default BidSubmit;
