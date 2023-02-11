import { Fragment } from "react";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ProjectList from "./components/projectList/ProjectList";
import CurrentProject from "./components/currentProject/CurrentProject";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pl-architecture" element={<ProjectList name='Architektura' />} />
        <Route path="/pl-architecture/:projectName" element={<CurrentProject />} />
        <Route path="/pl-interiors" element={<ProjectList name='Wnętrza' />} />
        <Route path="/pl-interiors/:projectName" element={<CurrentProject />} />
        <Route path="/pl-design" element={<ProjectList name='Design' />} />
        <Route path="/pl-design/:projectName" element={<CurrentProject />} />
        <Route path="/pl-about" element={<About />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
