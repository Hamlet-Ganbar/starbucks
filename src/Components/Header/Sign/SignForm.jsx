import React, { useState } from 'react'

function SignForm({ label, type, inpId, errorr, clear, show, hide }) {

    const [inputValue, setInputValue] = useState('')
    const [labelposition, setLabelPosition] = useState(false)
    const [showpass, setShowpass] = useState(false)
    const [clearicon, setClearicon] = useState(false)
    const [changeColor, setChangeColor] = useState('black')


    const showHide = () => {
        setShowpass(!showpass)
    }
    const inputBlur = ()=>{
        if (inputValue.length === 0){
            setLabelPosition(true); 
            setClearicon(true)
            setChangeColor("red")
        }
        
        else if(inputValue.length>0){
            setChangeColor("gray")
        }
    }

    const inputHandler=()=>{
        if(inputValue.length>=0){
            setChangeColor('green')
            setLabelPosition(true)
        }  
    }

    const inputchangeHandler=(e)=>{
        setInputValue(e.target.value)
        if(inputValue.length>0){
            setChangeColor('green')
        }
        else if (inputValue.length===0){
            setChangeColor('red')
        }
    }
    return (
        <>
            <div className='username'>
                <label style={{color: changeColor}} className={labelposition ? "user-label" : ""}
                    htmlFor={inpId}>
                    {label}
                </label>
                <input 
                    onFocus={inputHandler}
                    onBlur={inputBlur} 
                    onChange={inputchangeHandler}
                    value={inputValue} id={inpId} type={!showpass ? type :  "text" } />

                <div className='show-icon'>
                     <span onClick={showHide}>{showpass? hide:show}</span> 
                     <span onClick={() => setInputValue("")}> {clearicon && clear}</span>
                </div>

            </div>
            {labelposition ? <span><span className='err-icon'>🗙</span>  {errorr}</span> : ""}

        </>
    )
}

export default SignForm