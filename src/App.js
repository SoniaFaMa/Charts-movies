import './App.css'
import './barschart.css'
import movies from './movies.js'
import BarsChart from "./BarsChart";

function App() {


  

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
   

    return (
        <div>

        <div className='title'>
          Duración de las peliculas
          
          </div>
            
             <BarsChart film={films}/> 
              
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"225px"}}>
                
                </div>

        </div>


        
    );
}


export default App;
