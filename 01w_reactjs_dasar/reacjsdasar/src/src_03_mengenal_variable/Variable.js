import React from 'react'

// * Const
const harga = 10000;
// harga = 20000; // const tidak dapat diubah

// * Var
// var harga = 10000;
// harga = 20000; // dapat diubah di scope yang sama
// if(true) {
    // harga = 30000; // dapat diubah di scope yang berbeda
    // var harga = 40000; // dapat dideklarasikan ulang dan diakses dari luar scope 
// }

// * Let
// let harga = 10000;
// harga = 20000; // dapat diubah di scope yang sama
// if(true) {
    // harga = 30000; // dapat diubah di scope yang berbeda (child)
    // let harga = 40000; // jika dideklarasikan dalam scope, TIDAK dapat dipanggil dari scope lebih luar (parent)
// }

const Variable = () => {
  return (
    <div>
      <h2>Harga : {harga}</h2>
    </div>
  )
}

export default Variable
