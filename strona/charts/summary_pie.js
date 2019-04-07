
function f_summary_pie(data){
    return {
        type: 'pie',
        data: {
            datasets: [{
                data: data,
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
            labels: [
                'Food',
                'Health',
                'Travel',
                'Fun',
                'Alcohol',
                'Clothing'
            ]
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


var summary_pie = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)"
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Food',
            'Health',
            'Travel',
            'Fun',
            'Alcohol'
        ]
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

