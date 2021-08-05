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
var driver_total = $('#driver-total-count').text();
var driver_complete = $('#driver-complete-count').text();
var driver_cancel = $('#driver-cancel-countl').text();
var pieData1 = [{
    data: [driver_total,driver_complete,driver_cancel],

    backgroundColor: [
        window.chartColors.primary,
        window.chartColors.success,
        window.chartColors.danger
    ],
    borderColor: "#fff",
}];


var ctx = document.getElementById("pieChartDriver").getContext('2d');
var pieChart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['Active',"Completed", "Canceled"],
        datasets: pieData1
    },
    options: {
        responsive: true,
        tooltips: {
            enabled: false
        },
    },
});