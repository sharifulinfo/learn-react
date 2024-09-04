import { useState } from 'react';
import './App.css';

function App() {
  
  const [luckyNumber,setLuckerNumber] = useState("");
  const [msg,setMsg] = useState("");
  const [userName,setUserName] = useState("");
  const [attempt,setAttempt] = useState(3);
  const [users,setUsers] = useState([]);

  const inputLuckyNumber = (e) => {
    setLuckerNumber(e.target.value);
  }
  const changeUserName = (e) => {
    setUserName(e.target.value);
  }

  const clearLuck = () => {
    setUserName("");
    setLuckerNumber("");
    setTimeout(()=>{
      setAttempt(3);
    },3000)
  }
  const tryLuck = () => {
    let leftAttem = attempt-1;
    setAttempt(leftAttem);
    if(leftAttem > 0 ){
      let currentAttampt = 3-leftAttem;
      let lNumber = getRandomInt();
      console.log(lNumber)
      if(lNumber === parseInt(luckyNumber)){
        setMsg("Congratulation you won with attampt no. " + currentAttampt);
        setUsers([...users,{id:Date.now(),name:userName,won:true,attempt:currentAttampt}]);
        clearLuck()
      }
    }else{
      setMsg("Sorry for your bad luck");
      setUsers([...users,{id:Date.now(),name:userName,won:false,attempt:null}]);
      clearLuck()
    }
  }

  const getRandomInt = (max = 10) => {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="App">

      <div>
      <p>{msg}</p>
        {/* {msg && <p> sdfa {msg}</p>} */}

        <input type="text" value={userName} onChange={changeUserName} />
        <input type="number" value={luckyNumber} onChange={inputLuckyNumber} />

        {attempt > 0 && 
          <button onClick={tryLuck}>Try Your Luck {attempt}</button> 
        }

        {users?.map((u) => (
          <p key={u.id}>{u.name} - {u.won ? u.attempt : "n/a"}</p>
        ))}
        
        
      </div>
      
     
    </div>
  );
}

export default App;
