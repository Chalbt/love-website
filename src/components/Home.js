import '../styles/Home.css'
import { useState } from 'react'
import { useRef } from 'react'
import Nene from '../assets/videos/Nene-Proposal.mp4'
import NeneMiniature from "../assets/nene-miniature.png"
import { Link } from 'react-router-dom'
import HeloiseEtAbelard from "../assets/croquis.jpg"
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
            <div className='about'>
                <div className='accueil'>
                    <div className='photo-accueil'>
                        <img className="HetA" src={HeloiseEtAbelard} alt="photo des planches de croquis"/>
                        <p className='image-description'>HELOISE & ABELARD</p>
                    </div>
                    <div className='photo-accueil'>
                        <img className="HetA" src={LesEscapades} alt="photo d'un lieu privé"/>
                        <p className='image-description'>LES ESCAPADES</p>
                    </div>
                </div>
                <h1 className="brand-name">Heloise & Abelard</h1>
                <p className='introduction' id='intro-1'>Heloise et Abelard is the leading marriage proposal agency, built around experts in scenography, cinema-graded decorators and passionates groups of creatives.</p>
                <p className='introduction'>Trusted for its confidentiality and its exclusive savoir-faire, Heloise et Abelard is renowned as the go to agency for leaders, <span onMouseEnter={openModal} className='celebrities-link'>celebrities</span> and anyone seeking to create everlasting moments, in the name of love.</p>
                <p className='introduction'>Paris based, the agency is delighted to welcome you in its office or to have an <Link to ="/Contact">expert reaching you</Link>.</p>
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