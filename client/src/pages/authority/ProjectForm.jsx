import React, { useState } from "react";
import axios from "../../config/axios.config";

const ProjectForm = () => {
    const [projectDetails, setProductDetails] = useState({
        projectScope: "",
        objectives: "",
        budget: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductDetails({ ...projectDetails, [name]: value });
    };

    const handleCreateProject = (e) => {
        e.preventDefault()
        axios
            .post("/govauth/project", projectDetails)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="flex justify-center items-center ">
            <form onSubmit={handleCreateProject} className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Form</h2>
                <div className="mb-4">
                    <label htmlFor="projectScope" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Scope
                    </label>
                    <input
                        type="text"
                        id="projectScope"
                        name="projectScope"
                        value={projectDetails.projectScope}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter project scope"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="objectives" className="block text-sm font-medium text-gray-700 mb-2">
                        Objectives
                    </label>
                    <textarea
                        id="objectives"
                        name="objectives"
                        rows="4"
                        value={projectDetails.objectives}
                        required
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter project objectives (comma-separated)"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="createdBy" className="block text-sm font-medium text-gray-700 mb-2">
                        Created By
                    </label>
                </div>

                <div className="mb-4">
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget
                    </label>
                    <input
                        type="number"
                        id="budget"
                        name="budget"
                        value={projectDetails.budget}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter budget amount"
                    />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;
