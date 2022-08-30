import React from "react";
import '/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/components/AboutSection/AboutSection.css'

const AboutSection = () => {
    const aboutContent = [
        {id:1, occupation: 'Web Developer',headText:'Vinh Nguyen', text:"Hi there! I'm a full-stack web developer based in St.Pete Florida."}
    ]
    return (
        <div className="about-container">
      <div className="text-center">
        <h2 data-aos="fade-up">ABOUT ME</h2>
        <h3 data-aos="fade-left">LET'S GET TO KNOW EACH OTHER.</h3>
      </div>
      <div className="aboutContent-list">
        <div className="aboutContent row">
          {aboutContent.map(function (aboutContent) {
            const { id,occupation,headText,text } = aboutContent;
            return (
              <div className='aboutMe' key={`${id}`}>
                 <div className="picture-container">
                 <img data-aos="fade-left" className="aboutPicture" src={require('/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/img/photo.png')}/>  
                </div>
                <div className="about-content" data-aos="fade-right">
                    <h1>My name is</h1>
                <h2>{`${headText}`}</h2>
                <h5>{`${occupation}`}</h5>
                <div> </div>
                <p>{`${text}`}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default AboutSection;