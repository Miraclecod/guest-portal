import React from 'react';
import './style.scss'
import instagram from '../../images/instagram.svg'
import twitter from '../../images/twitter.svg'
import facebook from '../../images/facebook.svg'

const Footer = () => {

    return (
        <div className="footerContainer">
            <p>Copyright &copy; 2021 Toxin отель. Все права зачищены.</p>
            <div className="imagesContainer">
                <a className="imageLinks" href="https://twitter.com/"><img src={twitter} /></a>
                <a className="imageLinks" href="https://www.facebook.com/"><img src={facebook} /></a>
                <a className="imageLinks" href="https://www.instagram.com/"><img src={instagram} /></a>
            </div>
        </div>
    )
}

export default Footer;