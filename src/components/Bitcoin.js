import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Bitcoin extends Component {
   state = {
       hargaBeli : '',
       hargaJual : '',
   }
   componentDidMount = () =>{
    axios.get('https://blockchain.info/ticker').then((getData) => {
        console.log(getData);
        this.setState({
            beliAUD: getData.data.AUD.buy,
            jualAUD: getData.data.AUD.sell,
            beliJPY: getData.data.JPY.buy,
            jualJPY: getData.data.JPY.sell,
            beliUSD: getData.data.USD.buy,
            jualUSD: getData.data.USD.sell,

        });
    });
   }
  render() {
    return (
      <div className="container">
        <div className="col-md-10">
            <div className="row">
                <h3>Bicoin Conversion</h3>
            </div>
            <hr style={{border: '1px solid black'}}/>
            <div>
                <ul className="nav nav-tabs">
                    <li className="active"><a href="#home" data-toggle="tab">Kurs  Bitcoin</a></li>
                    <li><Link to="/RpToBTC">Rupiah to Bitcoin</Link></li>
                    <li><Link to="/BTCtoRp">Bitcoin to Rupiah</Link></li>
                </ul>
                <div id="myTabContent" className="tab-content">
                    <div className="tab-pane fade active in" id="home">
                        <table className="table table-bordered table-hovered" style={{marginTop: '20px'}}>
                            <thead>
                                <tr>
                                    <th>Mata Uang</th>
                                    <th>Kurs Beli</th>
                                    <th>Kurs Jual</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Dollar Australia</td>
                                    <td>{this.state.beliAUD}</td>
                                    <td>{this.state.jualAUD}</td>
                                </tr>
                                <tr>
                                    <td>Yen Jepang</td>
                                    <td>{this.state.beliJPY}</td>
                                    <td>{this.state.jualJPY}</td>
                                </tr>
                                <tr>
                                    <td>Dollar Amerika</td>
                                    <td>{this.state.beliUSD}</td>
                                    <td>{this.state.jualUSD}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Bitcoin;