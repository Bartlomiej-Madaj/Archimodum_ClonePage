import React, { useContext, useEffect, useState } from "react";
import styled from "./CurrentProject.module.css";
import { useParams } from "react-router-dom";
import { Projects } from "../../data/data";
import HeaderContext from "../../store/header-context";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const CurrentProject: React.FC = () => {
  type ProjectNameParams = {
    projectName: string;
  };

  const activeCxt = useContext(HeaderContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bigerImage, setBigerImage] = useState(false);
  let { projectName } = useParams<ProjectNameParams>();

  useEffect(() => {
    activeCxt.changeActive(true);
  }, [])

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  const currentProject = Projects.find(
    (project) => project.title.toUpperCase() === projectName!.toUpperCase()
  );

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const activeMenu = activeCxt.menuActive;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? currentProject!.image.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === currentProject!.image.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const setRightImage = (index: number) => {
    setCurrentIndex(index);
  };

  const showBigerImage = () => {
    setBigerImage(true);
    document.body.style.overflowY = 'hidden';
  }

  const removeBigerImage = () => {
    setBigerImage(false)
    document.body.style.overflowY = 'auto';
  }

  return (
    <HelmetProvider>
    <article className={ activeMenu ? `${styled.currentProject} ${styled.currentProjectMarginTop}` : `${styled.currentProject}`}>
      <Helmet>
        <meta name="description" content={currentProject?.title} />
      </Helmet>
      <div className={ !bigerImage ? styled.currentProject__carousel : styled.currentProject__carousel__biger }>
        {currentProject?.image.map((image, index) => (
          <div
            key={index}
            className={
              currentIndex === index
                ? `${styled.currentProject__imagesWrap} ${styled.currentProject__imagesWrap__active}`
                : `${styled.currentProject__imagesWrap} `
            }
          >
            <div onClick={showBigerImage}
              className={ styled.currentProject__images}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
        <button 
          className={styled.currentProject__leftArrow}
          onClick={goToPrevious}
        >
          &lsaquo;
        </button>
        <button className={styled.currentProject__rightArrow} onClick={goToNext}>
          &rsaquo;
        </button>
        <div className={styled.currentProject__pagination}>
          {currentProject?.image.map((_, index) => {
            return (
              <div
                onClick={setRightImage.bind(null, index)}
                key={index}
                className={
                  currentIndex === index
                    ? `${styled.currentProject__pagination__dot} ${styled.currentProject__pagination__dot__active}`
                    : `${styled.currentProject__pagination__dot} `
                }
              ></div>
            );
          })}
        </div>
      </div>
      <article className={styled.currentProject__wrap}>
        <div className={styled.currentProject__name}>
          <h2>{currentProject?.title.toUpperCase()}</h2>
          <span>
            <i>
              {currentProject?.country.toUpperCase()}, &nbsp; {currentProject?.year}
            </i>
          </span>
        </div>
        <div className={styled.currentProject__description}>
          <span>{currentProject?.description}</span>
        </div>
      </article>
    </article>
    {bigerImage && <div onClick={removeBigerImage} className={styled.currentProject__images__background}></div>}
    </HelmetProvider>
  );
};

export default CurrentProject;
