var summary_spending =  {
    type: 'bar',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 99, 132)",
                "rgb(255, 99, 132)",
                "rgb(255, 99, 132)",
                "rgb(255, 99, 132)",
                "rgb(255, 99, 132)",
                "rgb(255, 99, 132)",
                "rgb(255, 99, 132)",
                "rgb(255, 99, 132)",
                "rgb(255, 99, 132)",
                "rgb(255, 99, 132)",
                "rgb(255, 99, 132)"
            ],
            // label: 'Food'
        }],
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
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
