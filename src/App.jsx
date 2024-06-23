import { useState } from 'react';
import './App.css'

function App() 
{

  let [counter,setCounter] = useState(15)
  
  // let counter = 5;

  const addValue = () => {
    if(counter < 20)
      {

        counter = counter + 1;
        setCounter(counter);
        console.log("Value added: "+counter);
      }
      else
      {
        // alert("Counter value cannot exceed 20");
        const c = document.createElement('p');
        c.innerHTML = "Counter value cannot exceed 20";
        document.getElementById('root').appendChild(c)
        setTimeout(() => {
           document.getElementById("root").removeChild(c);
        }, 3000);

        


      }
  }
  
  const removeValue = () => {
    if(counter > 0)
      {

        counter = counter - 1;
        setCounter(counter);
        console.log("Value SUBTRACTED: "+counter);
      }
      else
      {
        const c = document.createElement('p');
        c.innerHTML = "Counter value cannot be less than 0";
        document.getElementById('root').appendChild(c)
        setTimeout(() => {
           document.getElementById("root").removeChild(c);
        }, 3000);
      }
    }

  return (
    <>
    <h1>Hooks and React</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add</button>
    <br/>
    <button onClick={removeValue}>Subtract</button>
    </>
  )

}

export default App
