import React, {useRef} from 'react'

const Child = ({name,send,update}) => {

    const messageRef = useRef('')
    const nameRef = useRef('')
  
  function pressButton(){
    const text = messageRef.current.value;
    alert(` Text in input : ${text}`);
  }

  function pressButtonParams(text){
    alert(`Text: ${text} `);

  } 

  function submitName(e){
    e.preventDefault();
  update(nameRef.current.value)
  }

  return (
    <div style={{background: 'cyan', padding: '30px'}}>
      <p onMouseOver={() => console.log('On Mouse Over')}>Hello,{name}</p>
      <button onClick={() => console.log('Pressed Button 1')}>
        Boton 1
      </button>

      <button onClick={pressButton}>
        Boton 2
      </button>

      <button onClick={() => pressButtonParams('Hello')}>
        Boton 3
      </button>
      <input 
      
      onFocus={() => console.log('Input Focused')}
      onChange={(e) => console.log('Input Changed: ',e.target.value)}
      onCopy={() => console.log('Copied Text From Input')}
      placeholder = 'Send a text to your father'
      ref = {messageRef}
      />

      <button onClick={() => send(messageRef.current.value)}>
        Send Message
      </button>

      <div style={{marginTop: '20px'}}>

        <form onSubmit={submitName}>
          <input ref = {nameRef}placeholder='New Name'/>
          <button type='Submit'>Update Name</button>
        </form>
      </div>

    </div>
  )
}

export default Child;