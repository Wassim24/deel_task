import React from 'react';
import './App.css'
import Autocomplete from './components/Autocomplete/Autocomplete'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Autocomplete/>)
  }
}

export default App
