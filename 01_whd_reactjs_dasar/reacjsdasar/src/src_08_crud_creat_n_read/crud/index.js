import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel'
import Formulir from './Formulir'

export default class Crud extends Component {

    // *08 dibuat dengan rconst
    constructor(props) {
        super(props)

        this.state = {
            makanans : [],
            nama : "",
            deskripsi : "",
            harga : 0,
            id: ""
        }
    }

    // *08 perubahan saat input diisi
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    // *08 perubahan saat tombol submit ditekan
    handleSubmit = (event) => {
        event.preventDefault(); // prevenDefault untuk mencegah halaman reload ulang

        // console.log("Data : ", this.state);

        // *08 menginput data
        this.setState({
            makanans: [
                ...this.state.makanans,
                {
                    id: this.state.makanans.length+1,
                    nama: this.state.nama,
                    deskripsi: this.state.deskripsi,
                    harga: this.state.harga
                }
            ]
        })

        // *08 mengosongkan field setelah data diinput
        this.setState({
            id: "",
            nama: "",
            deskripsi: "",
            harga: 0
        })
        
    }

    render() {
        // console.log(this.state.makanans)
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                    <Tabel makanans={this.state.makanans}/>
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}
