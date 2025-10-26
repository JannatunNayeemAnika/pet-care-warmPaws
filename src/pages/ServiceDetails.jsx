import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.serviceId === parseInt(serviceId));
        setService(found);
      });
  }, [serviceId]);

  if (!service)
    return (
      <p className="text-center mt-20 text-gray-600 text-lg">
        Loading...
      </p>
    );

  const handleBooking = () => {
    toast.success(`Booked: ${service.serviceName}`, { duration: 2500, icon: '🎉' });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10">
      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between mt-6 md:mt-0">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-pink-400">
              {service.serviceName}
            </h2>
            <p className="text-gray-600 mb-1 text-sm sm:text-base">
              Provider: {service.providerName}
            </p>
            <p className="text-gray-600 mb-1 text-sm sm:text-base">
              Email: {service.providerEmail}
            </p>
            <p className="font-semibold text-gray-800 mb-4 text-base sm:text-lg">
              Price: <span className="text-pink-400">${service.price}</span> | Rating: ⭐{service.rating}
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-pink-400">
              Service Details:
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">{service.description}</p>
          </div>

          <button
            onClick={handleBooking}
            className="mt-6 sm:mt-8 w-full md:w-auto bg-pink-400 text-white px-6 py-3 rounded-lg hover:bg-pink-500 transition text-sm sm:text-base"
          >
            Book Now
          </button>
        </div>
      </div>

      <Toaster position="top-center" />
    </div>
  );
};

export default ServiceDetails;
