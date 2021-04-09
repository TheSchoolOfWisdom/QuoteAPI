import React from 'react';
import './App.css';
import axios from 'axios';
import QuoteCard from "./components/QuoteCard";

const sampleQuote = {
  character: 'Lisa Simpson',
  quote: 'Shut up, brain. I got friends now. I don\'t need you anymore.',
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: sampleQuote,
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
        // Extract the DATA from the received response
        .then(response => response.data)
        // Use this data to update the state
        .then(data => {
          this.setState({
            quotes: data[0],
          });
        });
  }

  render() {
    return (
        <div className="App" >
          <QuoteCard quote={this.state.quotes.quote} image={this.state.quotes.image} character={this.state.quotes.character} />
          <button type="button" onClick={this.getQuote}>New quote</button>
        </div>
    );
  }
}

export default App;
