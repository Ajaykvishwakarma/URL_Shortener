import { useState } from 'react';
import './App.css';

import { InputShortener } from './components/InputSortener';
import {LinkResult} from './components/LinkResult'
function App() {

  const  [inputValue, setInputValue ]  = useState("");

  return (
    <div className="App">
        <InputShortener setInputValue={setInputValue} />
        <LinkResult inputValue={inputValue}/>
    </div>
  );
}


export default App;
