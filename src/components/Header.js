import React from 'react';
import logo from '../assets/попалопаантилопа.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img width="43px" height="53px" src={logo} alt="netu.loh"/>
        <p>СОЛЕНЬЯ</p>
      </div>
      <nav className="nav">
        <p>О КОМПАНИИ</p>
        <p>НАШИ СОЛЕНЬЯ</p>
        <p>КОНТАКТЫ</p>
        <p>СТАТЬИ</p>
      </nav>
      <div>
        <button>8 (999)777-228-17</button>
      </div>
    </header>
  );
}

export default Header;
