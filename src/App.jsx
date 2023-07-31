import { useState } from "react";
import "./App.css";

import Child from "./components/Child";

const App = () => {
  const [num,setNum] = useState(0)
  const handleChange=(newNum)=>{
    setNum(newNum)
  }

  return (
    <div className="App">
      <h1>{num}</h1>
      <Child num={num} onChange={handleChange}/>
      {num <0 ?<p>Why so negative?</p> : ""}
    </div>
  );
};

export default App;