import React from 'react'

function contact() {
  return (
    <div className='contact'>
    <main>
        <h1>Contact us</h1>
        <form >
            <div>
                <label>Name</label>
<input type="text" required placeholder='Abc'/>
            </div>
            <div>
                <label>Email</label>
<input type="email" required placeholder='Abc@gmail.com'/>
            </div>
            <div>
                <label>Message</label>
<input type="text" required placeholder='Tell us Your Query.....'/>
            </div>
            <button type='Submit'>Send</button>
        </form>
    </main>
    </div>
  )
}

export default contact