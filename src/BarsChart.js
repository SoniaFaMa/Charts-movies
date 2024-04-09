
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

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


var duration = ["1:30","2h","3h"];



    
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


export default function BarsChart({film}) {

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

    return (<div>
        <Bar data={midata} options={misoptions} />
        
        </div>)
    
}
