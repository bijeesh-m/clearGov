import React from "react";

const ContractorProfile = ({ contractor }) => {
    if (!contractor) {
        return <div className="text-center text-gray-600">Loading profile...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Profile Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        {/* Profile Picture */}
                        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                            <img
                                src={contractor.avatar || "https://via.placeholder.com/150"}
                                alt="Profile"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                        </div>
                        {/* Name and Role */}
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-white">{contractor.username}</h1>
                            <p className="text-sm text-blue-200">{contractor.role || "Contractor"}</p>
                        </div>
                    </div>
                </div>

                {/* Profile Details */}
                <div className="p-6">
                    {/* Personal Information */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-600">Email</p>
                                <p className="text-gray-800">{contractor.email}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Phone</p>
                                <p className="text-gray-800">{contractor.phone}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Address</p>
                                <p className="text-gray-800">{contractor.address || "Not provided"}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Date of Birth</p>
                                <p className="text-gray-800">
                                    {contractor.dob ? new Date(contractor.dob).toLocaleDateString() : "Not provided"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Company Information */}
                    {contractor.company && (
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Company Information</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">Company Name</p>
                                    <p className="text-gray-800">{contractor.company.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Company Address</p>
                                    <p className="text-gray-800">{contractor.company.address}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Website</p>
                                    <a
                                        href={contractor.company.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {contractor.company.website}
                                    </a>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Registration Number</p>
                                    <p className="text-gray-800">{contractor.company.registrationNumber}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Certifications */}
                    {contractor.certifications && contractor.certifications.length > 0 && (
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Certifications</h2>
                            <div className="space-y-4">
                                {contractor.certifications.map((certification, index) => (
                                    <div key={index} className="border p-4 rounded-lg">
                                        <p className="text-sm text-gray-600">Certification Name</p>
                                        <p className="text-gray-800">{certification.name}</p>
                                        <p className="text-sm text-gray-600">Issued By</p>
                                        <p className="text-gray-800">{certification.issuedBy}</p>
                                        <p className="text-sm text-gray-600">Valid Until</p>
                                        <p className="text-gray-800">
                                            {new Date(certification.validUntil).toLocaleDateString()}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Edit Profile Button */}
                    <div className="flex justify-end">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractorProfile;