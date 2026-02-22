import { useState } from "react"
import "./App.css"
import workoutData from "../workoutPlan.json";
function App() {
  const [height,setHeight]=useState("")
  const [weight,setWeight]=useState("")
  const [result,setResult]=useState("")
  const [gender, setGender] = useState("");
  const [age,setage]=useState("")
  const[go,setgo]=useState("")

  function BMI()
  {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);
    if (!h || !w) {
      alert("Please enter valid height and weight");
      return;
    }
    
    const b = w / (h * h);
    
    let BMR;
    if(gender=="male")
    {
    BMR=(10*w)+(6.25*100*h)-(5*a)+5
    }
    else
    {
    BMR=(10*w)+(6.25*100*h)-(5*a)-161
    }
    
    
    if (b<=18.5)
    {
      setResult('underweight')
      
      setgo("Calorie intake required for weight gain : "+(BMR+300)+" kcal")
    }
    else if(b<=24.9)
    {
      setResult('Normal')
      
    }
    else if(b<29.9)
    {
      setResult('overweight')
      
      setgo("Calorie intake required for weight Loss : "+(BMR-500)+" kcal")
    }
    else 
    {
      setResult('obese')
      
      setgo("Calorie intake required for weight loss : "+(BMR-500)+" kcal")
      
    }
  }
  return (
    <div >
      <h1>FitForge</h1>
      <br /><br />
  <div className="container">
    <div className="container1">
      <label className="weight">
        Input Weight :
        <input type="number" 
        placeholder="Enter Weight in Kg" 
        value={weight} 
        onChange={(e)=>{setWeight(e.target.value)}} />
        </label>
        <br /><br />
        <label className="height" >
          Input Height :
        <input type="number" 
        placeholder="Enter Height in m" 
        value={height} 
        onChange={(e)=>{setHeight(e.target.value)}}/>
        </label>
        <br /><br />
        <label className="male">
          <input type="radio"
          value="male"
          checked={gender=="male"} 
          onChange={(e)=>setGender(e.target.value)}/>
          Male
        </label>
        <label className="female">
        <input type="radio"
          value="female"
          checked={gender=="female"} 
          onChange={(e)=>setGender(e.target.value)}/>
          Female
          </label>
          <br /><br />
          <label className="age">
            Age: 
            <input type="number"
            value={age} 
            placeholder="Enter your age here "
            onChange={(e)=>setage(e.target.value)}/>
          </label>
          <br /><br />
        <button onClick={BMI}> Check </button>
        </div>
    <div className="container2">
      <p className="p1">your Result : {result}</p>
      <br />
      <p className="p1"> {go}</p>
      <br />
      <h3> Workout Plan for 7 days : </h3>
      <br /><br />
  { workoutData[result]?.weekPlan && (
  workoutData[result].weekPlan.map((day, index) => (
    <div key={index}>
      
      <h4>{day.day} - {day.focus}</h4>
    </div>
  ))
)}
    </div>
  </div>
  </div>
  )
}

export default App
