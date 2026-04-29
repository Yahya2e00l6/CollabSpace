
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TaskChart = () => {

    // 1. Imagine fetching this from http://localhost:3000/tasks
    const rawBackendData = [
      { id: 1, status: "Done", createdAt: "2026-04-10" },
      { id: 2, status: "Done", createdAt: "2026-04-12" },
      { id: 3, status: "Pending", createdAt: "2026-04-15" },
      { id: 4, status: "Done", createdAt: "2026-03-20" },
      { id: 5, status: "Pending", createdAt: "2026-03-22" },
    ];

    // 2. TRANSFORM: Count how many "Done" and "Pending" tasks exist
    const counts = {
      Done: rawBackendData.filter(t => t.status === "Done").length,
      Pending: rawBackendData.filter(t => t.status === "Pending").length,
    };

    // 3. MAP to Chart.js format
const chartData = {
  labels: ['Tasks'], // We use one label for the x-axis
  datasets: [
    {
      label: 'Done',
      data: [counts.Done], // Only the "Done" count goes here
      backgroundColor: '#4CAF50',
      borderRadius: 8,
    },
    {
      label: 'Pending',
      data: [counts.Pending], // Only the "Pending" count goes here
      backgroundColor: '#FFC107',
      borderRadius: 8,
    },
  ],
};

  if (!chartData) return <p>Loading Chart...</p>;

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
      <Bar 
        data={chartData} 
        options={{
          responsive: true,
          plugins: {
            legend: { display: true }, // Hide legend since we only have one dataset
            title: { display: true, text: 'Current Task Progress' }
          },
          animation: {
            duration: 1000,
            easing: 'easeOutBounce' // This makes the bars "bounce" into place!
          }
        }} 
      />
    </div>
  );
};

export default TaskChart;