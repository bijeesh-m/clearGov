import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ projects }) => {
    // Prepare data for the chart
    const data = {
        labels: projects.map((project) => project.projectScope), // Project names
        datasets: [
            {
                label: "Progress (%)",
                data: projects.map((project) => project.progress), // Progress values
                backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue color
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Project Progress",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100, // Progress is out of 100%
                title: {
                    display: true,
                    text: "Progress (%)",
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Projects",
                },
            },
        },
    };

    return (
        <div className="bg-white p-6 w-[50] rounded-lg shadow-lg">
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;