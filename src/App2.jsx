import React from 'react';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Form from './Components/form/form';
import Results from './Components/results/results';

import './App.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    };
  }

  callApi = (requestParams) => {
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    this.setState({data, requestParams})
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div>Request Method: {this.state.requestParams.method}</div>
        <div>URL: {this.state.requestParams.url}</div>
        <Form fakeAPI={this.callApi}/>
        <Results fakeData={this.state.data}/>
        <Footer />
      </div>
    )

  }
}

export default App;
