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