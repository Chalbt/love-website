import '../styles/Gallery.css';
import Nene from '../assets/videos/Nene-Proposal.mp4'

function Gallery() {

    const url = 'assets/videos/Nene-Proposal.mp4'

    return (
        <div className='gallery'>
          <h2>Nenê - Spectacular proposal in NY</h2>
          <video controls width="640" height="360">
              <source src={Nene} type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture de vidéos.
          </video>
        </div>
    );
  }
  
  export default Gallery;