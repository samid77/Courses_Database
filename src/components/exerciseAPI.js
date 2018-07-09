import React, { Component } from 'react';
import axios from 'axios';

class exerciseAPI extends Component {
    state = {
        term: undefined,
        img: undefined,
    }
    onChange = (e) => {
        this.setState({
            term: this.refs.input.value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const keywords = this.refs.input.value;
        const API_KEY = 'dc6zaTOxFJmzC';
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${keywords}&api_key=${API_KEY}`).then((getData) => {
            console.log(keywords);    
            this.setState({
                term: '',
                img: getData.data.data[0].images.fixed_height.url
            });
        })
    }
  render() {
    return (
      <div className="container">
        <div className="col-md-10">
            <h3><b>Exercise API</b></h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Input Data</label>
                    <input type="text" ref="input" className="form-control" onChange={this.onChange.bind(this)}/>
                </div>
                <button className="btn btn-success btn-md" type="submit">Submit</button>
            </form><br />
        </div>
        <div className="col-md-6">
            <div className="panel panel-primary">
                <div className="panel-body">
                    <img src={this.state.img} height="200" alt={this.state.term}/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default exerciseAPI;
