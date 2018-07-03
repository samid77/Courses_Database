import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class BTCToRp extends Component {
   state = {
   }
   componentDidMount(){
    axios.get('https://blockchain.info/tobtc?currency=USD&value=500').then((getData) => {
        console.log(getData);
        this.setState({
            btcValue : (500*14000)/(getData.data),
        });
    });
   }
   hitungNilai = (e) => {
    var inputan = this.refs.btc.value;
    var nilai = (inputan * this.state.btcValue);

    this.setState({
        nilaiInput : inputan,
        hasil : nilai,
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
                    <li><Link to="/indexbtc">Kurs  Bitcoin</Link></li>
                    <li><Link to="/RpToBTC">Rupiah to Bitcoin</Link></li>
                    <li className="active"><Link to="/BTCtoRp">Bitcoin to Rupiah</Link></li>
                </ul>
                <div id="myTabContent" className="tab-content">
                    <div className="tab-pane fade active in" id="profile2">
                        <div className="tab-pane fade active in" id="profile">
                            <div style={{marginTop: '10px'}}>
                                <h2>Konversi Bitcoin ke Rupiah</h2>
                                <form>
                                    <div className="form-group">
                                        <input type="number" name="btc" ref="btc" className="form-control" onInput={this.hitungNilai.bind(this)}/>
                                    </div>
                                </form>
                                <h4>{this.state.nilaiInput} BTC =  <b>Rp. {this.state.hasil}</b></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default BTCToRp;