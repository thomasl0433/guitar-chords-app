import React from "react";

export default class Reference extends React.Component {
  state = {
    //loading: true,
    word: "",
    final: false
  };

  // componentDidMount() {
  //     //const url = "https://api.uberchord.com/v1"
  //     this.setState({loading: false})
  //   }

  handleChange = (event) => {
    //console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // async function
  handleSubmit = async (event) => {
    // make GET request to API once button is submitted
    event.preventDefault();
    const url = "https://api.datamuse.com/words";
    const queryParams = "?rel_trg=";
    const queryWord = this.state.word;

    const response = await fetch(url + queryParams + queryWord);
    const data = await response.json();
    if (response.ok) {
      this.setState({ loading: false, data, final: true });
      //console.log(data);
    } else {
      console.log("network error");
    }
    console.log(this.state);
  };

  formatJson = (jsonResponse) => {
    let wordList = [];
    for (let i = 0; i < 10; i++) {
      wordList.push(<li key={`word-${i}`}>{jsonResponse[i].word}</li>);
    }

    return wordList;
  };

  render() {
    // if (this.state.loading) {
    //     console.log("loading")
    //   return <div>loading...</div>;
    // }

    return (
      <div>
        <h1>Enter a word</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="word"
            value={this.state.word}
            onChange={(event) => this.setState({ word: event.target.value })}
          ></input>
          <button type="submit">submit</button>
        </form>
        <div>
          {this.state.final && <h3>You might be interested in:</h3>}
          {this.state.data ? this.formatJson(this.state.data) : ""}
        </div>
      </div>
    );
  }
}
