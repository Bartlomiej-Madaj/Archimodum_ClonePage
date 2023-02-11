import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "./SingleProject.module.css";
import { SingleProjectProps } from '../../ts/interfaces/app_interfaces';
import HeaderContext from "../../store/header-context";

const SingleProject: React.FC<SingleProjectProps> = ({ project }) => {
  const navigate = useNavigate();
  const activeCxt = useContext(HeaderContext);

  return (
    <Link to={`/${project.rootPath}/${project.title}`} className={styled.singleProject}>
      <section
        onClick={() => {navigate(`/${project.rootPath}/${project.title}`); activeCxt.changeActiveMenu(false); activeCxt.changeActive(true);}}
        className={styled.singleProject__content}
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <h2>{project.title}</h2>
        <div className={styled.singleProject__drop}></div>
      </section>
    </Link>
  );
};

export default SingleProject;
