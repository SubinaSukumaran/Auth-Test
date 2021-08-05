var ctx = document.getElementById('chart1').getContext('2d');
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

