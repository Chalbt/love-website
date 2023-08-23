import { useRef } from 'react';
import '../styles/Gallery.css';
import Nene from '../assets/videos/Nene-Proposal.mp4'
import NeneMiniature from "../assets/nene-miniature.png"

function Gallery() {

    const videoRef = useRef(null);

    return (
        <div className='gallery'>
          <h2>Proposal in NY</h2>
          <video ref={videoRef} controls width="1000" height="562" poster={NeneMiniature}>
              <source src={Nene} type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture de vidéos.
          </video>
        </div>
    );
  }
  
  export default Gallery;