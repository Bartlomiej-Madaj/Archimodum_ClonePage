import React, { useContext, useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HeaderContext from "../store/header-context";
import styled from "./About.module.css";

const About: React.FC = () => {

  const activeCxt = useContext(HeaderContext);

  const activeMenu = activeCxt.menuActive;

  useEffect(() => {
    activeCxt.changeActive(true);
  }, [])

  return (
    <>
    <HelmetProvider>
        <section className={ activeMenu ? `${styled.about} ${styled.aboutMarginTop}` : `${styled.about}` } >
        <Helmet>
          <title>Archimodum | Kontakt</title>
        </Helmet>
          <article className={styled.about__content}>
            <h2>ARCHIMODUM STUDIO</h2>
            <div className={styled.about__content__description__wrap}>
              <span className={styled.about__content__description__1}>
                Archimodum Studio jest biurem projektowym działającym na rynku
                polskim i włoskim od ponad dziesięciu lat, zajmujemy się
                wykonaniem projektów architektonicznych dla średnich i dużych
                inwestycji, projektami wielobranżowymi dla mniejszych inwestycji
                oraz projektami wnętrz. Biuro specjalizuje się w architekturze
                modularnej oraz projektach innowacyjnych , wymagających
                szczególnych rozwiązań. ​W poszukiwaniu eleganckich i
                ergonomicznych form oraz nowych i ciekawych rozwiązań
                przestrzennych, ciągle eksperymentujemy z architekturą,
                urbanistyką i designem. ARCHIMODUM wchodzi w skład sieci biur
                projektowych, co pozwala na tworzenie różnych konfiguracji i
                jednostek projektowych, zdolnych do obsługi nawet najbardziej
                wymagających rodzajów inwestycji.
                <hr />
              </span>
              <span className={styled.about__content__description__2}>
                ​NAGRODY: <br /> 2006 – Nagroda za najlepszą pracę dyplomową,
                Polska. <br /> 2006 – Nagroda dla „Wyróżniającego się Absolwenta
                Politechniki Poznańskiej”. <br /> 2010 – Zwycięzca
                międzynarodowego konkursu na Targach Designu w Mediolanie – Public
                Design Festival, Włochy <br /> 2010 – Hospitality Award – projekt
                hotelu modularnego, Włochy <br /> 2012 – Zwycięstwo w Konkursie na
                Opracowanie Koncepcji Architektoniczno-Krajobrazowej Ośrodków
                Rekreacyjno-Sportowych – Ministerstwo Sportu i Turystyki.
              </span>
            </div>
          </article>
          <article className={styled.about__author}>
            <div className={styled.about__author__image}>
             
            </div>
            <div className={styled.about__author__description}>
              <h2>MICHAŁ RUCIŃSKI</h2>
              <span>
                Michal Rucinski urodzony w 1981 roku. Skończył studia z
                wyróżnieniem na Wydziale Architektury i Planowania Przestrzennego
                na Politechnice Poznańskiej w 2006 roku. W latach 2003 - 2005
                studiował we Włoszech na Wydziale Architektury na Politechnice w
                Mediolanie (Politecnico di Milano). Rozpoczął karierę zawodową we
                Włoszech, w Studiu Land S.r.l. w Mediolanie na stanowisku
                projektanta architektury, urbanistyki i krajobrazu. W 2007
                dołączył do zespołu Studia Blast S.r.l. w Mediolanie na stanowisku
                kierownika projektu oraz projektanta w zespole rozwoju,
                innowacyjności i nowych technologii. Po nabyciu dziesiecioletniego
                doświadczenia zawodowego we Włoszech, od 2012 kontynuuje
                projektowanie architektoniczne w Archimodum Studio. Ma na koncie
                wiele zrealizowanych projektów w Polsce i zagranicy,
                wyróżniających się jakością rozwiązań oraz elegancją.
              </span>
            </div>
          </article>
        </section>
        <div className={styled.about__personalData}>
          <div className={styled.about__personalData__left}>
            <div className={styled.about__personalData__logo}>
              <img src="/images/logo.webp" alt="Logo" />
            </div>
            <h1>ARCHIMODUM</h1>
          </div>
          <div className={styled.about__personalData__right}>
            <h3>DANE KONTAKTOWE</h3>
            <div className={styled.about__personalData__wrap}>
              <span className={styled.about__personalData__number}>
                Tel: 0048 667 366 966
              </span>
              <span className={styled.about__personalData__email}>
                Email: info@archimodum.com
              </span>
              <span className={styled.about__personalData__place1}>
                Al. Jana Pawła II 11/1322 <br /> 00-828, Warszawa
              </span>
              <span className={styled.about__personalData__place2}>
                Ul. Roosvelta 89A <br /> 62-200, Gniezno
              </span>
            </div>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default About;
