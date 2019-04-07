function f_last_months(data, labels){
    return {
        type: 'bar',
        data: {
            datasets: [{
                data: data,
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)"
                ],
                label: 'Ostatnie wydatki'
            }],
            labels: labels
        },
        options: {
            scales: {
                xAxes: [{
                    barPercentage: 0.5,
                    // barThickness: 30,
                    maxBarThickness: 100,
                    minBarLength: 10,
                    gridLines: {
                        offsetGridLines: true
                    },
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    };

}