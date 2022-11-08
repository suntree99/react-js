import React, { Component } from 'react'

export default class Operan extends Component {

    // * Operan (props) tidak dapat membuat function sendiri, harus dari yang mengoper (StateProp)
    // gantiMakanan(makanan_baru) {
    //     this.setState({
    //         makanan : makanan_baru
    //     })
    // }

  render() {
    // * Penyingkatan this.props
    const {makanan, gantiMakanan} = this.props;

    return (
      <div>
        <h2>Operan State yang menjadi Props : {makanan}</h2>
        <button onClick={() => gantiMakanan('Soto')}>Ganti Makanan</button>
      </div>
    )
  }
}
