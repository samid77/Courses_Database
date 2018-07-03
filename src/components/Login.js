import React, { Component } from 'react';
import Welcome from './Welcome';

class Login extends Component {
  state = {
      yourname: '',
  }
  nameData = (e) => {
    console.log(this.refs.name.value);
    this.setState({
        yourname: this.refs.name.value
    });
    e.preventDefault();
  }
  render() {
    return (
      <div className="col-md-8">
        <div>
            <ul className="nav nav-tabs">
                <li className="active"><a href="#home" data-toggle="tab">Login</a></li>
                <li><a href="#profile" data-toggle="tab">Profile</a></li>
            </ul>
            <div id="myTabContent" className="tab-content">
                <div className="tab-pane fade active in" id="home">
                    <h4>Masukan Nama Anda:</h4>
                    <form onSubmit={this.nameData.bind(this)}>
                        <input type="text" ref="name" className="form-control" placeholder="Masukan nama anda"/>
                        <br />
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                    <p>Nama Anda: <b>{this.state.yourname}</b></p>
                </div>
                <div className="tab-pane fade" id="profile">
                    <Welcome hasilnama={this.state.yourname}/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Login;
