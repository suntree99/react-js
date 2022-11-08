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
* Tambahkan `import 'bootstrap/dist/css/bootstrap.min.css';` ke index.js

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