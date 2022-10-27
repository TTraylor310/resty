import {useState} from 'react';


const InputForm = () => {

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
        <textarea>

        </textarea>
      </form>
    </div>
  )
}

export default InputForm;
