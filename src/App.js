
import movies from './movies.js'
//import BarsChart from "./BarsChart";

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



function App() {


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
                min : -25,
                max : 100
            },
            x: {
                ticks: { color: 'rgba(0, 220, 195)'}
            }
        }
    };
    
    var midata = {
        labels: film,
        datasets: [
            {
                label: 'Duración peliculas',
                data: film,
                backgroundColor: 'rgba(0, 220, 195, 0.5)'
            }
        ]
    };
    

  
let groupFilm1=0
let groupFilm2=0
let groupFilm3=0



    
    let arrayDuration= movies.forEach((film)=>{

        let duration = film.duration  
        let separate= duration.replace(/[^0-9]+/g, " ")
        let hours= separate.substring(0,1)
        let hoursToMinutes= hours*60
        let minutes=separate.substring(1)
        let result= parseInt(hoursToMinutes) + parseInt(minutes)

        if(result<90){
            groupFilm1=groupFilm1+1
            
          }
        
          if(result>90 && result<120){
            groupFilm2=groupFilm2+1
            
          }
        
          if(result > 120){
            groupFilm3=groupFilm3+1
            

          }

          
          
         

    })

    const films=[groupFilm1,groupFilm2,groupFilm3]

    film.push(groupFilm1,groupFilm2,groupFilm3)
    
    
    return (
        <div>
                  
            
           
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"225px"}}>
                <Bar data={midata} options={misoptions} />
                </div>
                

          
            
        </div>
        
        
    );






    
}



 

export default App;