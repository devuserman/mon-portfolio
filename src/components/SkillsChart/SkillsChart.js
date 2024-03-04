import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import './SkillsChart.css';

const SkillsChart = () => {
    const chartRef = useRef(null); // Création d'une référence pour le graphique

    useEffect(() => {
        const myChart = new Chart(chartRef.current, {  // Création d'une nouvelle instance de graphique
            type: 'bar',   // Type de graphique (barres ici)
            data: {
                labels: ['HTML', 'CSS/SASS', 'JavaScript', 'Framework React', 'Node.js', 'Express.js', 'MongoDB', 'API REST', 'CMS/WordPress'], // Libellés des compétences
                datasets: [{
                    label: 'Mes compétences', // Nom du jeu de données
                    data: [90, 80, 60, 70, 50, 50, 50, 50, 70],  // Valeurs des compétences (sur une échelle de 0 à 100)
                    backgroundColor: [ // Couleurs de fond des barres
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [  // Couleurs des bordures des barres
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1    // Largeur de la bordure des barres
                }]
            },
            options: {
                indexAxis: 'y', // Orientation des barres (ici, barres horizontales)
                scales: {
                    x: {
                        beginAtZero: true, // Commencer l'échelle à zéro
                        max: 100, // Valeur maximale de l'échelle
                    },
                },
                plugins: {
                    legend: {
                        display: false, // Masquer la légende
                    },
                },
                maintainAspectRatio: false, // Adapter le graphique à la taille du conteneur
            }
        });
    
        const handleResize = () => {
            myChart.resize(); // Met à jour la taille du graphique en fonction de la nouvelle taille de la fenêtre
        };
    
        window.addEventListener('resize', handleResize); // Écouteur d'événement pour le redimensionnement de la fenêtre
    
        return () => {
            window.removeEventListener('resize', handleResize); // Supprimer l'écouteur d'événement lors du démontage du composant
            myChart.destroy(); // Détruire l'instance du graphique
        };
    }, []); // Utilisation de useEffect pour exécuter le code une seule fois après le montage du composant
    

    return (
        <div className="skills-chart-container">
            <canvas ref={chartRef} className="mon-canvas" />
        </div>
    );
};

export default SkillsChart;

