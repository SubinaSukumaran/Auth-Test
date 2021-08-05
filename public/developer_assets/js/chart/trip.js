var Total = $('#count').val();

var countCompleted = [];
var countCancelled = [];
var month_data = [];
for (i = 1; i <= Total; i++) {

    countCompleted.push($('#completed' + i).text());
    countCancelled.push($('#cancelled' + i).text());
    month_data.push($('#month' + i).text());
}

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: month_data,
        datasets: [{
                label: 'Completed',
                fillColor: "rgba(220,220,220,0.5)",
                backgroundColor: "rgba(46, 44, 211, 0.7)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: countCompleted
            },
            {
                label: 'Cancelled',
                fillColor: "rgba(0,0,0,0.5)",
                backgroundColor: "rgba(215, 44, 44, 0.7)",
                highlightFill: "rgba(0,0,0,0.5)",
                highlightStroke: "rgba(0,0,0,0.5)",
                data: countCancelled
            }
        ]
    },
    options: {

        responsive: false,
        scales: {
            xAxes: [{
                stacked: true,

                gridLines: {
                    display: false
                }

            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                    display: false
                }
            }]
        }
    }
});