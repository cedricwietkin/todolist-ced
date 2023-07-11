import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function () {
  return (
    <footer>
      <ul>
        <li><a href="https://www.facebook.com/search/top?q=becode.org" target="_blank"><FontAwesomeIcon icon={faFacebook} className='facebook_icon'/></a></li>
        <li><a href="https://www.instagram.com/cedric_wietkin/" target="_blank"><FontAwesomeIcon icon={faInstagram} className='instagram_icon' /></a></li>
        <li><a href="https://github.com/cedricwietkin" target='_blank'><FontAwesomeIcon icon={faGithub} className='github_icon'/></a></li>
        <li><a href="https://www.linkedin.com/in/cedric-wietkin-a6736b26b/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='linkedin_icon'/></a></li>
      </ul>
    </footer>
  );
}