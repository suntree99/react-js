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