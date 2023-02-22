import React from "react";
import primer from "../../assets/img/project-img1.png";
import second from "../../assets/img/project-img2.png";
import three from "../../assets/img/project-img3.png";
import "./ProjectsStyle.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-bx wow zoomIn">
        <h2>Projects</h2>
        <p>
          With my experience acquired through time I have realized several
          projects of different nature as they are{" "}
        </p>

    <div className="fold">  
    <div class="card">
      <div class="face face1">
        <div class="content">
           <i class="fab fa-windows"></i>            
          <img src={primer} alt="" />
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p className="parrafo"> E-ccomerce website for High Tide clothing company </p>
          <a href="https://github.com/MichaelGonzalez-bit?tab=repositories" target="_blank" rel="noreferrer"  type="button">GIT HUB</a>
        </div>
      </div>
   </div>

   <div class="card">
      <div class="face face1">
        <div class="content">
           <i class="fab fa-windows"></i>            
          <img src={second} alt="" />
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p className="parrafo"> Petshop website for the company AnimalExpress</p>
          <a href="https://github.com/MichaelGonzalez-bit?tab=repositories" target="_blank" rel="noreferrer"  type="button">GIT HUB</a>
        </div>
      </div>
   </div>

   <div class="card">
      <div class="face face1">
        <div class="content">
           <i class="fab fa-windows"></i>            
          <img src={three} alt="" />
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p className="parrafo">Real Estate Real Roots Website</p>
          <a href="https://github.com/MichaelGonzalez-bit?tab=repositories" target="_blank" rel="noreferrer"  type="button">GIT HUB</a>
        </div>
      </div>
   </div>

   <div class="card">
      <div class="face face1">
        <div class="content">
           <i class="fab fa-windows"></i>            
          <img src={primer} alt="" />
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p className="parrafo"> Game Mind Python</p>
          <a href="https://github.com/MichaelGonzalez-bit?tab=repositories" target="_blank" rel="noreferrer"  type="button">GIT HUB</a>
        </div>
      </div>
   </div>
   
   <div class="card">
      <div class="face face1">
      <div class="content">
           <i class="fab fa-windows"></i>            
          <img src={three} alt="" />
        </div>
      </div>
      <div class="face face2">
        <div class="content">
        <p className="parrafo">Web Scrapping</p>
          <a href="https://github.com/MichaelGonzalez-bit?tab=repositories" target="_blank" rel="noreferrer"  type="button">GIT HUB</a>
        </div>
      </div>
   </div>
   
   
   <div class="card">
      <div class="face face1">
      <div class="content">
           <i class="fab fa-windows"></i>            
          <img src={three} alt="" />
        </div>
      </div>
      <div class="face face2">
        <div class="content">
        <p className="parrafo"> Analitic Images</p>
          <a href="https://github.com/MichaelGonzalez-bit?tab=repositories" target="_blank" rel="noreferrer"  type="button" >GIT HUB</a>
        </div>
      </div>
   </div>
   </div>  
   </div>
   </div>
  );
};

export default Projects;
