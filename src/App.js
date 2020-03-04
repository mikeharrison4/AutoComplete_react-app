import React, {Component} from 'react';
import './App.css';
import Input from "./components/Input";
import RenderSuggestions from "./components/RenderSuggestions";

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>Auto-complete</h1>
          <Input />
          <RenderSuggestions />
        </div>
    );
  }
}

export default App;
