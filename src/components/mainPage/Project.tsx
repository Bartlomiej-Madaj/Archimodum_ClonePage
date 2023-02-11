import React, { useContext } from "react";
import styled from "./Project.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ProjectProps } from "../../ts/interfaces/app_interfaces";
import HeaderContext from "../../store/header-context";

const Project: React.FC<ProjectProps> = ({ project }) => {
  const navigate = useNavigate();
  const activeCxt = useContext(HeaderContext);

  return (
    <Link to={project.path} className={styled.project} onClick={() => {navigate(project.path); activeCxt.changeActiveMenu(false); }}>
      <section className={styled.project__box}>
        <img src={project.image} alt={styled.project__content__description} />
        <div className={styled.project__wrap}>
          <div className={styled.project__content}>
            <h2 className={styled.project__content__title}>{project.name}</h2>
            <span className={styled.project__content__description}>
              {project.description}
            </span>
            <span className={styled.project__content__author}>
              <i>{project.author}</i>
            </span>
          </div>
          <span><b>Wybrane Projekty</b></span>
        </div>
      </section>
    </Link>
  );
};

export default Project;
