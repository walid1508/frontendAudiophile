import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', sales: 4 },
    { name: 'Feb', sales: 9 },
    { name: 'Mar', sales: 1 },
    { name: 'Apr', sales: 4 },
    { name: 'May', sales: 5 },
    { name: 'Jun', sales: 7 },
    { name: 'Jul', sales: 9 },
    { name: 'Aug', sales: 2 },
    { name: 'Sep', sales: 1 },
    { name: 'Oct', sales: 12 },
    { name: 'Nov', sales: 9 },
    { name: 'Dec', sales: 3 },
];

const MonthlySalesReport = () => (
    <div style={{ width: '100%', height: 500 }}>
        <h2 className="text-xl">Monthly Sales Report</h2>
        <ResponsiveContainer>
            <LineChart
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

export default MonthlySalesReport;
