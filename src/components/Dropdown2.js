import React, { Component } from 'react'

class Dropdown2 extends Component {
  state = {
      jenjang: 'Pilih Jenjang',
      jenjangWarning: 'Pilih Jenjang Dulu!',
      praSekolah : [],
      pendidikanDasar : [],
      pendidikanMenengah : [],
      pendidikanTinggi : []
  }
  changePraSekolah = () => {
      this.setState({
          jenjangWarning: 'Pendidikan Pra Sekolah',
          praSekolah : ['PAUD (Pendidikan Anak Usia Dini)', 'TK (Taman Kanak-Kanak)', 'RA (Raudhatul Athfal)'],
      });
  }
  changePendidikanDasar = () => {
    this.setState({
        jenjangWarning: 'Pendidikan Dasar',
        praSekolah : ['SD (Sekolah Dasar)', 'MI (Madrasah Ibtidaiyah', 'SMP (Sekolah Menengah Pertama)'],
    });
}
  render() {
    var listJenjang = this.state.praSekolah.map((nama, index) => {
        return <li key={index}><a>{nama}</a></li>
    });
    return (
      <div className="container">
        <div className="col-md-10">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h4 style={{textAlign: 'center'}}>{this.state.jenjangWarning}</h4>
                </div>
                <div className="panel-body">
                    <div className="col-md-4">
                        <div className="btn-group">
                            <a className="btn btn-primary">{this.state.jenjang}</a>
                            <a className="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a onClick={() => {this.changePraSekolah();}}>Pendidikan Pra Sekolah</a></li>
                                <li><a onClick={() => {this.changePendidikanDasar();}}>Pendidikan Dasar</a></li>
                            </ul>
                        </div>    
                    </div>
                    <div className="col-md-6">
                        <div className="btn-group">
                            <a className="btn btn-success">{this.state.jenjangWarning}</a>
                            <a className="btn btn-success dropdown-toggle" data-toggle="dropdown"><span className="caret"></span></a>
                            <ul className="dropdown-menu" style={{listStyle: 'none', fontSize: '18px'}}>
                                {listJenjang}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Dropdown2;
