
function f_summary_pie(chart_data, chart_labels) {
    return {
        type: 'pie',
        data: {
            datasets: [{
                data: chart_data,
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    'rgb(153, 102, 255)'
                ],
                label: 'Dataset 1'
            }],
            labels: chart_labels
        },
        options: {
            responsive: true,
            aspectRatio: 1,
            // legend: false,
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }
        }
    };
}
