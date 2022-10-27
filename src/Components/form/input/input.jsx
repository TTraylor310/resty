import {useState} from 'react';


const Jinput = () => {

  const [text, setText] = useState('');


  return (
    <div className='json-thing'>
      Input JSON data:
      <form>
        <input name = 'json-data'
        type = 'text' 
        placeholder = 'enter JSON data here'
        onChange = {(e) => setText(e.target.value)}
        value = {text}
        />
      </form>
    </div>
  )
}

export default Jinput;
