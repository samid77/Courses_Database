import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class RpToBTC extends Component {
   state = {
       
   }
   componentDidMount() {
       axios.get('https://blockchain.info/tobtc?currency=USD&value=500').then((getData) => {
           console.log(getData);
           this.setState({
               rupiahValue: (getData.data)/(500*14000),
           });
       });
   }
   processValue = (e) => {
    var getInputValue = this.refs.rupiah.value;
    var getResultValue = (getInputValue * this.state.rupiahValue);
    var pembulatan = getResultValue.toFixed(6);
    this.setState({
        input: getInputValue,
        hasil: pembulatan,
    });
   }
   
  render() {
    return (
      <div className="container">
        <div className="col-md-10">
            <div className="row">
                <h3>Bitcoin Conversion</h3>
            </div>
            <hr style={{border: '1px solid black'}}/>
            <div>
                <ul className="nav nav-tabs">
                    <li><Link to="/indexbtc">Kurs  Bitcoin</Link></li>
                    <li className="active"><Link to="/RpToBTC">Rupiah to Bitcoin</Link></li>
                    <li><Link to="/BTCtoRp">Bitcoin to Rupiah</Link></li>
                </ul>
                <div id="myTabContent" className="tab-content">
                    <div className="tab-pane fade active in" id="profile">
                        <div style={{marginTop: '10px'}}>
                            <h2>Konversi Rupiah ke Bitcoin</h2>
                            <form>
                                <div className="form-group">
                                    <input type="number" name="rupiah" ref="rupiah" className="form-control" onInput={() => {this.processValue();}}/>
                                </div>
                            </form>
                            <h4>Rp. {this.state.input} =  <b>{this.state.hasil} BTC</b></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default RpToBTC;