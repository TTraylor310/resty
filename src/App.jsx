import { useState, useEffect } from 'react';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Form from './Components/form/form';
import Results from './Components/results/results';
import axios from 'axios';

import './App.scss';

const App = () => {

  // const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [resultList, setResultList] = useState();


  const callApi1 = (requestParams) => {
    // const newData = {
    //   count: 2,
    //   results: [
    //     {name: 'fake thing 1', url: 'http://fakethings.com/1'},
    //     {name: 'fake thing 2', url: 'http://fakethings.com/2'},
    //   ],
    // };
    // setData(newData);
    setRequestParams(requestParams);
  }

  useEffect(() =>{
    console.log('check the effect is used');
    async function callAPI () {
      let results = await axios.get(`${requestParams.url}`);
      console.log('check the thing33', results.data);
      setResultList(results.data.results);
    }
    callAPI();
  }, [requestParams])

  return (
      <div className="App">
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form fakeAPI={callApi1} />
        <Results resultData={resultList}/>
        <Footer />
      </div>
  )

}

export default App;
