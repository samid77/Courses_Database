import React, { Component } from 'react'
import axios from 'axios';

class soccerPlayer extends Component {
  state = {
      playerList : [],
      clubName : '',
  }
  searchPlayer = (e) => {
    console.log(this.refs.club.value);
    const keyword = this.refs.club.value;
    e.preventDefault();
    axios(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${keyword}`).then((getData) => {
        console.log(getData.data.player)
        this.setState({
            playerList: getData.data.player,
        });
    }); 
  }
  renderClub = (e) => {
    const inputClub = this.refs.club.value;
    this.setState({
        clubName: inputClub,
    });
  }
  render() {
    const parseData = this.state.playerList.map((player, index) => {
        var id = player.idPlayer;
        var playerName = player.strPlayer;
        var playerPosition = player.strPosition;
        var playerNationality = player.strNationality;
        return <tr key={index}>
            <td>{id}</td>
            <td>{playerName}</td>
            <td>{playerPosition}</td>
            <td>{playerNationality}</td>
        </tr>
    });
    return (
        <div className="container">
            <div className="col-md-10">
                <div className="row">
                    <h3>Soccer Player Database <b>{this.state.clubName}</b></h3>
                </div>
                <hr style={{border: '1px solid black'}}/>
                <form onSubmit={this.searchPlayer.bind(this)}>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label>Club Name:</label>
                            <input type="text" className="form-control" name="club" ref="club" onChange={this.renderClub.bind(this)} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-danger btn-md" type="submit">Search</button>
                        </div>
                    </div>
                </form>
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parseData}
                    </tbody>
                </table> 
            </div>
        </div>
    )
  }
}
export default soccerPlayer;
