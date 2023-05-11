import React, { useState } from 'react'


function CreateAccountArea({ label, inpId, type, clear, errorr, hide, show, remember }) {
    const [inputValue, setInputValue] = useState('')
    const [labelposition, setLabelPosition] = useState(false)
    const [showpass, setShowpass] = useState(false)
    const [labelColor, setLabelcolor] = useState("")

    const showHide = () => {
        setShowpass(!showpass)
    }
    return (
        <>
            <div className='username'>
                <label className={labelposition ? "user-label" : `${labelColor}`}
                    htmlFor={inpId}>
                    {label}
                </label>
                <input onFocus={() => setLabelPosition(true)}
                    onBlur={() => { if (inputValue === 0) { setLabelPosition(false); setLabelcolor("label-red") } }}
                    onInput={(e) => setInputValue(e.target.value)}
                    value={inputValue} id={inpId} type={!showpass ? type : "text"} />

                <div className='show-icon'>
                    <span onClick={showHide}>{showpass ? hide : show}</span>

                    <span onClick={() => setInputValue("")}> {clear}</span>
                </div>
                
            </div>
            {labelposition || inputValue ? <span><span className='err-icon'>🗙</span>  {errorr}</span> : ""}

            <div className='remember'>{remember}</div>

        </>
    )
}

export default CreateAccountArea