import { useState } from 'react'
import InputForm from './input/input';
import './form.scss';

const Form = ({ fakeAPI }) => {

  const [url, setURL] = useState('');
  const [method, setMethod] = useState('');

  let handleSubmit = e => {
    e.preventDefault();
    fakeAPI({method,url})
  }

  // const swapiURL = 'https://swapi.dev/api/people'
  const pokeURL = 'https://pokeapi.co/api/v2/pokemon'

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
          value = {url}
          />
          <button type="submit">GO!</button>
        </label>
      </form>
      <InputForm />
      <form>
        <label className="methods">
          <span id="get" onClick={(e) => setMethod('GET')}>GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
        <label className='api-lists'>
          {/* <span id='swapi' onClick={(e) => setURL(swapiURL)}>Star Wars API</span> */}
          Click 'Pokemon API' and hit 'GO!'
          <span id='pokeapi' onClick={(e) => setURL(pokeURL)}>Pokemon API</span>
        </label>
      </form>
    </>
  )
}

export default Form;