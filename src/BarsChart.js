
 ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        BarElement,
        Title,
        Tooltip,
        Legend,
        Filler
    );
    
    
    
    var film = [];
    var duration = ["1:30h","2h","3h"];
    
    
    var misoptions = {
        responsive : true,
        animation : false,
        plugins : {
            legend : {
                display : false
            }
        },
        scales : {
            y : {
                min : 0,
                max : 160,
            },
            x: {
                ticks: { color: 'rgba(0, 220, 195)'}
            }
        }
    };
    
    var midata = {
        labels: duration,
        datasets: [
            {
                label: 'Duración peliculas',
                data: film,
                backgroundColor: 'rgba(0, 220, 195, 0.5)'
            }
        ]
    };
    