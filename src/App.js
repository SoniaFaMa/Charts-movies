import Title from "./Components/Title/Title"
import movies from './movies.js'
import BarsChart from "./Components/BarsChart/BarsChart";
import './App.css'

function App() {


let groupFilm1=0
let groupFilm2=0
let groupFilm3=0

    let duration= movies.forEach((movie)=>{

        let duration = movie.duration  
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

    const movieDuration=[groupFilm1,groupFilm2,groupFilm3]
   

    return (
      
        <div>
             <Title/>
             <BarsChart films={movieDuration}/> 
            
              
            <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"225px"}}>
                
            </div>

        </div>


        
    );
}


export default App;
