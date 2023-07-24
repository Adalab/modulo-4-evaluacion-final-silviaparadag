import '../styles/layout/Footer.scss';

const Footer = () => {
    
    return(
       <footer className='footer'>
          <span className="footer__text"> ©  <a href="https://adalab.es/bootcamp-programacion/" target="_blank" rel="noreferrer" className="footer__text--link">Adalab 2023</a></span>
          <span className="footer__text">Trótula promotion</span>
        </footer>
    )
}

export default Footer;