const bubbleChartOptions = {
    scales: {
        yAxes: [
            {
                position: 'left',
                scaleLabel: {
                    display: true,
                    labelString: 'Population Growth (%)',
                }
            },
        ],
        xAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: 'Population Density',
                }
            }
        ],
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem:any, data:any) {
            let label = data.datasets[tooltipItem.datasetIndex].label + ': ' || '';
                  return label += tooltipItem.yLabel;
           }
        }
    }

};

export { bubbleChartOptions };