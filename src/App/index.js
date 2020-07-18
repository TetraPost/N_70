import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import update from 'immutability-helper';
import Crossroad from '../components/Crossroad/index';





function App(){
  
  const [color, setColor] = useState(1);

  const handlSwitchColor = (ev) => {
    if (color === 3) {
      setColor(color - 2); 
    } else {
      setColor(color + 1)
    }
  }
  
  return(
    <div className="App">
      <header className="App-header">
        <hr/>Click counter: {color}
        {/*<button onClick={handlSwitchColor, () => setCount(count + 1)}>Go</button>*/}
        <button class='btn btn-info' onClick={handlSwitchColor}>Go</button>
        <br/>
        <Crossroad color={ color }/>
      </header>
    </div>
  );
}

export default App;

