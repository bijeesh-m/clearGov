import React from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const SpendAnalysis = () => {
    // Mock data for spend analysis
    const spendData = [
        { month: "Jan", expense: 12000 },
        { month: "Feb", expense: 8000 },
        { month: "Mar", expense: 15000 },
        { month: "Apr", expense: 10000 },
        { month: "May", expense: 20000 },
    ];
    
    return (
        <div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Spend Analysis</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={spendData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="expense" fill="#3b82f6" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SpendAnalysis;
