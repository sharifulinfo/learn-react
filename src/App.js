import './App.css';
import BioData from './components/BioData';

const data = [
  {
    name : "Lemon",
    age : 32,
    deparment : "CSE"
  },
  {
    name : "Sakil",
    age : 21,
    deparment : "EEE"
  },
  {
    name : "Jobber",
    age : 45,
    deparment : "IBC"
  },
];

function App() {
  return (
    <div className="App">
      {data.map((getN) => (
        <> 
          <BioData
            name={getN.name}
            age={getN.age}
            deparment={getN.deparment}
          /> 
          <hr/>
        </>
      ))}
      
    </div>
  );
}

export default App;
