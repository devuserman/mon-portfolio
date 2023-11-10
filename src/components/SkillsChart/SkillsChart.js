import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import './SkillsChart.css';

const SkillsChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const myChart = new Chart(chartRef.current, {
            type: 'bar',
            data: {
                labels: ['HTML', 'CSS/SASS', 'JavaScript', 'Framework React', 'Node.js', 'Express.js'],
                datasets: [{
                    label: 'Mes compétences',
                    data: [95, 80, 75, 80, 70, 70],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y', // Inverser l'axe y
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                    },
                },
                plugins: {
                    legend: {
                        display: false, // Masquer la légende
                    },
                },
                maintainAspectRatio: false, // Permettre au graphique de s'adapter à la taille du conteneur
            }
        });
    
        const handleResize = () => {
            myChart.resize(); // Met à jour la taille du graphique en fonction de la nouvelle taille de la fenêtre
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
            myChart.destroy();
        };
    }, []);
    

    return (
        <div className="skills-chart-container">
            <canvas ref={chartRef} className="mon-canvas" />
        </div>
    );
};

export default SkillsChart;

