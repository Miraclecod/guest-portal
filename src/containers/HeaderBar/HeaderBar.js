import React from 'react';
import toxin from '../../images/toxin.svg';
import './HeaderBar.scss';

const HeaderBar = () => {

   

    return (
        <div className="HeaderBar-Container">
            <div className="HeaderBar-Column">
                <img
                    className="HeaderBar-toxin"
                    src={toxin}
                    alt="toxin"
                />
            </div>
            <div className="HeaderBar-Column">
                <p>О нас</p>
                <p>Услуги</p>
                <p>Вакансии</p>
                <p>Новости</p>
                <p>Соглашения</p>
            </div>
            <div className="HeaderBar-Column">
                <button className="button1">ВОЙТИ</button>
                <button className="button2">ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </div>
        </div>
    )
}

export default HeaderBar;