import React from "react";
import "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/components/ServicesSection/ServicesSection.css";
const services = [
  { id: 1, img: "https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_256.ico", label: "dsads", text: "asdasd" },
  { id: 2, img: "https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_256.ico", label: "asdasd", text: "asd" },
  { id: 3, img: "https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_256.ico", label: "asdasd", text: "asdasd" },
];

const ServiceSection = () => {
  return (
    <div className="services-container">
      <div className="text-center">
        <h2 data-aos="fade-up">SERVICES</h2>
        <h3 data-aos="fade-left">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div className="services-list">
        <div className="service row">
          {services.map(function (service) {
            const { id, img, label, text } = service;
            return (
              <div className='service' key={`${id}`}>
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

export default ServiceSection;
