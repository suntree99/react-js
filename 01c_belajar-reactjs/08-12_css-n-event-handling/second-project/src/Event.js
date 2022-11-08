import React from 'react'

class EventReact extends React.Component {

    constructor() {
        super();
        this.state = {
            nama : 'Budi'
        }
    }

    kirimPesan(nama) {
        console.log('Kirim pesan kepada ' + nama)
    }

    ubahTulisan(e) {
        e.target.innerHTML = 'Leave Me / Click';
    }

    ubahTulisanLagi(e) {
        e.target.innerHTML = 'Hover Me';
    }

    sapa(e) {
        this.setState({nama: e.target.value})
    }

    render() {
        return (
            <div>
                {/* Pemanggilan Event menggunakan arrow fuction*/}
                <button onClick={ () => alert('Hello World')}>Hello World</button>
                <button onClick={ () => this.kirimPesan('Budi')}>Pesan Arrow</button>
                
                {/* Pemanggilan Event menggunakan .bind*/}
                <button onClick={ this.kirimPesan.bind(this, 'Budi')}>Pesan Bind</button>

                {/* Pemanggilan Event menggunakan parameter event*/}
                <button onClick={ (e) => this.kirimPesan('Budi', e)}>Pesan e Param</button>

                {/* Pemanggilan Event onMouse*/}
                <button onMouseEnter={ (e) => this.ubahTulisan(e)} onMouseLeave={ (e) => this.ubahTulisanLagi(e)} onClick={() => alert('Kirim pesan kepada Budi') }>Hover Me</button>

                {/* Pemanggilan Event onChange*/}
                <h2>Hello : {this.state.nama}</h2>
                <input type={"text"} onChange={this.sapa.bind(this)}/>

            </div>
        )
    }
}

export default EventReact;