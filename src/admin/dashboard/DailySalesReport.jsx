import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DailySalesReport = ({sales}) => {
    const salesData = sales;
    const data = useMemo(() => {
        const groupedByDay = salesData.reduce((acc, { date, totalAmount }) => {
            const day = date.split('T')[0];
            if (!acc[day]) {
                acc[day] = { totalAmount: 0, name: day };
            }
            acc[day].totalAmount += totalAmount;
            return acc;
        }, {});


        return Object.values(groupedByDay).sort((a, b) => new Date(a.name) - new Date(b.name));
    }, [salesData]);

    return (
        <div style={{ width: '100%', height: 500 }}>
            <h2 className="text-xl">Daily Sales Report</h2>
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
                    <Line type="monotone" dataKey="totalAmount" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DailySalesReport;
