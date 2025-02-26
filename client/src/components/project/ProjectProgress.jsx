import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "../../config/axios.config";

const ProjectProgress = ({ projectId }) => {
    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch project and tender data
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`/govauth/project/${projectId}`);
                console.log(response);
                setProject(response.data.project);
            } catch (error) {
                toast.error("Error fetching project details");
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProject();
    }, [projectId]);

    if (isLoading) {
        return <div className="text-center text-gray-600">Loading project details...</div>;
    }

    if (!project) {
        return <div className="text-center text-gray-600">Project not found.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Project Progress</h1>

                {/* Project Overview */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.projectScope}</h2>
                    <p className="text-gray-600 mb-4">{project.objectives.join(", ")}</p>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                        <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${project.progress}%` }}></div>
                    </div>
                    <p className="text-gray-700 text-sm">
                        Overall Progress: <span className="font-semibold">{project.progress}%</span>
                    </p>
                    <p className="text-gray-700 text-sm">
                        Status: <span className="font-semibold">{project.status}</span>
                    </p>
                </div>
                {/* Tenders */}
                <div className="space-y-6">
                    {project.tenders.map((tender) => (
                        <div key={tender._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            {/* Tender Header */}
                            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                                <h2 className="text-xl font-bold text-white">{tender.workItemDetails.title}</h2>
                                <p className="text-sm text-blue-200">
                                    Status: <span className="font-semibold">{tender.status}</span>
                                </p>
                            </div>

                            {/* Tender Content */}
                            <div className="p-6">
                                <p className="text-gray-700 mb-2">{tender.workItemDetails.description}</p>
                                <p className="text-gray-700 mb-2">
                                    Location: <span className="font-semibold">{tender.tenderLocation}</span>
                                </p>
                                <p className="text-gray-700 mb-2">
                                    Tender Value:{" "}
                                    <span className="font-semibold">${tender.workItemDetails.tenderValue}</span>
                                </p>
                                <p className="text-gray-700 mb-2">
                                    Bid Submission End Date:{" "}
                                    <span className="font-semibold">
                                        {new Date(tender.criticalDates.bidSubmissionEndDate).toLocaleDateString()}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectProgress;
