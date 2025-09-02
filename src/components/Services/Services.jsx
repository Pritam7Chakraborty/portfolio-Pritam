// src/components/Services/Services.jsx
import React from "react";
import arrow_icon from "../../assets/arrow_icon.png";
import services_data from "../../assets/servicesData"; // Using your provided file

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center gap-16 md:gap-20"
    >
      {/* --- Introduction Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl px-4">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-left">My Services</h1>
          <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-orange-500 to-fuchsia-500 rounded-full"></div>
        </div>
        <p className="text-lg text-neutral-300 leading-relaxed lg:mt-2">
          I offer a range of services to bring your digital vision to life, from building responsive front-end interfaces to engineering robust back-end systems. Here's how I can help you succeed.
        </p>
      </div>

      {/* --- Redesigned Services Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {services_data.map((service) => (
          <div
            key={service.id}
            className="group flex flex-col gap-5 p-8 rounded-2xl bg-[#181818] 
                       border border-neutral-800 shadow-lg cursor-pointer
                       transition-all duration-300
                       hover:border-purple-500 hover:-translate-y-2"
          >
            {/* Using service.icon from your data */}
            <div className="text-4xl">{service.icon}</div>
            
            {/* Using service.title from your data */}
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent min-h-[80px]">
              {service.title}
            </h2>
            
            {/* Using service.description from your data */}
            <p className="text-neutral-300 leading-relaxed">
              {service.description}
            </p>
            
            <div className="flex items-center gap-4 mt-auto text-lg font-medium text-white
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p>Read More</p>
              <img src={arrow_icon} alt="arrow icon" className="w-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;