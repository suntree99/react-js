# React JS

## Instalasi
* Menggunakan CDN
    * Kunjungi https://reactjs.org/ -> Docs -> Installation -> CDN Llnks
    * Copy dan paste link (development atau production) ke file HTML di head section 
    * Masuk ke Installation -> Add React to a Website
    * Copy dan paste link babel (Quickly Try JSX) ke file HTML di head section

* Menggunakan NPM

## Konsep Dasar React JS 
* Membuat DOM Container (di body HTML)
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

* Melakukan Render (di bawah Class Component)
    ```html
    <script type="text/babel">
        ReactDOM.render(<Hello />, document.getElementById('Container'));
    </script>
    ```

## Memahami JSX
* Membuat DOM Container (di body HTML)
    ```html
        <div id="App">
        </div>
    ```

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

* Membuat Komponen JSX
    ```html
    <script type="text/babel">
        class ButtonJSX extends React.Component {
            render() {
                return <button className={"btn btn-primary"}>Primary Button</button>
            }
        }

        class CardsJSX extends React.Component {
            render() {
                const card = (
                    <div className={"card"}>
                        <div className="card-body">
                            <h5 className={"card-title"}>Hallo Aku adalah card dari JSX</h5>
                            <p className={"card-text"}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href={"#"} className={"btn btn-primary"}>Go Some Where</a>
                        </div>
                    </div>
                )
                return card
            }
        }
        
        ReactDOM.render(<CardsJSX/>, document.getElementById('App'));
    </script>
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