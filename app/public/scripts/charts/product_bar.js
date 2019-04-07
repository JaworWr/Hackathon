var product_bar =  {
    type: 'horizontalBar',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)"
            ],
            // label: 'Food'
        }],
        labels: [
            'Coffee',
            'Bread',
            'Pizza',
            'Coca-Cola',
            'Butter'
        ]
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
                }
            }]
        }
    }
};
