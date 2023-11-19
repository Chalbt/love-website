import '../styles/Home.css'
import { useState } from 'react'
import { useRef } from 'react'
import Nene from '../assets/videos/Nene-Proposal.mp4'
import NeneMiniature from "../assets/nene-miniature.png"
import { Link } from 'react-router-dom'
import SavoirFaire from "../assets/croquis.jpg"
import LesEscapades from "../assets/escapades.jpg"
import Roses from "../assets/roses.jpg"


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
                {/*<div className='contacts'>
                    <p className='lien-contacts'><Link to="/contact">GALLERY</Link></p>
                    <p className='lien-contacts'><Link to="/contact">CONTACTS</Link></p>
                </div>*/}
                <div className='services'>
                    <div className='savoir-faire'>
                        <p className='image-description'>SAVOIR FAIRE</p>
                        <Link to="/savoir-faire"><img className="img-savoir-faire" src={SavoirFaire} alt="photo des planches de croquis"/></Link> 
                        <p className='read-more'>Heloise et Abelard is the french leading marriage proposal agency. Trusted since 2011 for its confidentiality and its exclusive savoir-faire ... <Link to="/ha">Read more</Link></p>
                    </div>
                    <div className='h-et-a'>
                        <p className='image-description'>THE PROPOSAL</p>
                        <img className="img-savoir-faire" src={Roses} alt="photo d'un bouquet de roses rouges'"/>
                        <p className='read-more'>Immerse yourself in the exclusive universe of Heloise and Abelard with our 'Les Escapades' service—an experience designed to elevate the precious moments in your life ... <Link to="/ha">Read more</Link></p>
                    </div>
                    <div className='les-escapades'>
                        <p className='image-description'>LES ESCAPADES</p>
                        <Link to="/escapades"><img className="img-les-escapades" src={LesEscapades} alt="photo d'un lieu privé'"/></Link>
                        <p className='read-more'>Immerse yourself in the exclusive universe of Heloise and Abelard with our 'Les Escapades' service—an experience designed to elevate the precious moments in your life ... <Link to="/escapades">Read more</Link></p>
                    </div>
                </div>
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