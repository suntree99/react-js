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
    };

    // *08 perubahan saat input diisi
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    };

    // *08 perubahan saat tombol submit ditekan
    handleSubmit = (event) => {
        event.preventDefault(); // prevenDefault untuk mencegah halaman reload ulang

        // console.log("Data : ", this.state);

        // *08 menginput data
        // *09 mengupdate data
        if(this.state.id === "") {
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
        } else {
            const makananYangDipilih = this.state.makanans
            .filter((makanan) => makanan.id !== this.state.id)
            .map((filterMakanan) => {
                return filterMakanan
            });

            this.setState({
                makanans: [
                    ...makananYangDipilih,
                    {
                        id: this.state.makanans.length+1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            });
        };

        // *08 mengosongkan field setelah data diinput
        this.setState({
            nama: "",
            deskripsi: "",
            harga: 0,
            id: ""
        });
        
    };

    // *09 function untuk mengedit data
    editData = (id) => {
        // console.log("ID : ", id);
        const makananYangDipilih = this.state.makanans
        .filter((makanan) => makanan.id === id)
        .map((filterMakanan) => {
            return filterMakanan
        });

        this.setState({
            nama: makananYangDipilih[0].nama,
            deskripsi: makananYangDipilih[0].deskripsi,
            harga: makananYangDipilih[0].harga,
            id: makananYangDipilih[0].id
        });
    };

    // *10 function untuk hapus data
    hapusData = (id) => {
        // console.log("Hapus id yang : ", id);
        const makananBaru = this.state.makanans
        .filter((makanan) => makanan.id !== id)
        .map((filterMakanan) => {
            return filterMakanan
        });

        console.log(makananBaru);

        this.setState({
            makanans: makananBaru
        });
    };

    render() {
        // console.log(this.state.makanans)
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                    <Tabel makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData}/>
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}
