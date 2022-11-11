import React from "react";
import "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/components/ServicesSection/ServicesSection.css";
const services = [
  { id: 1, img: 1, label: "dsads", text: "asdasd" },
  { id: 2, img: 2, label: "asdasd", text: "asd" },
  { id: 3, img: 3, label: "asdasd", text: "asdasd" },
  { id: 4, img: 4, label: "asdasd", text: "asdasd" },
  { id: 5, img: 5, label: "asdasd", text: "asdasd" },
  { id: 6, img: 6, label: "asdasd", text: "asdasd" },
  { id: 7, img: 7, label: "asdasd", text: "asdasd" },
  { id: 8, img: 8, label: "asdasd", text: "asdasd" },
];

const ServiceSection = () => {
  return (
    <div className="services-container">
      <div className="text">
        <h2 data-aos="fade-up">TECHNOLOGIES</h2>
        <h3 data-aos="fade-left">I'VE BEEN WORKING WITH:</h3>
      </div>
      <div className="services-list">
        <div data-aos="fade-up" className="service row">
          {services.map(function (service) {
            const { id, img } = service;
            return (
              <div className='service' key={`${id}`}>
                <img className="icons-container" src={require(`/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/img/tech-icons/` + `${img}` + `.png`)} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
