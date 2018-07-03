import React, { Component } from 'react'

class Dropdown extends Component {
  state = {
      jenjang: 'Pilih jenjang',
      detailJenjang: [],
      jenjangPraSekolah: ['PAUD (Pendidikan Anak Usia Dini)', 'TK (Taman Kanak-Kanak)', 'RA (Raudhatul Athfal'],
      jenjangDasar: ['SD (Sekolah Dasar)', 'MI (Madrasah Ibtidaiyah)', 'SMP (Sekolah Menengah Pertama)', 'MTS (Madrasah Tsanawiyah)'],
      jenjangMenengah: ['SMA (Sekolah Menegah Atas)', 'SMK (Sekolah Menengah Kejuruan)', 'MA (Madrasah Aliyah)'],
      jenjangTinggi: ['D3 Diploma', 'D4 Sarjana Muda', 'S1 Sarjana', 'S2 Magister', 'S3 Doktoral']
  }
  jenjangPra = () => {
    this.setState({
        jenjang: 'Pendidikan Pra Sekolah'
    });
    this.setState({
        detailJenjang: this.state.jenjangPraSekolah
    });
  }
  jenjangDasar = () => {
      this.setState({jenjang: 'Pendidikan Dasar'});
      this.setState({
        detailJenjang: this.state.jenjangDasar
    });
  }
  jenjangMenengah = () => {
      this.setState({jenjang: 'Pendidikan Menengah'});
      this.setState({
        detailJenjang: this.state.jenjangMenengah
    });
  }
  jenjangTinggi = () => {
      this.setState({jenjang: 'Pendidikan Tinggi'});
      this.setState({
        detailJenjang: this.state.jenjangTinggi
    });
  }
  render() {
    var detailjenjang = this.state.detailJenjang.map((jenjang, index) => {
        return <li key={index}>{jenjang}</li>
    });
    return (
      <div className="container">
        <div className="col-md-6">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h4 style={{textAlign: 'center'}}>{this.state.jenjang}</h4>
                </div>
                <div className="panel-body">
                    <ul style={{listStyle: 'none', fontSize: '18px'}}>
                       {detailjenjang}
                    </ul>
                    <div className="btn-group">
                        <a className="btn btn-primary">{this.state.jenjang}</a>
                        <a className="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a onClick={() => {this.jenjangPra();}}>Pendidikan Pra Sekolah</a></li>
                            <li><a onClick={() => {this.jenjangDasar();}}>Pendidikan Dasar</a></li>
                            <li><a onClick={() => {this.jenjangMenengah();}}>Pendidikan Menengah</a></li>
                            <li><a onClick={() => {this.jenjangTinggi();}}>Pendidikan Tinggi</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Dropdown;
