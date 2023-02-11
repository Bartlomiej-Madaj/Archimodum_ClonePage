import React, { useContext, useEffect } from "react";
import HeaderContext from "../store/header-context";
import styled from "./Main.module.css";
import Project from "./mainPage/Project";
import { projectListArray } from "../data/data";


const Main: React.FC = () => {
  const activeCxt = useContext(HeaderContext);

  useEffect(() => {
    activeCxt.changeActive(false);
  }, [])

 
  return (
    <main className={styled.main}>
        <div className={styled.main__background} style={{backgroundImage: `url(${"/images/background.webp"})`}}>
        </div>
      <div className={styled.main__projects}>
        {projectListArray.map((project, index) => (
          <div
            onClick={() => activeCxt.changeActive(true)}
            key={index}
            className={styled.main__project}
          >
            <Project project={project} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
