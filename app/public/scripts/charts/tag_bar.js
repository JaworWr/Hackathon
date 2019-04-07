function f_tag_bar(chart_data){
    return {
        type: 'bar',
        data: {
            datasets: [{
                data: chart_data,
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                ],
                // label: 'Food'
            }],
            labels: [
                'You',
                'Friends',
                'Local',
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
                }],
                yAxes:[{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    };
}

var tag_bar =  {
    type: 'bar',
    data: {
        datasets: [{
            data: [
                // randomScalingFactor(),
                // randomScalingFactor(),
                // randomScalingFactor(),
            ],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
            ],
            // label: 'Food'
        }],
        labels: [
            'You',
            'Friends',
            'Local',
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
