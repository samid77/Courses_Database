import React, { Component } from 'react';
import axios from 'axios';

class WorldCup extends Component {
  state = {
    groupList : [],
    teamName: [],
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
  }
  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.groups.json')
      .then((getData) => {
        console.log((getData.data.groups[1].teams));
        this.setState({
          title: getData.data.name,
          groupList: getData.data.groups,
          namaGrupA : getData.data.groups[0],
          A: getData.data.groups[0].teams,
          B: getData.data.groups[1].teams,
          C: getData.data.groups[2].teams,
          D: getData.data.groups[3].teams,
          E: getData.data.groups[4].teams,
          F: getData.data.groups[5].teams,
          G: getData.data.groups[6].teams,
          H: getData.data.groups[7].teams,
        })
      });
  }
  render() {
    const isiTimA = this.state.A.map((team, index) => {
      var namaTimA = team.name;
      return <li key={index}>{namaTimA}</li>
    });
    const isiTimB = this.state.B.map((team, index) => {
      var namaTimB = team.name;
      return <li key={index}>{namaTimB}</li>
    });
    const isiTimC = this.state.C.map((team, index) => {
      var namaTimC = team.name;
      return <li key={index}>{namaTimC}</li>
    });
    const isiTimD = this.state.D.map((team, index) => {
      var namaTimD = team.name;
      return <li key={index}>{namaTimD}</li>
    });
    const isiTimE = this.state.E.map((team, index) => {
      var namaTimE = team.name;
      return <li key={index}>{namaTimE}</li>
    });
    const isiTimF = this.state.F.map((team, index) => {
      var namaTimF = team.name;
      return <li key={index}>{namaTimF}</li>
    });
    const isiTimG = this.state.G.map((team, index) => {
      var namaTimG = team.name;
      return <li key={index}>{namaTimG}</li>
    });
    const isiTimH = this.state.H.map((team, index) => {
      var namaTimH = team.name;
      return <li key={index}>{namaTimH}</li>
    });
    const parseData = this.state.groupList.map(((group, index) => {
      var namaGrup = group.name;
      return <li key={index}><a href="#profile" data-toggle="tab">{namaGrup}</a></li>
    }));
    const parseData3 = this.state.groupList.map(group => group.teams.map((team, index) => {
      var teamName = team.name;
      return <li key={index}>{teamName}</li>
    }));
    const parseData4 = this.state.groupList.map(group => group.teams.map((team, index) => {
      var groupName = group.name;
      var namaTim = team.name;
      return 
        <div>
          <ul className="nav nav-tabs">
            <li key={index}><a href="#profile" data-toggle="tab">{groupName}</a></li>
          </ul>
          <div id="myTabContent" className="tab-content">
            <div className="tab-pane fade" id="profile">
                <ul style={{listStyle: 'none'}}>
                  {parseData3}
                </ul>
            </div>
          </div>
        </div>
    }));
    return (
      <div className="container">
        <div className="row">
            <h3>{this.state.title}</h3>
        </div>
        <hr style={{border: '1px solid black'}}/>
        <div className="col-md-12">
          <div>
              <ul className="nav nav-tabs">
                {/* {parseData} */}
                <li><a href="#profile" data-toggle="tab">Grup A</a></li>
                <li><a href="#timB" data-toggle="tab">Grup B</a></li>
                <li><a href="#timC" data-toggle="tab">Grup C</a></li>
                <li><a href="#timD" data-toggle="tab">Grup D</a></li>
                <li><a href="#timE" data-toggle="tab">Grup E</a></li>
                <li><a href="#timF" data-toggle="tab">Grup F</a></li>
                <li><a href="#timG" data-toggle="tab">Grup G</a></li>
                <li><a href="#timH" data-toggle="tab">Grup H</a></li>
              </ul>
              <div id="myTabContent" className="tab-content">

                <div className="tab-pane fade" id="profile">
                  <ul style={{listStyle: 'none'}}>
                    {isiTimA}
                  </ul>
                </div>

                <div className="tab-pane fade" id="timB">
                  <ul style={{listStyle: 'none'}}>
                    {isiTimB}
                  </ul>
                </div>

                <div className="tab-pane fade" id="timC">
                  <ul style={{listStyle: 'none'}}>
                    {isiTimC}
                  </ul>
                </div>

                <div className="tab-pane fade" id="timD">
                  <ul style={{listStyle: 'none'}}>
                    {isiTimD}
                  </ul>
                </div>

                <div className="tab-pane fade" id="timE">
                  <ul style={{listStyle: 'none'}}>
                    {isiTimE}
                  </ul>
                </div>

                <div className="tab-pane fade" id="timF">
                  <ul style={{listStyle: 'none'}}>
                    {isiTimF}
                  </ul>
                </div>

                <div className="tab-pane fade" id="timG">
                  <ul style={{listStyle: 'none'}}>
                    {isiTimG}
                  </ul>
                </div>

                <div className="tab-pane fade" id="timH">
                  <ul style={{listStyle: 'none'}}>
                    {isiTimH}
                  </ul>
                </div>

              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default WorldCup;
