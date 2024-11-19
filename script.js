const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar', // Typ wykresu (np. 'line', 'bar', 'pie')
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            label: '',
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: ["hsl(10, 79%, 65%)"],
            borderRadius: 4,
            hoverBackgroundColor: 'hsl(186, 34%, 60%)',
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }]
    },
    options: {
        responsive: true, // Dostosowanie do ekranu
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    title : () => null,
                    label: function(context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                        }
                        return label;
                    }
                },
                displayColors: false,
                userPointStyle: true,
                backgroundColor: 'black',
            },
        },
        scales: {
            y: {
                display: false,
                beginAtZero: true,
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            },
        }
    }
});