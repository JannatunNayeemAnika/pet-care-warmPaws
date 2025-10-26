import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-pink-400">
        Our Winter Care Services
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.serviceId}
            className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 bg-white"
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-64 sm:h-72 md:h-64 object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-5 flex flex-col justify-between h-64">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-pink-400">
                  {service.serviceName}
                </h3>
                <p className="text-gray-600 mb-2">{service.providerName}</p>
                <p className="font-semibold text-gray-800 mb-4">
                  💲<span className="text-pink-400">{service.price}</span> | ⭐ {service.rating}
                </p>
              </div>
              <Link
                to={`/service/${service.serviceId}`}
                className="block bg-pink-400 text-white text-center py-3 rounded-lg hover:bg-pink-500 transition text-sm sm:text-base"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
