
var config_pie = {
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
                "rgb(255, 99, 132)", //red
                "rgb(255, 159, 64)", // orange
                "rgb(255, 205, 86)", // yellow
                "rgb(75, 192, 192)", // green
                "rgb(54, 162, 235)" // blue
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
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

