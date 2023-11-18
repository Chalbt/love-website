import '../styles/Home.css'
import { useState } from 'react'
import { useRef } from 'react'
import Nene from '../assets/videos/Nene-Proposal.mp4'
import NeneMiniature from "../assets/nene-miniature.png"
import { Link } from 'react-router-dom'
import SavoirFaire from "../assets/croquis.jpg"
import LesEscapades from "../assets/escapades.jpg"


function Home() {

    const videoRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='home'>

            <div className='menu-photo'>
                <div className='savoir-faire'>
                    <p className='image-description'>Savoir Faire</p>
                    <Link to="/ha"><img className="img-savoir-faire" src={SavoirFaire} alt="photo des planches de croquis"/></Link> 
                </div>
                <div className='h-et-a'>
                    <p className='image-description'>Marriage proposal ?</p>
                    <img className="img-savoir-faire" src={SavoirFaire} alt="photo des planches de croquis"/>
                </div>
                <div className='les-escapades'>
                    <p className='image-description'>Les Escapades</p>
                    <Link to="/escapades"><img className="img-les-escapades" src={LesEscapades} alt="photo d'un lieu privé'"/></Link>
                </div>
            </div>

            <div className='contacts'>
                <p className='lien-contacts'><Link to="/contact">CONTACTS</Link></p>
            </div>

            {isModalOpen && (
                <div className="modal" onMouseLeave={closeModal}>
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <video className="video-nene" ref={videoRef} controls width="800" height="450" poster={NeneMiniature}>
                            <source src={Nene} type="video/mp4" />
                            Votre navigateur ne prend pas en charge la lecture de vidéos.
                        </video>
                    </div>
                </div>
            )}

        </div>
    )

}

export default Home