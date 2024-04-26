import footerLogo from '../../assets/image/logo/f_logo.png';

const Footer = () => {
    return (
        <footer>
            <img src={footerLogo} alt="Logo de Kasa" />
            <p className='p-footer'>© 2020, Kasa All rights reserved</p>
        </footer>
    );
};

export default Footer;