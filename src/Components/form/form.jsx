import { useState } from 'react'
import './form.scss';

const Form = ({ fakeAPI }) => {

  // const [text, setText] = useState('');
  const [url, setURL] = useState('');
  const [method, setMethod] = useState('');

  // const temp = {
  //   method: 
  // }
  // const handleTextChange = e => {
  //   setText(e.target.value);
  // }

  let handleSubmit = e => {
    e.preventDefault();
    // const formData = {
    //   method: 'GET',
    //   url: 'https://pokeqpi.co/api/v2/pokemon',
    // };

    // setMethod(formData.method);
    // setURL(formData.url);
    fakeAPI({method,url})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input 
          name='url' 
          type='text' 
          placeholder='Please enter URL of API' 
          onChange={(e) => setURL(e.target.value)}
          // value = {text}
          />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={(e) => setMethod('GET')}>GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  )
}

export default Form;