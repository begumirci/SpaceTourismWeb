import logo from '../../../public/logo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(true);
  }
  return (
    <div>
      <header className='header'>
        <div className='header-logos'>
          <img className='logo' src={logo} alt='logo' />
          <img
            className='menu'
            src='../../../public/menu.svg'
            alt=''
            onClick={handleClick}
          />
        </div>

        {isOpen ? (
          <div className='menu-drawer'>
            <img
              src='../../../public/close.svg'
              alt=''
              onClick={() => setIsOpen(false)}
            />
            <div className='menu-list'>
              <NavLink to='/'>
                <div>
                  <span>00</span>
                  HOME
                </div>
              </NavLink>
              <NavLink to='/destination'>
                <div>
                  <span>01</span>
                  DESTİNATİON
                </div>
              </NavLink>
              <NavLink to='/crew'>
                <div>
                  <span>02</span>
                  CREW
                </div>
              </NavLink>
              <NavLink to='/technology'>
                <div>
                  <span>03</span>
                  TECHNOLOGY
                </div>
              </NavLink>
            </div>
          </div>
        ) : (
          ''
        )}
        <nav className='nav-menu'>
          <div className='nav-list primary-navigation nav-underline'>
            <NavLink to='/'>
              <div>
                <span>00</span>
                HOME
              </div>
            </NavLink>
            <NavLink to='/destination'>
              <div>
                <span>01</span>
                DESTİNATİON
              </div>
            </NavLink>
            <NavLink to='/crew'>
              <div>
                <span>02</span>
                CREW
              </div>
            </NavLink>
            <NavLink to='/technology'>
              <div>
                <span>03</span>
                TECHNOLOGY
              </div>
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
}
