import React, { useEffect, useState } from "react";
import ProjectList from "../../components/project/ProjectList";
import axios from "../../config/axios.config";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
            .get("/govauth/projects")
            .then((res) => {
                console.log(res);
                setProjects(res.data.projects);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    
    return (
        <div>
            <ProjectList projects={projects} />
        </div>
    );
};

export default Projects;
