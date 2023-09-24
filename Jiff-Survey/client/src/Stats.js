import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const StatisticsDisplay = () => {
    const [data, setData] = useState(null);
    const SERVER_URL = 'http://localhost:3001';
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${SERVER_URL}/statistics`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    if (!data) return <div>Loading...</div>;

    const generateBarData = (questionIndex) => ({
        labels: Object.keys(data.frequencyTable[questionIndex]),
        datasets: [
            {
                label: 'Frequency of Answers',
                data: Object.values(data.frequencyTable[questionIndex]),
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.7)',
                hoverBorderColor: 'rgba(75,192,192,1)',
            }
        ]
    });

    return (
        <div>
            <h2>Statistics</h2>

            <h3>Mean and Mode values:</h3>
            <table style={{ width: '100%', marginBottom: '20px' }}>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Mean</th>
                        <th>Mode</th>
                    </tr>
                </thead>
                <tbody>
                    {data.mean.map((meanValue, idx) => (
                        <tr key={idx}>
                            <td>{`Question ${idx + 1}`}</td>
                            <td>{meanValue}</td>
                            <td>{data.mode[idx]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>Frequency tables:</h3>
            {data.frequencyTable.map((_, idx) => (
                <div key={idx} style={{ marginBottom: '20px' }}>
                    <h4>{`Question ${idx + 1}`}</h4>
                    <Bar data={generateBarData(idx)} />
                </div>
            ))}
        </div>
    );
}

export default StatisticsDisplay;