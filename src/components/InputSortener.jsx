import { useState } from "react"
import './InputSortener.css'
export const InputShortener = ({setInputValue }) => {
     
    const [ value, setValue ] = useState("");

    const handleClick = () => {
        setInputValue(value)
        setValue("")
    }

    return (
        <div className="inputContainer">
            <h1>URL <span>Shortener</span></h1>
            <div>
                
                <input  className ="InputBox" type="text"  
                    placeholder = "Enter Url..."
                    onChange={(e) => {setValue(e.target.value)}}
                    value = {value} 
                /><br></br><br></br>
                <button id="inputBtn" onClick={handleClick}>Short</button>
                
            </div>
        </div>
    )
}