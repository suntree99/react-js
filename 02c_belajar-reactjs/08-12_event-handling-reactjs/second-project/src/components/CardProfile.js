import bgImage from './../assets/accent.png'
import profile from './../assets/profile.jpeg'
import image from './../assets/image.png'

import './../css/style.css'
import Styling from './../css/CardProfile.module.css'

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
                // // backgroundImage : 'url(' + bgImage + ')', // Concatenation
                // backgroundImage : `url(${bgImage})`, // Template Literal
                // backgroundPosition : 'bottom right',
                // backgroundRepeat : 'no-repeat',
                // display : 'flex',
                // justifyContent : 'center',
                // alignItems : 'center'
                // }

                //* Menggunakan CSS Variable
                Wrapper
            }
        >
            {/* 2. CSS file */}
            <div className='card'>
                <img className='photo' src={ profile } />
                <div className='title'>Front End Developer</div>
                <div className='name'>Budi Darmawan</div>
                <div className='desc'>Web designers generally have nothing to do with creating content for their projects. Even so, the look of a site can be incomplete if no words are included. Web designers need to find ways to</div>
                <button className='button'>Contact Me</button>
            </div>

            {/* 3. CSS Module */}
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