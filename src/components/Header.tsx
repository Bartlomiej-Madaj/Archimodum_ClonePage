import React, { useContext } from "react";
import styled from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import HeaderContext from "../store/header-context";

function Header() {
  const navigate = useNavigate();
  const activeCxt = useContext(HeaderContext);

  const active = activeCxt.headerActive;
  const activeMenu = activeCxt.menuActive;

  const navMenu = (
    <>
      <button
        onClick={() => {
          navigate("/");
          activeCxt.changeActive(false);
          activeCxt.changeActiveMenu(false);
        }}
      >
        HOME
      </button>
      <button
        onClick={() => {
          navigate("/pl-architecture");
          activeCxt.changeActive(true);
          activeCxt.changeActiveMenu(false);
        }}
      >
        ARCHITEKTURA
      </button>
      <button
        onClick={() => {
          navigate("/pl-interiors");
          activeCxt.changeActive(true);
          activeCxt.changeActiveMenu(false);
        }}
      >
        WNĘTRZA
      </button>
      <button
        onClick={() => {
          navigate("/pl-design");
          activeCxt.changeActive(true);
          activeCxt.changeActiveMenu(false);
        }}
      >
        DESIGN
      </button>
      <button
        onClick={() => {
          navigate("/pl-about");
          activeCxt.changeActive(true);
          activeCxt.changeActiveMenu(false);
        }}
      >
        KONTAKT
      </button>
    </>
  );

  return (
  <>
      <div className={ `${active ? styled.header__background : styled.header__backgroundMain }`}></div>
      <header className={active ? `${styled.header__active}` : `${styled.header}`}>
          <div className={styled.header__brand}>
            <div className={styled.header__brand__logo}>
              <img src="/images/logo.webp" alt="Logo Archimodum" />
            </div>
            <a href="/"
              className={styled.header__brand__name}
              onClick={() => {
                navigate("/");
                activeCxt.changeActive(false);
                activeCxt.changeActiveMenu(false);
              }}
            >
              ARCHIMODUM
            </a>
          </div>
          <button
            onClick={() =>
              activeMenu
                ? activeCxt.changeActiveMenu(false)
                : activeCxt.changeActiveMenu(true)
            }
            className={styled.header__navbar__menuIcon}
          >
            <div
              className={`${activeMenu && styled.header__navbar__menuIcon__bar1}`}
            ></div>
            <div
              className={`${activeMenu && styled.header__navbar__menuIcon__bar2}`}
            ></div>
            <div
              className={`${activeMenu && styled.header__navbar__menuIcon__bar3}`}
            ></div>
          </button>
          <nav className={styled.header__navbar}>{navMenu}</nav>
      </header>
      <nav className={ activeMenu ? `${ active ? styled.header__dropMenuActive : styled.header__dropMenuMainActive } ${styled.header__dropMenu}` : `${styled.header__dropMenu} `}>
      {activeMenu && navMenu}
    </nav>
  </>
  );
}

export default Header;
