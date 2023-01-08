const lineChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scaleShowValues: true,
    scales: {
        yAxes: [
            {
                ticks:{
                    beginAtZero: true,
                },
                position: 'left',
                scaleLabel: {
                    display: true,
                   
                },
            },
        ],
        xAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: 'Year',
                },
            }
        ],
    },
};

export { lineChartOptions };