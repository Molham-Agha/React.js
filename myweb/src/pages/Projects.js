import React from "react";
import { Link } from "react-router-dom";
import p2 from "../photos/Screenshot (2).png";
import p3 from "../photos/Screenshot (3).png";
import p4 from "../photos/Screenshot (4).png";
import p5 from "../photos/Screenshot (10).png";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="container-projects">
        <div className="box-projects">
            <img src={p2} alt="" />
            <p>React.js | Effective100%</p>
            <hr />
            <div className="links">
                <Link to="https://vega-6445d.web.app/">Demo</Link>
                <Link to="https://github.com/Molham-Agha/vega">GitHup</Link>
            </div>
          </div>
          <div className="box-projects">
            <img src={p3} alt="" />
            <p>Display frame</p>
            <hr />
            <div className="links">
                <Link to="https://project1-html-css.web.app/">Demo</Link>
                <Link to="https://github.com/Molham-Agha/project--1-">GitHup</Link>
            </div>
          </div>
          <div className="box-projects">
            <img src={p4} alt="" />
            <p>Display frame</p>
            <hr />
            <div className="links">
                <Link to="https://project2-html-css.web.app/">Demo</Link>
                <Link to="https://github.com/Molham-Agha/project--2-">GitHup</Link>
            </div>
          </div>
          <div className="box-projects">
            <img src={p5} alt="" />
            <p>Display frame</p>
            <hr />
            <div className="links">
                <Link to="https://project3-html-css.web.app/">Demo</Link>
                <Link to="https://github.com/Molham-Agha/project--3-">GitHup</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
