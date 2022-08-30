import React from "react";

const PortfolioSection = () => {
const projects = [
    { id: 1, img: 'https://i.pinimg.com/736x/aa/a6/f0/aaa6f0ac5501503db355ca97c1e6780b.jpg', label: '',text: '' },
    { id: 2, img: 'https://images-platform.99static.com//ZUU0DJkgfiPJzVKTgSEaii6H9G8=/5x0:1705x1700/fit-in/590x590/99designs-contests-attachments/111/111213/attachment_111213383', label: '',text: '' }
]    
    return (
<div className="portfolio-container">
      <div className="text-center">
        <h2 data-aos="fade-up">PORTFOLIO</h2>
        <h3 data-aos="fade-left">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div className="project-list">
        <div className="project row">
          {projects.map(function (project) {
            const { id, img, label, text } = project;
            return (
              <div className='project' key={`${id}`}>
                <img src={`${img}`} />
                <h2>{`${label}`} </h2>
                <p>{`${text}`}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default PortfolioSection;