import { useState } from 'react';

import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Form from './Components/form/form';
import Results from './Components/results/results';

import './App.scss';


const App = () => {

  const [dataState, setDataState] = useState(
    {
      data: null,
      requestParams: {},
    }
  )

  const callApi = (requestParams) => {
    const newData = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setDataState(newData, requestParams);
  }

  return (
      <div className="App">
        <Header />
        {/* <div>Request Method: {dataState.requestParams.method}</div> */}
        {/* <div>URL: {dataState.requestParams.url}</div> */}
        <Form fakeAPI={callApi} />
        <Results fakeData={dataState.data}/>
        <Footer />
      </div>
  )

}


export default App;
