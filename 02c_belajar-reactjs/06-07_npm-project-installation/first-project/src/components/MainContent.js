import Hero from "./Hero";
import CardJurusan from "./CardJurusan";
import CardKegiatan from "./CardKegiatan";
import jurusan1 from "./../assets/tkj.jpeg"
import jurusan2 from "./../assets/akuntansi.jpeg"
import jurusan3 from "./../assets/tsm.jpeg"
import kegiatan1 from "./../assets/kegiatan (1).jpeg"
import kegiatan2 from "./../assets/kegiatan (2).jpeg"
import kegiatan3 from "./../assets/kegiatan (3).jpeg"
import kegiatan4 from "./../assets/kegiatan (4).jpeg"
import kegiatan5 from "./../assets/kegiatan (5).jpeg"

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
                        <CardJurusan image={jurusan1} jurusan="Teknik Komputer Jaringan"/>
                    </div>
                    <div className="col-lg-4 col-12">
                        <CardJurusan image={jurusan2} jurusan="Akuntansi dan Perkantoran"/>
                    </div>
                    <div className="col-lg-4 col-12">
                        <CardJurusan image={jurusan3 } jurusan="Teknik Sepeda Motor"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    <div className="col-12 text-center my-3">
                        <CardKegiatan image={kegiatan1} desc="Ini adalah kegiatan bersama"/>
                    </div>
                    <div className="col-12 text-center my-3">
                        <CardKegiatan image={kegiatan2} desc="Ini adalah kegiatan bersama"/>
                    </div>
                    <div className="col-12 text-center my-3">
                        <CardKegiatan image={kegiatan3} desc="Ini adalah kegiatan bersama"/>
                    </div>
                    <div className="col-12 text-center my-3">
                        <CardKegiatan image={kegiatan4} desc="Ini adalah kegiatan bersama"/>
                    </div>
                    <div className="col-12 text-center my-3">
                        <CardKegiatan image={kegiatan5} desc="Ini adalah kegiatan bersama"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;