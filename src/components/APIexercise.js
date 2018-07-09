import React, { Component } from 'react';
import axios from 'axios';

class APIexercise extends Component {
  state = {
    username: undefined,
  }
  handleClick = (e) => {
      e.preventDefault();
      axios.get('https://api.github.com/users/maecapozzi')
        .then((getData) => {
            console.log(getData.data);
            this.setState({
                username: getData.data.username,
            });

        });
  }
  render() {
    return (
      <div className="container">
        <h3><b>API Exercise</b></h3>
        <button className="btn btn-success btn-md" onClick={this.handleClick.bind(this)}>Test Click</button>
      </div>
    )
  }
}
export default APIexercise;
