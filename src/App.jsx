import { useState } from 'react';

import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Form from './Components/form/form';
import Results from './Components/results/results';

import './App.scss';


const App = () => {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  

  const callApi = (requestParams) => {
    const newData = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setData(newData);
    setRequestParams(requestParams);
  }

  // const updateThings = infos => {
  //   console.log(infos);
  // }



  return (
      <div className="App">
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form fakeAPI={callApi} />
        <Results fakeData={data}/>
        <Footer />
      </div>
  )

}


export default App;
