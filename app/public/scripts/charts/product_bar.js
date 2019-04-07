function f_product_bar(chart_data, chart_labels) {
    return {
        type: 'horizontalBar',
        data: {
            datasets: [{
                data: chart_data,
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)"
                ],
                // label: 'Food'
            }],
            labels: chart_labels
        },
        options: {
            legend: {
                display: false
            },

            scales: {
                xAxes: [{
                    barPercentage: 0.5,
                    // barThickness: 30,
                    maxBarThickness: 100,
                    minBarLength: 10,
                    gridLines: {
                        offsetGridLines: true
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    };
}