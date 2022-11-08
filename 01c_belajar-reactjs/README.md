# React JS

## Instalasi
* Menggunakan CDN
    * Kunjungi https://reactjs.org/ -> Docs -> Installation -> CDN Links
    * Copy dan paste link (development atau production) ke file HTML di head section 
    * Masuk ke Installation -> Add React to a Website
    * Copy dan paste link babel (Quickly Try JSX) ke file HTML di head section

* Menggunakan NPM
    * Install NodeJS https://nodejs.org/en/download/ jika belum
    * Masuk ke terminal dan jalankan perintah `npm install -g create-react-app`
    * Buat folder project dan masuk pada direktori tersebut
    * Jalankan perintah `create-react-app judul-project`

## Konsep Dasar React JS 
* Membuat DOM Container (di body HTML) untuk menempatkan komponen
    ```html
    <div id="Container">
    </div>
    ```

* Membuat Class Component (di file JS atau di tag script HTML)
    ```html
    <script type="text/babel">
        class Hello extends React.Component {
            render() {
                return <h1>Hello World!</h1>
            }
        }
    </script>
    ```

* Melakukan Render (di bawah Class Component pada script JS)
    ```js
    ReactDOM.render(<Hello />, document.getElementById('Container'));    </script>
    ```

## Memahami JSX
* Membuat Komponen Dengan React Murni (Tanpa JSX)
    ```html
    <script type="text/babel">
        class Button extends React.Component {
            render() {
                const btn = React.createElement('button', {class : 'btn btn-primary'}, 'Primary Button')
                return btn
            }
        }

        class Cards extends React.Component {
            render() {
                const link = React.createElement('a', {href: '#', class : 'btn btn-primary'}, 'Go Some Where')
                const cardtext = React.createElement('p', {class : 'card-text'}, 'Lorem ipsum dolor sit amet consectetur adipisicing elit.')
                const cardtitle = React.createElement('h5', {class : 'card-title'}, 'Hallo Aku adalah card dari React')
                const cardbody = React.createElement('div', {class : 'card-body'}, cardtitle, cardtext, link)
                const card = React.createElement('div', {class : 'card'}, cardbody)
                return card
            }
        }
        
        ReactDOM.render(<Cards/>, document.getElementById('App'));
    </script>
    ```
    _Perhartikan penggunaan {} pada bagian atribut_

* Membuat Komponen Dengan JSX
    ```html
    <script type="text/babel">
        class ButtonJSX extends React.Component {
            render() {
                return <button className="btn btn-primary">Primary Button</button>
            }
        }

        class CardsJSX extends React.Component {
            render() {
                const card = (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Hallo Aku adalah card dari JSX</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="#" className="btn btn-primary">Go Some Where</a>
                        </div>
                    </div>
                )
                return card
            }
        }
        
        ReactDOM.render(<CardsJSX/>, document.getElementById('App'));
    </script>
    ```
    _Masukkan struktur HTML biasa dan ganti class menjadi classNeme_

## Component
* Class Component
    ```js
    class ButtonJSX extends React.Component {
        render() {
            return <button className="btn btn-primary">Primary Button</button>
        }
    }
    ```

* Function Component
    ```js
    function Button() {
        return <button className="btn btn-primary">Button Function</button>
    }
    ```

    * Arrow Function Component
    ```js
    const ButtonA = () => {
        return <button className="btn btn-primary">Button Arrow Fx</button>
    }

    const CardsA = () => {
        return (
            <div className="card" style={{ width : "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Hallo Aku adalah card dari Arrow Fx</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#" className="btn btn-primary">Go Some Where</a>
                    <ButtonJSX/>
                    <Button/>
                    <ButtonA/>
                </div>
            </div>
        )
    }

    const Navbar = () => {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#">Features</a>
                        <a class="nav-link" href="#">Pricing</a>
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </div>
                    </div>
                </div>
            </nav>
        )
    }
    
    ReactDOM.render(<Navbar/>, document.getElementById('Container'));
    ```
    _Perhatikan penggunaan style, dan pemanggilan komponen di dalam komponen_

## Event & Data Handling
* Props / Properties
    ```js
    class ButtonJSX extends React.Component {
        render() {
            return <button className="btn btn-primary">{this.props.text}</button>
        }
    }

    ReactDOM.render(<ButtonJSX text="Aku adalah Props 1"/>, document.getElementById('Container'));    </script>
    ```
    _Perenderan komponen disertai dengan atribut properti (text) yang akan di tangkap oleh {this.props.text} pada class_

* Event & Data Handling pada Class Component
    ```js
    class ButtonJSX extends React.Component {
        render() {
            return <button className="btn btn-primary">{this.props.text}</button>
        }
    }

    // Struktur Class Component
    class CardsJSX extends React.Component {

        // 1. Data Constructor
        constructor() {
            super();
            this.state = {
                Judul : "Aku adalah State",
                Title : "Aku adalah sub title card"
            }
        }

        // 2. Function
        ubahJudul = () => {
            this.setState({
                Judul : "Aku berubah",
            })
        } 

        // 3. Render Method
        render() {
            const card = (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.Judul}</h5>
                        <p className="card-text">{this.state.Title}</p>
                        <a href="#" className="btn btn-primary">Go Some Where</a>
                        <ButtonJSX text="Aku adalah Props 1"/>
                        <ButtonJSX text="Aku adalah Props 2"/>
                        <button onClick={this.ubahJudul}>Ubah Button</button> 
                    </div>
                </div>
            )
            return card
        }
    }

    ReactDOM.render(<CardsJSX/>, document.getElementById('Container'));
    ```

* Event & Data Handling pada Function Component
    ```js
    const ButtonA = () => {
        return <button className="btn btn-primary">Button Arrow Fx</button>
    }

    const CardsA = () => {

        const [state, setState] = React.useState('Judul Card Menggunakan React HOOK')

        return (
            <div className="card" style={{ width : "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{state}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#" className="btn btn-primary">Go Some Where</a>
                    <ButtonA/>
                </div>
            </div>
        )
    }
    
    ReactDOM.render(<CardsA/>, document.getElementById('Container'));
    ```
    _Pada Function Component tidak bisa menggunakan constructor melainkan menggunakan state dari React Hook_

## Instalasi React Bootstrap
* Kunjungi https://react-bootstrap.github.io/ -> Get Started
* Masuk ke terminal dan jalankan perintah `npm install react-bootstrap bootstrap`
* Tambahkan `import 'bootstrap/dist/css/bootstrap.min.css';` ke src/index.js

## Membuat Component pada Project
* Buat folder `components` pada folder `src`
* Buat file JS pada folder component dengan nama dari komponen 
* Buat komponen dengan class/function/arrow function, konten elemen dapat diambil dari react-bootstrap
* Import di atas komponen `Import <variable komponen> from <path komponen>;`
* Export di bawah komponen `export default <nama komponen>;`

    * Contoh Component
    ```js
    import Button from 'react-bootstrap/Button';
    import Card from 'react-bootstrap/Card';

    const CardJurusan = (props) => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.jurusan}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Kunjungi Kelas</Button>
                </Card.Body>
            </Card>
        );
    }

    export default CardJurusan;
    ```

    * Contoh Component Wrapper
    ```js
    import Hero from "./Hero";
    import CardJurusan from "./CardJurusan";
    import CardKegiatan from "./CardKegiatan";
    import jurusan1 from "./../assets/natural-science.png"
    import jurusan2 from "./../assets/social-science.png"
    import jurusan3 from "./../assets/computer-science.png"
    import kegiatan1 from "./../assets/pramuka-1.png"
    import kegiatan2 from "./../assets/pramuka-2.png"
    import kegiatan3 from "./../assets/pramuka-3.png"


    const MainContent = () => {
        return (
            <div>
                <Hero/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center my-5">
                            <h1>Jurusan Sekolah</h1>
                        </div>
                        <div className="col-lg-4 col-12">
                            <CardJurusan image={jurusan1} jurusan="Ilmu Pengetahuan Alam"/>
                        </div>
                        <div className="col-lg-4 col-12">
                            <CardJurusan image={jurusan2} jurusan="Ilmu Pengetahuan Social"/>
                        </div>
                        <div className="col-lg-4 col-12">
                            <CardJurusan image={jurusan3 } jurusan="Ilmu Komputer"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center my-5">
                            <h1>Kegiatan</h1>
                        </div>
                        <div className="col-12 text-center my-3">
                            <CardKegiatan image={kegiatan1} desc="Kegiatan Pramuka tahun 2020 bersama SDN 1 Nusantara dan SMPN 1 Nusantara"/>
                        </div>
                        <div className="col-12 text-center my-3">
                            <CardKegiatan image={kegiatan2} desc="Kegiatan Pramuka tahun 2021 SMAN 1 Nusantara"/>
                        </div>
                        <div className="col-12 text-center my-3">
                            <CardKegiatan image={kegiatan3} desc="Kegiatan Pramuka tahun 2022 bersama SDN 1 Nusantara"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default MainContent;
    ```

# 4 Cara Menerapkan CSS pada React JS
```js
import bgImage from '../assets/accent.png'
import profile from '../assets/profile.jpeg'
import image from '../assets/image.png'

import '../css/style.css'
import Styling from '../css/CardProfile.module.css'

const CardProfile = () => {

    // CSS Variable for Inline CSS
    const Wrapper = { 
        backgroundColor : '#00B6DF',
        width : '100vw',
        height : '100vh',
        // backgroundImage : 'url(' + bgImage + ')', // Concatenation
        backgroundImage : `url(${bgImage})`, // Template Literal
        backgroundPosition : 'bottom right',
        backgroundRepeat : 'no-repeat',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    }

    return (
        // 1. Inline CSS
        <div style={
                //* Menggunakan Inline CSS
                // { 
                // backgroundColor : '#00B6DF',
                // width : '100vw',
                // height : '100vh',
                // backgroundImage : `url(${bgImage})`, // Template Literal
                // backgroundPosition : 'bottom right',
                // backgroundRepeat : 'no-repeat',
                // display : 'flex',
                // justifyContent : 'center',
                // alignItems : 'center'
                // }

                //* Menggunakan CSS Variable
                Wrapper
        }>

            {/* 2. CSS file - css/style.css */}
            <div className='card'>
                <img className='photo' src={ profile } />
                <div className='title'>Front End Developer</div>
                <div className='name'>Budi Darmawan</div>
                <div className='desc'>Web designers generally have nothing to do with creating content for their projects. Even so, the look of a site can be incomplete if no words are included. Web designers need to find ways to</div>
                <button className='button'>Contact Me</button>
            </div>

            {/* 3. CSS Module - css/CardProfile.module.css */}
            <div className='card'>
                <img src={ image } />
                <div className={Styling.title}>Back End Developer</div>
                <div className={Styling.name}>Iwan Setiawan</div>
                <div className={Styling.desc}>Web designers generally have nothing to do with creating content for their projects. Even so, the look of a site can be incomplete if no words are included. Web designers need to find ways to</div>
                <button className={Styling.button}>Contact Me</button>
            </div>

            {/* 4. CSS in JS */}
        </div>
    )
}

export default CardProfile;
```

# List & Key (Data Looping)
```js
class List extends React.Component {

    // Higher Order Function
    render() {
        // Map
        const fruits = ['mangga', 'aple', 'delima', 'nanas'];
        const fruit = fruits.map((f, index) => <li key={index}>{f}</li>);

        // Filter
        const numbers = [1, 3, 5, 9, 2, 10];
        const number = numbers.filter((n) => n < 6);
        const num = number.map((n) => <li key={n.toString()}>{n}</li>);
        // Reduce
        const total = numbers.reduce((value, acc) => value + acc);

        return (
            <div>
                <h1>Hallo</h1>
                <ul>
                    {fruit}
                </ul>
                <ul>
                    {num}
                </ul>
                <p>Total = {total}</p>
            </div>
        )
    }
}
```

# Oject & State
```js
import {useState} from "react";

const Object = () => {

    //! Deklarasi Object
    // const motor = {
        // Property
    //     merek : "Honda",
    //     jenis : "ADV 160",
    //     warna : "Merah",
    //     bensin : "Bensin",
    //     harga : 30000000,
    //     plat : "D3452VDQ",
    //     status : "OFF",

        // Method
    //     menyalakan : () => {
    //         console.log('nyalakan mesin');
    //     }
    // }

    //! State
    let [mtr, setMtr] = useState(
        {
            // Property
            merek : "Honda",
            jenis : "ADV 160",
            warna : "Merah",
            bensin : 20,
            harga : 30000000,
            plat : "D3452VDQ",
            status : "OFF",
    
            // Method
            menyalakan : () => {
                console.log('menyalakan mesin');
                setMtr( data => {
                    return {
                        ...data,
                        status : "ON",
                        bensin : data.bensin - 5
                    }
                } )
            },

            mematikan : () => {
                console.log('mematikan mesin');
                setMtr( data => {
                    return {
                        ...data,
                        status : "OFF",
                    }
                } )
            },

            isiBensin : () => {
                console.log('isi bensin');
                setMtr( data => {
                    return {
                        ...data,
                        bensin : data.bensin + 20
                    }
                }
                )
            }
        }
    )

    return (
        <div>
            <ul>
                <li>Merek : {mtr.merek}</li>
                <li>Jenis : {mtr.jenis}</li>
                <li>Warna : {mtr.warna}</li>
                <li>Bensin : {mtr.bensin} L</li>
                <li>Harga : {mtr.harga}</li>
                <li>Plat Nomor: {mtr.plat}</li>
                <li>Status : {mtr.status}</li>
            </ul>
            <button onClick={ () => mtr.menyalakan() }>Nyalakan Mesin</button>
            <button onClick={ mtr.mematikan }>Matikan Mesin</button>
            <button onClick={ mtr.isiBensin }>Isi Bensin</button>
        </div>
    )
}

export default Object;
```

# Event Handling
```js
import React from 'react'

class EventReact extends React.Component {

    // Constructor
    constructor() {
        super();
        this.state = {
            nama : 'Budi'
        }
    }

    // Data/Method
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

    // Render
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
```

# React API
```js
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {

    const url = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);

    const getDataProducts = async () => {
        const response = await fetch(url);
        const dataProduct = await response.json();
        setProducts(dataProduct);
    }

    useEffect(() => {
        getDataProducts();
    })

    return (
        <div className="container">
            <div className="row">
                <h1>My Products</h1>
                { products.map( (product) => 
                    <div className="col-3 mb-3">
                        <CardProduct 
                        key={product.id} 
                        title={product.title} 
                        price={product.price} 
                        category={product.category} 
                        description={product.description} 
                        image={product.image}/>
                    </div> 
                ) }
            </div>
        </div>
    )
}

function CardProduct(props) {
    return (
        <Card style={{ width: '18rem', height: '100%' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <p>Price : {props.price}</p>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Products;
```

##
##

# Heading 1 / Judul Utama (gunakan #)

## Heading 2 / Sub Judul (gunakan ##)

Text biasa (ditulis biasa tanpa format apapun)

[Hyperlink](https://www.google.com) (nama hyperlink dibungkus kurung siku, urlnya dibungkus tanda kurung biasa)

```bash
git add .
git commit -m "baris code menggunakan backtick 3x di awal(sertakan bahasanya) dan akhir code"
git push
```

Untuk `menyoroti` bungkus text dengan backtick 1x

# Template

## Sub Judul 
```<bahasa>
git add .
git commit -m 'Update README.md'
git push

```

```kotlin

```

Update README.md