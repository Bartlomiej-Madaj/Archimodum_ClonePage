import React, { useContext, useEffect } from "react";
import styled from "./ProjectList.module.css";
import SingleProject from "./SingleProject";
import {
  architectureProjectArray,
  interiorProjectArray,
  designProjectArray,
} from "../../data/data";
import { ProjectArrayInterface } from "../../ts/interfaces/app_interfaces";
import HeaderContext from "../../store/header-context";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ProjectList: React.FC<{ name: string }> = ({ name }) => {
  const activeCxt = useContext(HeaderContext);

  const activeMenu = activeCxt.menuActive;


   useEffect(() => {

    activeCxt.changeActive(true);
  }, [])

  let projectArray: ProjectArrayInterface[] = [];

  switch (name) {
    case "Architektura": {
      projectArray = architectureProjectArray;
      break;
    }
    case "Wnętrza": {
      projectArray = interiorProjectArray;
      break;
    }
    case "Design": {
      projectArray = designProjectArray;
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
