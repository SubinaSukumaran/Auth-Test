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
var user_total = $('#user-total-trip').text();
var user_complete = $('#user-complete-trip').text();
var user_cancel = $('#user-cancel-trip').text();

var pieData = [{
    data: [user_total,user_complete,user_cancel],

    backgroundColor: [
        window.chartColors.primary,
        window.chartColors.success,
        window.chartColors.danger
    ],
    borderColor: "#fff",
}];


var ctx = document.getElementById("pieChartUser").getContext('2d');
var pieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['Active',"Completed", "Canceled"],
        datasets: pieData
    },
    options: {
        responsive: true,
        tooltips: {
            enabled: false
        },
    },
});
