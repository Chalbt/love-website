import "../styles/SavoirFaire.css"
import { useState } from 'react'
import { useRef } from 'react'
import Nene from '../assets/videos/Nene-Proposal.mp4'
import NeneMiniature from "../assets/nene-miniature.png"
import { Link } from 'react-router-dom'

function HA() {

    const videoRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <div>
            <div className="HA">
                <p className='introduction' id='intro-1'>Heloise et Abelard is the french leading marriage proposal agency.</p>

                <p className='introduction'>Trusted since 2011 for its confidentiality and its exclusive savoir-faire, the agency became the open secret of leaders, <span onMouseEnter={openModal} className='celebrities-link'>athletes</span> and anyone seeking to create everlasting moments in the name of love.</p>

                <p className='introduction'>Built around experts in scenography, cinema-graded decorators, designers and a passionate groups of creatives, the agency dominates a large range of productions techniques to empower the most delicate and the most spectacular requests.</p>

                <p className='introduction'>In 2023, Heloise et Abelard created Les Escapades. The latest signature of the agency curates travel experiences around the globe and uncovers the most exclusive travel gems.</p>
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

export default HA