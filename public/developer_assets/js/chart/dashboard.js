window.chartColors = {
    gray: '#ABB4B9',
    primary: '#7A3EFB',
    blue: '#18A6F5',
    danger: '#FF3E44',
    orange: '#ff6600',
    warning: '#FFC107',
    success: '#00B41A',
    info: '#00CAD1',
};
// var active = $('#active').text();

// var complete = $('#complete').text();
// var cancel = $('#cancel').text();
// var pieData = [{
//     data: [active, complete, cancel],

//     backgroundColor: [
//         window.chartColors.primary,
//         window.chartColors.success,
//         window.chartColors.danger
//     ],
//     borderColor: "#fff",
// }];


// var ctx = document.getElementById("pieChart2").getContext('2d');
// var pieChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         // labels: ['Active',"Completed", "Canceled"],
//         datasets: pieData
//     },
//     options: {
//         responsive: true,
//         tooltips: {
//             enabled: false
//         },
//     },
// });



var ctx = document.getElementById('dashboard-booking').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'],
        datasets: [{
            label: 'Today',
            data: [12, 19, 3, 17, 6, 3, 7],

            backgroundColor: "rgba(122, 62, 251,0.8)"
        }, {
            label: 'Feb 26',
            data: [2, 29, 5, 5, 2, 3, 10],
            //   borderDash: [10,5],
            backgroundColor: "rgba(0, 202, 209,0.8)"
        }]
    },
    options: {
        scales: {
            xAxes: [{

                gridLines: {
                    display: false
                }

            }],
            yAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    }
});