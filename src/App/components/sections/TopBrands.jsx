import React, { useEffect, useState } from "react";

const TopBrands = () => {
  const brands = [
    {
      name: "Nestlé Pakistan",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDnOanrD0heZevj-yHcfBM3TzgqNsiYeDNA&s",
    },
    {
      name: "Coca-Cola Pakistan",
      logo: "https://yt3.googleusercontent.com/x4iIqGSxWjrawrVB-NWC9by9KWinwI9ZDlcsfAipO_OkrUALcg5tOASdFUrYpR530N44TNUyyg=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Unilever Pakistan",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyeMDxokEJXwj4FQTRib4__BgEz7FC7QbBAg&s",
    },
    {
      name: "Engro Corporation",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMzbU_IjvIx8Rjd_eORQicWrHRfuuQVl6jg&s",
    },
    {
      name: "Pak Suzuki Motors",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3o7QmrtwsSxi1XYGV84g0OHBu5m5AlQAm3Q&s",
    },
    {
      name: "Khaadi",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrsPpOMYa6XqgBMEFUWpOOIFJOeg3hETp4-w&s",
    },

    {
      name: "Sapphire",
      logo: "https://pk.sapphireonline.pk/cdn/shop/files/new-logo_751bbed4-3698-47e5-81b7-db9ffceed905.png?height=628&pad_color=fff&v=1674561074&width=1200",
    },

    {
      name: "Alkaram Studio",
      logo: "https://www.alkaramstudio.com/cdn/shop/files/700x105.png?height=628&pad_color=fff&v=1713331800&width=1200",
    },
    {
      name: "Beaconhouse",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE93IA32pP-uUiRInx3PYpCqyhq2fGXW2qkQ&s",
    },
    {
      name: "Mughal Iron & Steel",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7o2Z0yMwh-8AI2KwwzkdoEtJg8nA7m0t_Q&s",
    },
    {
      name: "Gul Ahmed",
      logo: "https://banner2.cleanpng.com/20180402/ytw/avhj7zj06.webp",
    },
    {
      name: "Jazz",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jazz_logo.svg/1200px-Jazz_logo.svg.png",
    },
  ];

  // State to randomly assign animation directions
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    // Function to randomly assign animation directions (left or right)
    const getRandomDirection = () => {
      const directions = ["move-right", "move-left"];
      return directions[Math.floor(Math.random() * directions.length)];
    };

    // Generate a random animation for each logo
    setAnimations(brands.map(() => getRandomDirection()));
  }, []);

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center px-4 mb-10">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12">
          Top Pakistan Brands
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-10">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`flex justify-center items-center ${
                animations[index] === "move-left"
                  ? "animate-marquee-left"
                  : "animate-marquee-right"
              }`}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-auto h-24 object-contain ring-offset-fuchsia-200  mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
