import React, { useState } from "react";

const CitySection = () => {
  const cities = [
    { name: "Karachi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm37PsGZ8nZOLqekRyg-pxvMtKvELK890LXA&s" },
    { name: "Lahore", image: "https://files.nieuwwij.nl/app/uploads/2015/03/lahore-2299773_1920-1170x680.jpg" },
    { name: "Islamabad", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDyh9X1DMWT30XJRqaz_2stqDTXe6kXKV0iA&s" },
    { name: "Hyderabad", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/A_typical_charminar_evening.jpg/680px-A_typical_charminar_evening.jpg" },
    { name: "Peshawar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kzsLgRetvfa_FmzWzckqjv4W2JoHRoz_MIVGjYfqu4b8aKBEAMyL03dHZbHqic6EGvg&usqp=CAU" },
    { name: "Quetta", image: "https://i.tribune.com.pk/media/images/513150-quettaphotoexpressnaseemjames-13619093901674056343-0/513150-quettaphotoexpressnaseemjames-13619093901674056343-0.jpg" },
    { name: "Gujranwala", image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Nishan-E-Manzil_Gujranwala_20140925.jpg" },
    { name: "Faisalabad", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3prThAgYsx7M7zFSCSfoHL2NpiE_Tpndvw&s" },
    { name: "Multan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSIsr4ABtpc-NGDmuJO8qKwTg9ricBUYw3gA&s" },
    { name: "Sukkur", image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Rohri.jpg" },
    { name: "Sialkot", image: "https://www.salamair.com/images/sialkotnew.jpg" },
    { name: "Rawalpindi", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/127579188.jpg?k=ba978d0e3f3278c76498b07d0d888a649b70d8c28bd7dc0e9055b53346459404&o=&hp=1" },
  ];

  const [showAll, setShowAll] = useState(false);

  const displayedCities = showAll
    ? cities 
    : cities.slice(0, 6); 

  return (
    <section className="bg-gray-100 rounded-lg md:py-8 my-4">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
        Find Suppliers from Top Cities in Pakistan
      </h2>
      <div className="md:w-[90%] xl:w-[80%] sm:w-[85%] w-full mx-auto text-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-5 md:gap-y-2 sm:gap-x-8 md:gap-x-10 gap-2 gap-y-3 px-2 md:px-14">
          {displayedCities.map((city, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-200 md:w-48 md:h-28"
            >
              {/* City Background Image */}
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-28 md:h-40 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
              {/* City Name */}
              <p className="absolute inset-0 flex items-center justify-center text-white font-semibold text-md sm:text-xl font-sans">
                {city.name}
              </p>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-6 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition duration-300"
          >
            See More Cities
          </button>
        )}

        {/* See Less Button */}
       
      </div>
    </section>
  );
};

export default CitySection;
