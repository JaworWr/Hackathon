function f_summary_spending(chart_data, chart_labels){
    return {
        type: 'bar',
        data: {
            datasets: [{
                data: chart_data,
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
                    }
                }]
            }
        }
    };
}