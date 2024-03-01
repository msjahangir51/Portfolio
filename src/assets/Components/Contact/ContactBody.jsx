import React, { useRef } from 'react'

import "./contact.css"
function ContactBody() {
    const name = useRef();
    function handleSubmit(e){
        e.preventDefault()
        // console.log(e)
        console.log(name.current)
        
    }
  return (
    <div className='ContactBody'>
        <div className="conteinar contact">
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter your name' required/>
                <input type="email" placeholder='Enter your email' required/>
                <textarea placeholder='Please write message' required></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default ContactBody