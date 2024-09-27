import React from "react";
import {Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"

function BarChartDashboard({budgetList}){

    return (
        <div className="border rounded-2xl p-5">
            <h2>
                Activity
            </h2>

            <ResponsiveContainer width={'80%'} height={300}>
                <BarChart data={budgetList} margin={{top:7}}>
                    <XAxis dataKey='name'/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey='totalSpend' stackId='a' fill="#4845d2"/>
                    <Bar dataKey='amount' stackId='a' fill="#c3c2ff"/>
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default BarChartDashboard;