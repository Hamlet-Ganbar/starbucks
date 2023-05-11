import React from 'react'
import CreateAccountArea from './CreateAccountArea'
import { nanoid } from 'nanoid'

function CreateAccount({ inputs, title }) {

    return (
        <>
            <h3 className='join-title '>{title}</h3>
                {inputs.map(item=>{
                    return <CreateAccountArea key={nanoid()} {...item}/>
                })}
        </>
    )
}

export default CreateAccount