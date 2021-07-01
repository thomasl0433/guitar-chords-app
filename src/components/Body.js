import React from "react";

export default class Body extends React.Component {
  state = {};

  generateNotes() {
    let notes = ["A", "B", "C", "D", "E", "F", "G"];
    return notes.map((note) => <option key={note}>{note}</option>);
  }

  handleChange = (event) => {
    console.log("note changed to " + event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit clicked");
    // const url = "http://guitar-chords-chart.net/";
    const url2 = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
    // const query = this.state.note;
    const response = await fetch(url2);
    const data = await response.json();

    if (response.ok) {
      console.log(data);
    } else {
      console.log("network error");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Pick a note:</h1>
        <select
          name="note"
          value={this.state.note}
          onChange={this.handleChange}
        >
          {this.generateNotes()}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
