// chart custom

const { defaultsDeep } = require("lodash");

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

//Start Tooltip
var customTooltips = function(tooltip) {
    $(this._chart.canvas).css('cursor', 'pointer');

    var positionY = this._chart.canvas.offsetTop;
    var positionX = this._chart.canvas.offsetLeft;

    $('.chartjs-tooltip').css({
        opacity: 0,
    });

    if (!tooltip || !tooltip.opacity) {
        return;
    }

    if (tooltip.dataPoints.length > 0) {
        tooltip.dataPoints.forEach(function(dataPoint) {
            var content = [dataPoint.xLabel, dataPoint.yLabel].join(': ');
            var $tooltip = $('#tooltip-' + dataPoint.datasetIndex);

            $tooltip.html(content);
            $tooltip.css({
                opacity: 1,
                top: positionY + dataPoint.y + 'px',
                left: positionX + dataPoint.x + 'px',
            });
        });
    }
};
//Stop Tooltip

var color = Chart.helpers.color;
var lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
        label: '12 Mar',
        backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
        borderColor: window.chartColors.blue,
        pointBackgroundColor: window.chartColors.blue,
        // backgroundColor: ['rgba(0, 202, 209, 0.2)'],
        // borderColor: ['#00CAD1'],
        // pointBackgroundColor: ['#00979D'],
        data: [10, 24, 37, 15, 29, 37, 48],
    }, {
        label: 'Today',
        backgroundColor: color(window.chartColors.primary).alpha(0.2).rgbString(),
        borderColor: window.chartColors.primary,
        pointBackgroundColor: window.chartColors.primary,
        // backgroundColor: ['rgba(122, 62, 251, 0.2)'],
        // borderColor: ['#7A3EFB'],
        // pointBackgroundColor: ['#5B2EBC'],
        data: [32, 30, 17, 25, 25, 30, 22],
    }]
};



//pieChart
// DEMO https://www.chartjs.org/docs/latest/charts/doughnut.html

var active = $('#active').text();
var complete = $('#complete').text();
var cancel = $('#cancel').text();
var pieData = [{
    data: [active, complete, cancel],

    backgroundColor: [
        window.chartColors.primary,
        window.chartColors.success,
        window.chartColors.danger
    ],
    borderColor: "#fff",
}];


var ctx = document.getElementById("pieChartHome").getContext('2d');
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