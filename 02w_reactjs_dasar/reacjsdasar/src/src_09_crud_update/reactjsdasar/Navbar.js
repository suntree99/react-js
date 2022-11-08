// ? COMPONENT

// ? rcc - React CLASS COMPONENT
// * untuk koomponen yang relatif besar dengan life-cycle
// import React, { Component } from "react";

// export default class Navbar extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Navbar</h2>
//             </div>
//         )
//     }
// }

// ? rfc - React FUNCTIONAL COMPONENT
// * jarang dipakai
// import React from "react";

// export default function Navbar() {
//     return (
//         <div>
//             <h2>Navbar</h2>
//         </div>
//     );
// }

// ? rafc - React ARROW FUNCTION COMPONENT
// * untuk component kecil yang tidak menggunakan life-cycle
import React from 'react';

// export const Navbar = () => {
const Navbar = () => {
    return (
        <div>
            <h2>Navbar</h2>
        </div>
    )
};

export default Navbar;