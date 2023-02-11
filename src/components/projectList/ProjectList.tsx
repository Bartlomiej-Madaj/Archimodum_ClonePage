import React, { useContext, useEffect } from "react";
import styled from "./ProjectList.module.css";
import SingleProject from "./SingleProject";
import {
  architectureProjects,
  interiorProjects,
  designProjects,
} from "../../data/data";
import { ProjectInterface } from "../../ts/interfaces/app_interfaces";
import HeaderContext from "../../store/header-context";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ProjectList: React.FC<{ name: string }> = ({ name }) => {
  const activeCxt = useContext(HeaderContext);

  const activeMenu = activeCxt.menuActive;

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])


   useEffect(() => {
    activeCxt.changeActive(true);
  }, [])

  let projectArray: ProjectInterface[] = [];

  switch (name) {
    case "Architektura": {
      projectArray = architectureProjects;
      break;
    }
    case "Wnętrza": {
      projectArray = interiorProjects;
      break;
    }
    case "Design": {
      projectArray = designProjects;
      break;
    }
  }

  return (
    <HelmetProvider>
    <div
      className={ activeMenu ? `${ styled.projectList } ${ styled.projectListMarginTop }` : `${ styled.projectList }`}
      
    >
      <Helmet>
        <title>Archimodum | {name}</title>
      </Helmet>
      <h1>{name}</h1>
      {projectArray.map((project, index) => (
        <div key={index} className={styled.projectList__project}>
          <SingleProject project={project} />
        </div>
      ))}
    </div>
    </HelmetProvider>
  );
};

export default ProjectList;
