import React from 'react';
import { Link } from 'react-router-dom';
import toxin from '../../images/toxin.svg';
import expand from '../../images/expand.svg';
import './HeaderBar.scss';

const HeaderBar = props => {

    const [isOpenModal, setOpenModal] = React.useState(false)

    const { user, signOut, token } = props

    // React.useEffect(() => {
    //     const closeLogOutModal = document.getElementById('dashBoardContainer')
    //     closeLogOutModal.addEventListener('click', () => setOpenModal(false))
    //     return function removeListener() {
    //     closeLogOutModal.removeEventListener('click', () => setOpenModal(false))
    //     }
    // })

    // const openAndCloseLogOutModal = () => {
    //     if (!isOpenModal) {
    //         setOpenModal(true)
    //     } else {
    //         setOpenModal(false)
    //     }
    // }


    return (
        <div className="HeaderBar-Container">
            <div className="HeaderBar-Column">
                <img
                    className="HeaderBar-toxin"
                    src={toxin}
                    alt="toxin"
                />
            </div>
            <div className="HeaderBar-Column HeaderBar-Column-left">
                <Link to='/about' className="Link-style Link-style-bold">О нас</Link>
                <Link to='/about' className="Link-style">Услуги<img src={expand} /></Link>
                <Link to='/about' className="Link-style">Вакансии</Link>
                <Link to='/about' className="Link-style">Новости</Link>
                <Link to='/about' className="Link-style">Соглашения<img src={expand} /></Link>
            </div>
            <div className="HeaderBar-Column">
                <button className="button1">ВОЙТИ</button>
                <button className="button2">ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </div>
        </div>
    )
}

export default HeaderBar;